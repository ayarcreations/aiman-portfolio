import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function HeroFrameSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !containerRef.current) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Define sequence settings
    const frameCount = isMobile ? 271 : 240; // 271 frames for mobile, 240 for desktop
    const currentFrame = (index: number) => {
      const folder = isMobile ? 'frame-phone' : 'frame-desktop';
      // Use ezgif-frame-XXX.jpg naming pattern
      return `/${folder}/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`;
    };

    const images: HTMLImageElement[] = [];
    const airpods = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const render = () => {
      if (images[airpods.frame] && images[airpods.frame].complete) {
        // Adjust canvas to match device pixel ratio and container size
        const parent = canvas.parentElement;
        if(parent) {
           canvas.width = parent.clientWidth;
           canvas.height = parent.clientHeight;
           
           // draw image center cover
           const img = images[airpods.frame];
           const hRatio = canvas.width / img.width;
           const vRatio = canvas.height / img.height;
           const ratio  = Math.max( hRatio, vRatio );
           const centerShift_x = ( canvas.width - img.width*ratio ) / 2;
           const centerShift_y = ( canvas.height - img.height*ratio ) / 2;  
           context.clearRect(0,0,canvas.width, canvas.height);
           context.drawImage(img, 0,0, img.width, img.height,
                              centerShift_x,centerShift_y,img.width*ratio, img.height*ratio);  
        }
      } else {
         // Fallback rendering if images are missing or not loaded yet
         const parent = canvas.parentElement;
         if(parent) {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
            context.clearRect(0,0,canvas.width, canvas.height);
            // Draw a premium abstract shape or gradient
            const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#FAFAFA');
            gradient.addColorStop(1, '#F4F4F5');
            context.fillStyle = gradient;
            context.fillRect(0, 0, canvas.width, canvas.height);

            // Add a subtle tech pattern or placeholder text
            context.font = '20px Inter, sans-serif';
            context.fillStyle = '#A1A1AA';
            context.textAlign = 'center';
            context.fillText('3D Device Render placeholder', canvas.width/2, canvas.height/2);
            context.font = '14px Inter, sans-serif';
            context.fillText(`Add ${isMobile ? 'frame-phone' : 'frame-desktop'}/001.webp sequence to /public`, canvas.width/2, canvas.height/2 + 30);
         }
      }
    };

    // Load first frame immediately
    if (images[0]) {
      images[0].onload = render;
      // also render immediately for fallback
      render();
    }

    const st = gsap.to(airpods, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=200%',
        scrub: 0.5,
      },
      onUpdate: render, // use GSAP onUpdate
    });

    window.addEventListener('resize', render);
    
    return () => {
      st.kill();
      window.removeEventListener('resize', render);
    };
  }, [isMobile]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center">
        <canvas ref={canvasRef} className="w-full h-full object-cover" />
    </div>
  );
}
