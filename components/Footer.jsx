import Image from 'next/image';
import logo from '@/assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='sticky bottom-0 top-[100vh] bg-gray-200 py-4 mt-24'>
      <div className='mb-0'></div>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-4'>
        <div className='mb-4 md:mb-0'>
          <Image src={logo} alt='Logo' className='h-8 w-auto' />
        </div>

        <div>
          <p className='text-sm text-gray-500 mt-2 md:mt-0'>
            &copy; {currentYear} Senlogis. Tous droits reservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
