'use client';
import { useState, useEffect } from 'react';
import PropertyCard from '@/components/PropertyCard';
import Spinner from '@/components/Spinner';
import Pagination from '@/components/Pagination';
import { fetchProperties } from '@/utils/requests';
import { FaExclamationTriangle } from 'react-icons/fa';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [totalItems, setTotalItems] = useState(1);

  useEffect(() => {
    const fetchAppartments = async () => {
      try {
        const res = await fetch(
          `http://localhost:8081/api/agence/appartment`,
          { cache: 'no-store' }
        );

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        setProperties(data);
        setTotalItems(data.length());
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppartments();
  }, [page, pageSize]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return loading ? (
    <Spinner />
  ) : (
    <section className='px-4 py-8'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        {properties.length === 0 ? (
          <section className='bg-blue-50 min-h-screen flex-grow'>
          <div className='container m-auto max-w-2xl py-24'>
            <div className='bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0'>
              <div className='flex justify-center'>
                <FaExclamationTriangle className='fas fa-exclamation-triangle fa-5x text-8xl text-yellow-400'></FaExclamationTriangle>
              </div>
              <div className='text-center'>
                <h1 className='text-3xl font-bold mt-4 mb-2'>Aucun logement trouvé</h1>
                <p className='text-gray-500 text-xl mb-10'>
                La page que vous recherchez n'existe pas.
                </p>
              </div>
            </div>
          </div>
          <div className='flex-grow'></div>
        </section>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {properties.map((property) => (
              <PropertyCard key={property.idAppartement} property={property} />
            ))}
          </div>
        )}
        <Pagination
          page={page}
          pageSize={pageSize}
          totalItems={totalItems}
          onPageChange={handlePageChange}
        />
      </div>
      <div></div>
    </section>
  );
};
export default Properties;
