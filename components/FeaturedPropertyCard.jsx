import Link from 'next/link';
import Image from 'next/image';
import {
  FaBed,
  FaBath,
  FaMoneyBill,
  FaMapMarker,
} from 'react-icons/fa';
import { useMemo } from 'react';
import { dataURItoBlob } from '@/utils/imageUtil';

const FeaturedPropertyCard = ({ property }) => {
  const getRateDisplay = () => {
    const { rates } = property;

    if (rates.monthly) {
      return `${rates.monthly.toLocaleString()} F/mois`;
    } else if (rates.weekly) {
      return `${rates.weekly.toLocaleString()} F/semaine`;
    } else if (rates.nightly) {
      return `${rates.nightly.toLocaleString()} F/nuitée`;
    }
  };

  const formatSrc = () => {
    const imgBlob = dataURItoBlob(property, 0);
    const srcs = useMemo(() => typeof window === 'undefined'? '/images/a1.jpg': window.URL.createObjectURL(imgBlob), [imgBlob]);
    return srcs;
  };

  const src = property.images.length > 0 ? formatSrc() : "/images/a1.jpg";

  return (
    <div className='bg-white rounded-xl shadow-md relative flex flex-col md:flex-row'>
      <Image
        src={src}
        alt=''
        width={0}
        height={0}
        sizes='100vw'
        className='object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl w-full md:w-2/5'
      />
      <div className='p-6'>
        <h3 className='text-xl font-bold'>{property.description}</h3>
        <div className='text-gray-600 mb-4'>{property.type}</div>
        <h3 className='absolute top-[10px] left-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
          {getRateDisplay()}
        </h3>
        <div className='flex justify-center gap-4 text-gray-500 mb-4'>
          <p>
            <FaBed className='inline-block mr-2' /> {property.beds}{' '}
            <span className='md:hidden lg:inline'>Chambres</span>
          </p>
          <p>
            <FaBath className='inline-block mr-2' /> {property.baths}{' '}
            <span className='md:hidden lg:inline'>Salles de bains</span>
          </p>
        </div>

        <div className='flex justify-center gap-4 text-green-900 text-sm mb-4'>
          {property.rates.nightly && (
            <p>
              <FaMoneyBill className='inline mr-2' /> Nuitée
            </p>
          )}

          {property.rates.weekly && (
            <p>
              <FaMoneyBill className='inline mr-2' /> Hebdomadaire
            </p>
          )}

          {property.rates.monthly && (
            <p>
              <FaMoneyBill className='inline mr-2' /> Mensuel
            </p>
          )}
        </div>

        <div className='border border-gray-200 mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='flex align-middle gap-2 mb-4 lg:mb-0'>
            <FaMapMarker className='text-lg text-orange-700' />
            <span className='text-orange-700'>
              {' '}
              {property.adress.city}, {property.adress.state}
            </span>
          </div>
          <Link
            href={`/properties/${property.idAppartement}`}
            className='h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Détails
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FeaturedPropertyCard;
