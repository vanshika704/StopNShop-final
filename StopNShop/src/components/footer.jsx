function Footers(){
    return<><footer className="bg-blue-100/80 shadow-2xl mt-10  rounded-t-2xl shadow-amber-50 font-sans dark:bg-neutral-900">
    <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          
            <div className="sm:col-span-2">
                <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe to Our Newsletter for Exclusive Offers</h1>

                <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input id="email" type="email" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Enter your email address" />
            
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                        Subscribe
                    </button>
                </div>
            </div>

         
            <div>
                <p className="font-semibold text-gray-800 dark:text-white">Quick Links</p>
                <div className="flex flex-col items-start mt-5 space-y-2">
                    <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Home</p>
                    <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Shop Now</p>
                    <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Order Tracking</p>
                    <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Contact Us</p>
                </div>
            </div>

           
            <div>
                <p className="font-semibold text-gray-800 dark:text-white">Customer Service</p>
                <div className="flex flex-col items-start mt-5 space-y-2">
                    <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Returns & Exchanges</p>
                    <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Shipping Information</p>
                    <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">FAQ</p>
                    <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Privacy Policy</p>
                </div>
            </div>

            
            <div>
                <p className="font-semibold text-gray-800 dark:text-white">Follow Us</p>
                <div className="flex flex-col items-start mt-5 space-y-2">
                    <div className="flex gap-4">
                        <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                        <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                        <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                        <img src="https://www.svgrepo.com/show/94698/github.svg" width="30" height="30" alt="gt" />
                        <img src="https://www.svgrepo.com/show/22037/path.svg" width="30" height="30" alt="pn" />
                        <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                    </div>

                    <p className="font-semibold text-gray-800 dark:text-white mt-4">Download Our App</p>
                    <div className="flex gap-4 mt-2">
                        <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="110" alt="google-play" />
                        <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="110" alt="app-store" />
                    </div>
                </div>
            </div>
        </div>
      
        
       
    </div>
</footer>
</>
}
export default Footers;