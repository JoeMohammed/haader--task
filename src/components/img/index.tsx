import { LazyLoadImage } from 'react-lazy-load-image-component';
import { TImage } from 'types/image.types';

const Image = ({ height, width, alt, src }: TImage) => (
  <div className='img_full'>
    <LazyLoadImage
      height={height}
      width={width}
      alt={alt}
      src={src} // use normal <img> attributes as props
      className="d-block img-fluid"
    />
  </div>
);
export default Image;