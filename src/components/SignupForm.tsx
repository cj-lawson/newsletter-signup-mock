import headerImgMobile from "../images/illustration-sign-up-mobile.svg";
import headerImgDesktop from "../images/illustration-sign-up-desktop.svg";
import checkIcon from "../images/icon-list.svg";

const SignupForm = () => {
  return (
    <>
      <div className="w-screen h-screen bg-white sm:w-11/12 md:w-11/12 md:h-11/12 lg:w-9/12 max-w-[900px] sm:max-h-[600px] sm:rounded-xl sm:p-4">
        <div className="w-full h-full flex flex-col md:flex-row-reverse md:justify-between">
          {/* hero image */}
          <div className="md:hidden">
            <img
              src={headerImgMobile}
              alt=""
              className="w-full max-h-[250px] object-cover"
            />
          </div>
          <div className="hidden md:block">
            <img src={headerImgDesktop} alt="" className="w-full h-full" />
          </div>

          {/* Main Container */}
          <div className="flex flex-col px-6 py-2 md:justify-center max-w-md">
            {/* Header */}
            <div className="mb-4">
              <h1 className="text-3xl font-bold mb-6 md:text-5xl">
                Stay Updated!
              </h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
            </div>

            {/* List */}
            <div>
              <ul className="flex flex-col space-y-4 mb-6">
                <li>
                  <div className="flex flex-row items-center">
                    <img
                      src={checkIcon}
                      alt=""
                      className="w-[18px] h-[18px] mr-4"
                    />
                    <p>Product discovery and building what matters</p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row items-center">
                    <img
                      src={checkIcon}
                      alt=""
                      className="w-[18px] h-[18px] mr-4"
                    />
                    <p>Mesauring to ensure updates are a success</p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row items-center">
                    <img
                      src={checkIcon}
                      alt=""
                      className="w-[18px] h-[18px] mr-4"
                    />
                    <p>And much more!</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Email Input */}
            <form action="">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 mt-4 bg-[#242742] text-white p-4 rounded-md hover:bg-gradient-to-b from-[#FF6A3A] to-[#FF527B] hover:shadow-[#FF527B]/50 shadow-lg hover:transition-all ease-in-out duration-300"
                >
                  Subscribe to monthly newsletter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
