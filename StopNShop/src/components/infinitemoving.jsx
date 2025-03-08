// import  { useState, useEffect } from 'react';

// const Carousel = () => {
//   const images = [
//     "src/assets/zaralogo.jpg",
//     "src/assets/Versace-logo-and-symbol-meaning-history-PNG-brand.jpeg",
//     "src/assets/parada.jpg",
//     "src/assets/gucci.jpg",
//     "src/assets/calvin-klein-logo-design-history-and-evolution-kreafolk_b4fc9e1a-d37d-4adb-86fd-04ce6ec9bbd3.webp",
//     "src/assets/6a74f74dc779e8f4935ea21bc1767c44.jpg",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, [images.length]);

//   return (
//     <div className='bg-black w-full h-20'
//       style={{
//         position: 'relative',
       
//         overflow: 'hidden',
//       }}
//     >
//       <div
//         style={{
//           display: 'flex',
//           transition: 'transform 1s ease-in-out',
//           transform: `translateX(-${currentIndex * 100}%)`,
//         }}
//       >
//         {images.map((image, index) => (
//           <div className='h-full w-full'
//             key={index}
//             style={{
//               flexShrink: 0,
              
//             }}
//           >
//             <img className='h-20 w-full'
//               src={image}
//               alt={`Slide ${index}`}
//               style={{
               
//                 objectFit: 'contain',
//               }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
import { useState, useEffect } from 'react';

// Import images correctly
import zaralogo from '../assets/zaralogo.jpg';
import versaceLogo from '../assets/Versace-logo-and-symbol-meaning-history-PNG-brand.jpeg';
import parada from '../assets/parada.jpg';
import gucci from '../assets/gucci.jpg';
import calvinKlein from '../assets/calvin-klein-logo-design-history-and-evolution-kreafolk_b4fc9e1a-d37d-4adb-86fd-04ce6ec9bbd3.webp';
import calvinKleinAlt from '../assets/6a74f74dc779e8f4935ea21bc1767c44.jpg';

const Carousel = () => {
  const images = [
    zaralogo,
    versaceLogo,
    parada,
    gucci,
    calvinKlein,
    calvinKleinAlt,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div
      className="bg-black w-full h-20"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          transition: 'transform 1s ease-in-out',
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div className="h-full w-full" key={index} style={{ flexShrink: 0 }}>
            <img
              className="h-20 w-full"
              src={image}
              alt={`Slide ${index}`}
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
