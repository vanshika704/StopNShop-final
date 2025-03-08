// import { ProductCard } from "./card";

// export function NewArrivals() {
//   const newArrivals = [
//     {
//       image: "src/assets/pexels-webdonut-19090.jpg",
//       title: "Unisex Sneakers",
//       description: "Trendy sneakers for any outfit, available in different sizes",
//       src: "src/assets/pexels-webdonut-19090.jpg"
//     },
//     {
//       image: "src/assets/pexels-marleneleppanen-1183266.jpg",
//       title: "Men's Hoodie",
//       description: "Comfortable and trendy t-shirt for men, made with high-quality fabric.",
//       src: "src/assets/pexels-vanyaoboleninov-2916814.jpg"
//     },
//     {
//       image: "src/assets/pexels-melvin-buezo-1253763-2529148.jpg",
//       title: "Trendy Shoes",
//       description: "Branded shoes at lesser price.",
//       src: "src/assets/pexels-alipazani-2584269.jpg"
//     },
//     {
//       image: "src/assets/pexels-alipazani-2584269.jpg",
//       title: "Women Jacket",
//       description: "Trendy jackets for any outfit, available in different sizes.",
//       src: "src/assets/pexels-godisable-jacob-226636-914668.jpg"
//     }
//   ];

//   return (
//     <><div className="flex justify-center items-center h-full px-4 md:px-8">
//           <div className="w-full  mx-auto">
//               {/* Centered title */}
//               <div className="text-center mb-12">
//                   <h2 className="font-extrabold text-3xl mt-10 sm:text-4xl md:text-5xl lg:text-6xl text-gray-900" style={{ fontFamily: 'Playfair Display' }}>
//                       NEW ARRIVALS
//                   </h2>
//               </div>

//               {/* Centered product cards */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                   {newArrivals.map((item, index) => (
//                       <ProductCard
//                           key={index}
//                           image={item.image}
//                           title={item.title}
//                           description={item.description}
//                           src={item.src} />
//                   ))}
//               </div>
//           </div>

//       </div> <div className="w-full text-center mt-10"><button className="bg-neutral-200 text-center justify-center w-40 h-12 border-2 rounded-full text-lg text-black">View All</button></div></>
//   );
// }
import { ProductCard } from "./card";

// Import images correctly
import sneakersImage from '../assets/pexels-webdonut-19090.jpg';
import hoodieImage from '../assets/pexels-marleneleppanen-1183266.jpg';
import shoesImage from '../assets/pexels-melvin-buezo-1253763-2529148.jpg';
import jacketImage from '../assets/pexels-alipazani-2584269.jpg';
import hoodieSrc from '../assets/pexels-vanyaoboleninov-2916814.jpg';
import shoesSrc from '../assets/pexels-alipazani-2584269.jpg';
import jacketSrc from '../assets/pexels-godisable-jacob-226636-914668.jpg';

export function NewArrivals() {
  const newArrivals = [
    {
      image: sneakersImage,
      title: "Unisex Sneakers",
      description: "Trendy sneakers for any outfit, available in different sizes",
      src: hoodieSrc
    },
    {
      image: hoodieImage,
      title: "Men's Hoodie",
      description: "Comfortable and trendy t-shirt for men, made with high-quality fabric.",
      src: shoesSrc
    },
    {
      image: shoesImage,
      title: "Trendy Shoes",
      description: "Branded shoes at lesser price.",
      src: shoesSrc
    },
    {
      image: jacketImage,
      title: "Women Jacket",
      description: "Trendy jackets for any outfit, available in different sizes.",
      src: jacketSrc
    }
  ];

  return (
    <>
      <div className="flex justify-center items-center h-full px-4 md:px-8">
        <div className="w-full mx-auto">
          {/* Centered title */}
          <div className="text-center mb-12">
            <h2
              className="font-extrabold text-3xl mt-10 sm:text-4xl md:text-5xl lg:text-6xl text-gray-900"
              style={{ fontFamily: 'Playfair Display' }}
            >
              NEW ARRIVALS
            </h2>
          </div>

          {/* Centered product cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newArrivals.map((item, index) => (
              <ProductCard
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                src={item.src}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full text-center mt-10">
        <button className="bg-neutral-200 text-center justify-center w-40 h-12 border-2 rounded-full text-lg text-black">
          View All
        </button>
      </div>
    </>
  );
}
