import image from '../assets/images/salt.jpg';
import ReturnButton from './ReturnButton';

const EmailSubscribe = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-700">
      <ReturnButton />
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
        <div className="flex flex-col md:flex-row rounded-l-xl">
          <img src={image} alt="salt"
            className="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl
              md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200" />
          <div className="p-6 md:p-12">
            <h2 className="font-serif text-xl font-medium text-center text-white
                md:text-left">
              Get diet and fitness tips in your inbox
            </h2>
            <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white
                md:text-left">
              Eat better and excercise better. Sign up for the Diet and fitness newsletter.
            </p>
            <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
              <input type="text" placeholder="Enter you email address"
                className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600
                placeholder:text-xs md:text-left placeholder:md:text-left focus:outline-none"
              />
              <button className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500
                 hover:bg-lime-700 hover:text-white duration-300">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailSubscribe;
