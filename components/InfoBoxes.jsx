import InfoBox from './InfoBox';

const InfoBoxes = () => {
  return (
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <InfoBox
            heading='Pour les locataires'
            backgroundColor='bg-gray-100'
            buttonInfo={{
              text: 'Parcourir',
              link: '/properties',
              backgroundColor: 'bg-black',
            }}
          >
            Trouvez la propriété locative de vos rêves. Ajouter propriétés et contact aux favoris
 les propriétaires.
          </InfoBox>
          <InfoBox
            heading='Pour les agences immobilières'
            backgroundColor='bg-blue-100'
            buttonInfo={{
              text: 'Ajouter',
              link: '#',
              backgroundColor: 'bg-blue-500',
            }}
          >
           Listez vos propriétés et touchez des locataires potentiels. Louer courte ou longue durée
 terme.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};
export default InfoBoxes;
