import { useEffect, useRef, useState } from 'react';
import './BrandMark.css';

function BrandMark() {
  const ref = useRef(null);
  const [style, setStyle] = useState({ opacity: 0 });

  useEffect(() => {
    let raf = null;

    const compute = () => {
      raf = null;
      const el = ref.current;
      const hero = document.getElementById('brand-slot-hero');
      const header = document.getElementById('brand-slot-header');
      if (!el || !hero || !header) return;

      if (window.innerWidth < 768) {
        setStyle({ opacity: 0 });
        return;
      }

      const h = hero.getBoundingClientRect();
      const d = header.getBoundingClientRect();
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      const heroDocTop = h.top + scrollY;
      const travel = Math.max(heroDocTop - d.top, 1);
      const p = Math.min(Math.max(scrollY / travel, 0), 1);

      const left = h.left + (d.left - h.left) * p;
      const top = h.top + (d.top - h.top) * p;
      const width = h.width + (d.width - h.width) * p;

      setStyle({
        opacity: 1,
        width: `${width}px`,
        transform: `translate(${left}px, ${top}px)`,
      });
    };

    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="brand-mark" ref={ref} style={style} aria-hidden="true">
      <img src="/images/yaka-brand-logo.png" alt="" className="brand-mark__img" />
    </div>
  );
}

export default BrandMark;
