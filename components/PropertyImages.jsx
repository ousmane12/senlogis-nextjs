import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { dataURItoBlob } from '@/utils/imageUtil';
import { useMemo } from 'react';

const PropertyImages = ({ property }) => {
  const formatSrc = (index) => {
    const imgBlob = dataURItoBlob(property, index);
    const srcs = useMemo(() => window.URL.createObjectURL(imgBlob), [imgBlob]);
    return srcs;
  };
  const src = property.images.length > 0 ? formatSrc(0) : "/images/screen.jpg";
  return (
    <Gallery>
      <section className='bg-blue-50 p-4'>
        <div className='container mx-auto'>
          {property.images.length === 1 ? (
            <Item
              original={src}
              thumbnail={src}
              width='1000'
              height='600'
            >
              {({ ref, open }) => (
                <Image
                  ref={ref}
                  onClick={open}
                  src={src}
                  alt=''
                  className='object-cover h-[400px] mx-auto rounded-xl'
                  width={1800}
                  height={400}
                  priority={true}
                />
              )}
            </Item>
          ) : (
            <div className='grid grid-cols-2 gap-4'>
              {property.images.map((index) => (
                <div
                  key={index}
                  className={`
                  ${
                    images.length === 3 && index === 2
                      ? 'col-span-2'
                      : 'col-span-1'
                  }
                `}
                >
                  <Item
                    original={formatSrc(index)}
                    thumbnail={formatSrc(index)}
                    width='1000'
                    height='600'
                  >
                    {({ ref, open }) => (
                      <Image
                        ref={ref}
                        onClick={open}
                        src={formatSrc(index)}
                        alt=''
                        className='object-cover h-[400px] w-full rounded-xl'
                        width={0}
                        height={0}
                        sizes='100vw'
                        priority={true}
                      />
                    )}
                  </Item>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Gallery>
  );
};
export default PropertyImages;
