/* import { FaWpforms } from "react-icons/fa";
import { ImUserCheck } from "react-icons/im";
import { AiFillTag } from "react-icons/ai";
import { FaCheck } from "react-icons/fa"; */
import code from "../../../assets/HomePage/code.png";
import form from "../../../assets/HomePage/form.png";
import metting from "../../../assets/HomePage/metting.png";
import part from "../../../assets/HomePage/part.png";
function Join() {
  return (
    <section className="bg-[#EEEEEE] p-6 lg:px-40 darkmode dark:text-white ">
      <div className="dark:bg-[#464646] dark:text-[#B5B5B5]  py-6  bg-[#EEEEEE]  text-center items-center 2xl:text-3xl">
        <h5> THE DIMENSIONLESS COMMUNITY</h5>
      </div>
      <div className="dark:bg-[#464646]  bg-[#EEEEEE] flex justify-center text-center items-center 2xl:pb-10">
        <h1 className="font-bold text-1xl 1xl:text-1xl">
          JOIN THE DNA COMMUNITY IN FOUR SIMPLE STEPS
        </h1>
      </div>
      <div className="dark:bg-[#464646] w-full py-8 px-10 bg-[#EEEEEE] flex flex-wrap  justify-evenly">
        <div className="dark:text-[#B5B5B5] w-full lg:w-3/12">
          <div className="text-center">
            <h6 className="font-bold text-lg 2xl:text-2xl">Scan the QR Code</h6>
          </div>
          <div className=" dark:text-[#8AB4F8] text-[#1A73E8] py-3 flex justify-center text-center text-4xl 2xl:text-6xl 2xl:pb-6">
            <img className="w-2/3" src={code} alt="QR Code image" />
          </div>

          {/* <p className="text-center lg:text-left text-sm py-2 px-6 2xl:text-xl 2xl:pl-20 2xl:pt-6 montserrat">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p> */}
        </div>
        <div className="dark:text-[#B5B5B5] w-full pt-8 lg:pt-0 lg:w-3/12">
          <div className="text-center">
            <h6 className="font-bold text-lg 2xl:text-2xl">
              Fill out the form
            </h6>
          </div>
          <div className="dark:text-[#8AB4F8] text-[#1A73E8] py-3 flex justify-center text-center text-4xl  2xl:text-6xl 2xl:pb-6 ">
            <img className="w-2/3" src={form} alt="Form image" />
          </div>

          {/* <p className="text-center lg:text-left text-sm py-2 px-6 2xl:text-xl 2xl:pl-20 2xl:pt-6 montserrat ">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p> */}
        </div>
        <div className="dark:text-[#B5B5B5] w-full pt-8 lg:pt-0 lg:w-3/12">
          <div className="text-center">
            <h6 className="font-bold text-lg  2xl:text-2xl">
              Attend the Weekly Meeting
            </h6>
          </div>
          <div className="dark:text-[#8AB4F8] text-[#1A73E8] py-3 flex justify-center text-center text-4xl   2xl:text-6xl 2xl:pb-6  ">
            <img className="w-2/3" src={metting} alt="Metting image" />
          </div>

          {/*  <p className=" text-center lg:text-left text-sm py-2 px-6  2xl:text-xl 2xl:pl-20 2xl:pt-6 montserrat ">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p> */}
        </div>
        <div className="dark:text-[#B5B5B5] w-full pt-8 lg:pt-0 lg:w-3/12">
          <div className="text-center">
            <h6 className="font-bold text-lg   2xl:text-2xl">
              Be a part of Dimensionless
            </h6>
          </div>
          <div className="dark:text-[#8AB4F8] text-[#1A73E8] py-3 flex justify-center text-center text-4xl  2xl:text-6xl 2xl:pb-6 ">
            <img className="w-2/3" src={part} alt="part image" />
          </div>

          {/* <p className="text-center lg:text-left text-sm py-2 px-6 2xl:text-xl 2xl:pl-20 2xl:pt-6 montserrat">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p> */}
        </div>
      </div>
      <div className=" flex justify-center dark:bg-[#464646] bg-[#EEEEEE] pt-4 pb-8 2xl:py-20 ">
        <button className="dark:bg-[#8AB4F8] dark:text-black bg-[#1A73E8] button-shadow montserrat text-white rounded-lg 2xl:rounded-2xl px-10 py-1 2xl:px-16 2xl:py-3 2xl:text-2xl">
          Scan Now
        </button>
      </div>
    </section>
  );
}
export default Join;
