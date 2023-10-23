import phoneImage from "./public/alexandra.png";

export default function Main() {
  return (
    <div className="flex flex-col justify-center h-screen bg-indigo-500 text-white p-20 diagonal-cut">
      <div className="max-w-xl space-y-6 ml-20 mt-[-40px]">
        <h2 className="text-6xl font-extrabold leading-tight tracking-tighter">
          Meet Your All-in-One Creator Store
        </h2>
        <p className="text-2xl font-medium leading-normal tracking-normal">
          Stan is the <span className="italic">easiest</span> way to make money
          online. All of your courses, digital products, and bookings are now
          hosted in your link-in-bio.
        </p>
        <button className="bg-green-300 text-blue-900 font-bold px-6 py-2 rounded-full flex items-center space-x-2 mt-6">
          <span>Continue</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
