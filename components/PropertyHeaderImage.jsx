import Image from 'next/image';
import { dataURItoBlob } from '@/utils/imageUtil';
import { useMemo } from 'react';

const PropertyHeaderImage = ({ property }) => {
  const formatSrc = () => {
    const imgBlob = dataURItoBlob(property, 0);
    const srcs = useMemo(() => window.URL.createObjectURL(imgBlob), [imgBlob]);
    return srcs;
  };
  const src = property.images.length > 0 ? formatSrc() : "/images/a1.jpg";

  return (
    <section>
      <div className='container-xl m-auto'>
        <div className='grid grid-cols-1'>
          <Image
            src={src}
            alt=''
            className='object-cover h-[400px] w-full'
            width={0}
            height={0}
            sizes='100vw'
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};
export default PropertyHeaderImage;
