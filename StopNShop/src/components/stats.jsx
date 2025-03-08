
// import CountUp from 'react-countup'; // Import the CountUp component

// function Stats() {
//   return (
//     <div className="flex w-2/5 justify-around items-center bg-transparent py-10">
//       {/* Total Sales */}
//       <div className="text-center">
//         <div className="text-3xl font-bold text-gray-800">
//           <CountUp start={0} end={5000} duration={2.5} separator="," />+
//         </div>
//         <p className="text-lg text-gray-600">Total Sales</p>
//       </div>

//       {/* Products Sold */}
//       <div className="text-center">
//         <div className="text-3xl font-bold text-gray-800">
//           <CountUp start={0} end={12000} duration={3} separator="," />+
//         </div>
//         <p className="text-lg text-gray-600">Products Sold</p>
//       </div>

//       {/* Happy Customers */}
//       <div className="text-center">
//         <div className="text-3xl font-bold text-gray-800">
//           <CountUp start={0} end={8000} duration={3.5} separator="," />+
//         </div>
//         <p className="text-lg text-gray-600">Happy Customers</p>
//       </div>
//     </div>
//   );
// }

// export default Stats;
import CountUp from 'react-countup'; // Import the CountUp component

function Stats() {
  return (
    <div className="flex flex-wrap w-full justify-around items-center bg-transparent py-4">
      {/* Total Sales */}
      <div className="text-center flex flex-col items-center px-2 py-4">
        <div className="text-3xl font-boldxs:text-white md:text-white sm:text-white lg:text-neutral-900">
          <CountUp start={0} end={5000} duration={2.5} separator="," />+
        </div>
        <p className="text-lg xs:text-white md:text-white sm:text-white lg:text-neutral-900">Total Sales</p>
      </div>

      {/* Vertical Separator */}
      <div className="hidden md:block border-l-2 border-gray-900 h-20 mx-4"></div>

      {/* Products Sold */}
      <div className="text-center flex flex-col items-center px-6 py-4">
        <div className="text-3xl font-boldxs:text-white md:text-white sm:text-white lg:text-neutral-900">
          <CountUp start={0} end={12000} duration={3} separator="," />+
        </div>
        <p className="text-lg xs:text-white md:text-white sm:text-white lg:text-neutral-900">Products Sold</p>
      </div>

      {/* Vertical Separator */}
      <div className="hidden md:block border-l-2 border-gray-900 h-20 mx-4"></div>

      {/* Happy Customers */}
      <div className="text-center flex flex-col items-center px-6 py-4">
        <div className="text-3xl font-bold xs:text-white md:text-white sm:text-white lg:text-neutral-900">
          <CountUp start={0} end={8000} duration={3.5} separator="," />+
        </div>
        <p className="text-lgxs:text-white md:text-white sm:text-white lg:text-neutral-900">Happy Customers</p>
      </div>
    </div>
  );
}

export default Stats;
