import { Link } from "react-router-dom";
import art from "../../../assets/art-illustration.svg";
import craft from "../../../assets/craft.svg";
function Craft() {
  return (
    <section className="darkmode dark:text-white min-h-screen bg-[#EEEEEE] lg:py-16 p-6 lg:px-36">
      <div className="pt-10  darkmode bg-[#EEEEEE] justify-evenly flex flex-wrap ">
        <div className=" w-full p-4 lg:w-4/12">
          <div className="dark:text-white montserrat  font-semibold text-center lg:text-left text-4xl lg:text-5xl  2xl:text-7xl">
            <h3>Art</h3>
          </div>
          <p className="pt-2 lg:pt-3 lg:text-xl 2xl:pt-8 2xl:text-4xl text-center lg:text-left">
            Buy Unique and custom art from our very talented artists and
            craftsman. <br /> <br />
            We also do custom art based on your space and ideas which are
            creatively unique.{" "}
          </p>
          <div className="py-6  lg:pt-8 2xl:pt-10 text-center lg:text-left">
            <Link to="/art">
              <button className="dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg 2xl:rounded-2xl bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat  lg:px-14 lg:py-2 lg:rounded-xl 2xl:px-20 2xl:py-3 2xl:text-2xl 2xl:font-bold">
                Explore
              </button>
            </Link>
          </div>
        </div>
        <div className=" flex justify-center 2xl:justify-end w-60  lg:w-6/12">
          <div className="">
            <img src={art} />
          </div>
        </div>
      </div>
      <div className="pt-14 2xl:pt-40 pb-10 darkmode bg-[#EEEEEE] flex flex-wrap justify-evenly">
        <div className=" order-2 lg:order-1 flex justify-center items-center w-full   lg:w-6/12">
          <div className="  w-4/6">
            <img src={craft} />
          </div>
        </div>
        <div className=" w-full order-1  p-4 lg:w-4/12">
          <div className="dark:text-white montserrat  font-semibold text-center lg:text-left text-4xl lg:text-5xl 2xl:text-7xl">
            <h3>Craft</h3>
          </div>
          <p className="pt-2  lg:pt-3 lg:text-xl 2xl:pt-8  2xl:text-4xl text-center lg:text-left">
            Different unique art forms to choose from for various occasions like
            birthday, anniversary and gifting in general.
          </p>
          <div className="py-6 lg:pt-8 2xl:pt-10  text-center lg:text-left">
            <Link to="/craft">
              <button className="dark:bg-[#8AB4F8] dark:text-black  button-shadow rounded-lg 2xl:rounded-2xl bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat  lg:px-14 lg:py-2 lg:rounded-xl  2xl:px-20 2xl:py-3 2xl:text-2xl 2xl:font-bold">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Craft;
