import { FaSearch, FaBars, FaUserCircle } from 'react-icons/fa'; // Import search, cart, and profile icons
import { IoCartOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa"; // Import a better arrow icon for the dropdown

function Navbar() {
  return (
    <nav className="h-16 w-full bg-white flex items-center px-4 md:px-8 shadow-md">
      {/* Logo */}
      <div className="font-extrabold text-4xl text-gray-900" style={{ fontFamily: 'Playfair Display' }}>
        StopNShop
      </div>

      {/* Main Navbar Items */}
      <div className="flex ml-10 mt-2 space-x-6 font-bold w-full justify-between items-center">
        {/* Desktop Navbar Links */}
        <div className="hidden sm:flex space-x-6 relative group" style={{ fontFamily: 'Poppins' }}>
          
          {/* Shop Dropdown */}
          <div className="cursor-pointer">
            <div className="flex items-center">
              Shop
              <FaAngleDown className="ml-1 text-gray-700" /> {/* Improved dropdown arrow */}
            </div>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-48 p-2 space-y-2">
              <div className="px-4 py-2 text-sm text-gray-800 cursor-pointer">Men&apos;s Clothing</div>
              <div className="px-4 py-2 text-sm text-gray-800 cursor-pointer">Women&apos;s Clothing</div>
              <div className="px-4 py-2 text-sm text-gray-800 cursor-pointer">Electronics</div>
              <div className="px-4 py-2 text-sm text-gray-800 cursor-pointer">Home Appliances</div>
              <div className="px-4 py-2 text-sm text-gray-800 cursor-pointer">Accessories</div>
            </div>
          </div>

          <div>OnSale</div>
          <div>New Arrivals</div>
          <div>Brands</div>
        </div>

        {/* Search Bar with Icons */}
        <div className="relative flex items-center sm:w-40 md:w-64 lg:w-80">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            className="bg-neutral-200 rounded-full h-10 text-sm pl-10 w-full"
            placeholder="Search for products"
          />
          
          {/* Cart and Profile Icons */}
          <div className="flex space-x-4 ml-3">
            <IoCartOutline className="text-neutral-800 text-2xl cursor-pointer" />
            <FaUserCircle className="text-neutral-800 text-2xl cursor-pointer" />
          </div>
        </div>

        {/* Mobile Hamburger Menu (Hidden on larger screens) */}
        <div className="md:hidden flex items-center">
          <FaBars className="text-gray-800 text-xl" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
