import { Link } from "react-router-dom";
import art from "../../../assets/images/art.jpg";
function Main() {
  return (
    <section className="2xl:pt-28 2xl:pb-20  w-full min-h-screen dark:bg-[#202124] dark:text-white flex flex-wrap lg:justify-between   lg:px-36">
      <div className="2xl:pt-40 lg:pt-28 lg:pl-10 text-center lg:text-left w-full  lg:w-6/12">
        <div>
          <h2 className=" text-1xl lg:text-1xl text-[#343434] dark:text-white font-bold pt-4 2xl:text-3xl">
            Buy Art , get Tattooed and join our DNA team of Artists & Creative
            People
          </h2>
          <h5 className="pt-3 2xl:pt-10  text-lg text-[#343434] dark:text-[#B5B5B5] montserrat 2xl:text-3zxl">
            Be Dimensionless
          </h5>
          <div className=" py-10 2xl:pt-48 lg:py-16">
            <Link to="/art">
              <button className="dark:bg-[#8AB4F8] dark:text-black btn primary-btn 2xl:px-28 2xl:rounded-2xl 2xl:font-semibold ">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-full lg:w-6/12 p-6">
        <div className="  py-4 lg:py-2  montserrat  ">
          <h5 className="font-semibold text-[#343434]  dark:text-gray-400 font-bold 2xl:text-4xl">
            FEATURED ART
          </h5>
        </div>
        <div className="pb-10 lg:pb-0 ">
          <div className="text-center rounded-3xl overflow-hidden shadow">
            <img className="w-full" src={art} alt="art" />
            <h6 className="bg-[#EEEEEE] dark:bg-gray-800  dark:text-gray-400 text-[#343434] montserrat py-6 font-semibold 2xl:text-2xl">
              Artist-Paul Lehansi
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Main;
