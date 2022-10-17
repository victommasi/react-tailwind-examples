/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import bookmark from '../assets/images/bookmark.svg';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import image6 from '../assets/images/image6.jpg';
import ReturnButton from './ReturnButton';

const ImageGallery = () => {
  return (
    <div class="flex items-center justify-center min-h-screen bg-cyan-50">
      <ReturnButton />
      <div class="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
        <div
          class="flex flex-col items-center justify-center space-y-3 md:flex-row
           md:space-y-0 md:space-x-8 md:mb-24 md:justify-end"
        >
          <div class="group">
            <a href="#">Vector</a>
            <div
              class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"
            ></div>
          </div>
          <div class="group">
            <a href="#">Illustrations</a>
            <div
              class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"
            ></div>
          </div>
          <div class="group">
            <a href="#">Images</a>
            <div
              class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"
            ></div>
          </div>
          <div class="group">
            <a href="#">Icons</a>
            <div
              class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"
            ></div>
          </div>
        </div>

        <div
          class="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0"
        >
          <div class="flex justify-between border-b">
            <input
              type="text"
              class="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none"
              placeholder="Search"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 text-gray-300 duration-200 hover:scale-110"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </button>
          </div>

          <button
            class="py-3 px-14 text-lg font-normal text-white bg-black border
             border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black"
          >
            Upload
          </button>
        </div>

        <div class="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div class="relative group">
            <img src={image1} alt="" class="w-72" />
            <div
              class="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500
               bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
            >
              <div class="flex justify-between w-full">
                <div class="font-normal">
                  <p class="text-sm">Abstract Painting</p>
                  <p class="text-xs">245 likes - 35 Shares</p>
                </div>
                <div class="flex items-center">
                  <img src="images/bookmark.svg" alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <div class="relative group">
            <img src={image2} alt="" class="w-72" />
            <div
              class="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500
               bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
            >
              <div class="flex justify-between w-full">
                <div class="font-normal">
                  <p class="text-sm">Abstract Painting</p>
                  <p class="text-xs">245 likes - 35 Shares</p>
                </div>
                <div class="flex items-center">
                  <img src="images/bookmark.svg" alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <div class="relative group">
            <img src={image3} alt="" class="w-72" />
            <div
              class="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500
               bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
            >
              <div class="flex justify-between w-full">
                <div class="font-normal">
                  <p class="text-sm">Abstract Painting</p>
                  <p class="text-xs">245 likes - 35 Shares</p>
                </div>
                <div class="flex items-center">
                  <img src="images/bookmark.svg" alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <div class="relative group">
            <img src={image4} alt="" class="w-72" />
            <div
              class="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500
               bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
            >
              <div class="flex justify-between w-full">
                <div class="font-normal">
                  <p class="text-sm">Abstract Painting</p>
                  <p class="text-xs">245 likes - 35 Shares</p>
                </div>
                <div class="flex items-center">
                  <img src="images/bookmark.svg" alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <div class="relative group">
            <img src={image5} alt="" class="w-72" />
            <div
              class="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 
              bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
            >
              <div class="flex justify-between w-full">
                <div class="font-normal">
                  <p class="text-sm">Abstract Painting</p>
                  <p class="text-xs">245 likes - 35 Shares</p>
                </div>
                <div class="flex items-center">
                  <img src="images/bookmark.svg" alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <div class="relative group">
            <img src={image6} alt="" class="w-72" />
            <div
              class="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 
              bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
            >
              <div class="flex justify-between w-full">
                <div class="font-normal">
                  <p class="text-sm">Abstract Painting</p>
                  <p class="text-xs">245 likes - 35 Shares</p>
                </div>
                <div class="flex items-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;