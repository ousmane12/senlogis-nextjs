import FeaturedPropertyCard from './FeaturedPropertyCard';

const FeaturedProperties = async ({properties}) => {

  return (
    properties.length > 0 && (
      <section className='bg-blue-50 px-4 pt-6 pb-10'>
        <div className='container-xl lg:container m-auto'>
          <h2 className='text-2xl font-bold text-blue-500 mb-6 text-center'>
          Locations en vedette
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {properties.map((property) => (
              <FeaturedPropertyCard key={property.idAppartement} property={property} />
            ))}
          </div>
        </div>
      </section>
    )
  );
};
export default FeaturedProperties;
