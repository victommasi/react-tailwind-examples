import React from 'react';
import headphone from '../assets/images/headphone.png';
import heart from '../assets/images/heart.png';
import weight from '../assets/images/weight.png';
import ReturnButton from './ReturnButton';

const ProductModel = () => {
  return (
    <div class="flex items-center justify-center min-h-screen bg-slate-100">
      <ReturnButton />
      <div
        class="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16"
      >
        <div>
          <img
            src={headphone}
            alt="headphone"
            class="mx-auto duration-200 w-60 hover:scale-105"
          />
        </div>

        <div class="flex flex-col space-y-6">
          <div class="flex flex-col mb-4 space-y-3 text-center md:text-left">
            <div>
              <div
                class="inline-block px-3 py-1 text-sm text-white bg-black rounded-full"
              >
                Free Shipping
              </div>
            </div>

            <div class="max-w-sm text-2xl font-medium">
              Razer Kraken Kitty Edt Gaming Headset Quartz
            </div>
            <div class="flex flex-col mb-4 space-y-3 text-center md:text-left">
              <p class="line-through">$799</p>
              <p class="text-5xl font-bold">$599</p>
              <p class="text-sm font-light text-gray-400">
                This offer is valid until April 3rd or as long as stock lasts!
              </p>
            </div>

            <button
              class="w-full h-16 transition-all duration-200 bg-blue-500 text-white
                rounded-lg hover:bg-blue-600">
              Add to cart
            </button>

            <div class="flex items-center space-x-3 group">
              <div
                class="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"
              ></div>
              <div class="text-sm">50+ pcs. in stock</div>
            </div>

            <div
              class="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row"
            >
              <button
                class="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300
                 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
              >
                <img src={weight} alt="" class="w-8" />
                <span>Add to cart</span>
              </button>

              <button
                class="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300
                 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
              >
                <img src={heart} alt="" class="w-8" />
                <span>Add to wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModel;