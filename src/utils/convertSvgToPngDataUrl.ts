/* eslint-disable better-mutation/no-mutation */
export const convertSvgToPngDataUrl = async (svgUrl: string): Promise<string> => {
  const svgText = await fetch(svgUrl).then((res) => res.text());
  const svgBlob = new Blob([svgText], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(svgBlob);
  const img = new Image();
  img.src = url;

  return new Promise((resolve) => {
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0);
      const pngDataUrl = canvas.toDataURL('image/png');
      resolve(pngDataUrl);
    };
  });
};
