import { useEffect } from 'react';

export function usePixels(canvasRef, sketchFn) {
  const stride = 4;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pixels = ctx.createImageData(canvas.width, canvas.height);
    sketchFn(canvas.width, canvas.height, function setPixel(x, y, r, g, b) {
      const idx = (y * canvas.height * stride) + (x * stride);
      pixels.data[idx] = r;
      pixels.data[idx+1] = g;
      pixels.data[idx+2] = b;
      pixels.data[idx+3] = 255;
    });
    ctx.putImageData(pixels, 0, 0);
  }, [canvasRef, sketchFn]);
}
