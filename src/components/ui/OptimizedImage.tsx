import { component$ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  classStyle: string;
}

const OptimizedImage = component$(({ src, alt, width, height, classStyle }: OptimizedImageProps) => {
  return (
    <Image
      class={classStyle}
      src={src}
      layout="constrained"
      width={width}
      height={height}
      alt={alt}
    />
  );
});

export default OptimizedImage;
