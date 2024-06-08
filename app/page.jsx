'use client';
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';
import FeaturedProperties from '@/components/FeaturedProperties';

const HomePage = () => {
  const [properties, setProperties] = useState([]);

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
      } catch (error) {
        console.log(error);
      }
    };

    fetchAppartments();
  }, []);
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties properties={properties}/>
      <HomeProperties properties={properties}/>
    </>
  );
};
export default HomePage;
