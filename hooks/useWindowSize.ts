/** Core */
import { useLayoutEffect, useState } from 'react';

interface WindowSize {
  width: number | null;
  height: number | null;
}

export function useWindowSize() {
  const [size, setSize] = useState<WindowSize>({
    width: null,
    height: null,
  });

  useLayoutEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width } = size;
  if (width! < 640) {
    return 'sm';
  }

  if (width! < 768) {
    return 'md';
  }

  if (width! < 1024) {
    return 'lg';
  }

  if (width! < 1280) {
    return 'xl';
  }

  return '2xl';
}
