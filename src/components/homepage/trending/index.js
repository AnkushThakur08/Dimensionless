import art1 from "../../../assets/images/art1.jpg";
import art2 from "../../../assets/images/art2.png";
import art3 from "../../../assets/images/art3.jpg";
import { BiRupee } from "react-icons/bi";
function Trending() {
  return (
    <section className=" dark:bg-[#202124] p-6 lg:py-16 2xl:py-20 lg:px-40">
      <div className="  flex flex-wrap justify-center text-center items-center 2xl:py-10">
        <h2 className="font-semibold text-3xl 2xl:text-5xl">Trending ART</h2>
      </div>
      <div className=" pt-8 w-full flex flex-wrap justify-center lg:justify-between items-center text-center ">
        <div className=" w-8/12 lg:w-3/12  text-center  rounded-3xl overflow-hidden ">
          <img src={art1} />
          <div className=" darkmode bg-[#EEEEEE] flex montserrat justify-center items-center 2xl:text-3xl ">
            <div>
              <BiRupee />
            </div>
            <p className=" darkmode bg-[#EEEEEE] p-2 2xl:py-6 text-black">
              1000
            </p>
          </div>
        </div>
        <div className=" w-8/12 lg:w-3/12 mt-6 lg:mt-0 text-center  rounded-3xl overflow-hidden ">
          <div>
            <img src={art2} />
            <div className=" darkmode bg-[#EEEEEE] flex montserrat justify-center items-center 2xl:text-3xl ">
              <div>
                <BiRupee />
              </div>
              <p className="darkmode bg-[#EEEEEE] p-2 2xl:py-6 text-black">
                1000
              </p>
            </div>
          </div>
        </div>
        <div className=" w-8/12 lg:w-3/12 mt-6 lg:mt-0 text-center  rounded-3xl overflow-hidden ">
          <div>
            <img src={art2} />
            <div className="darkmode bg-[#EEEEEE] flex montserrat justify-center items-center 2xl:text-3xl ">
              <div>
                <BiRupee />
              </div>
              <p className="darkmode bg-[#EEEEEE] p-2 2xl:py-6 text-black">
                1000
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-8  lg:pt-10 2xl:pt-16">
        <button className="dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg 2xl:rounded-2xl bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat lg:px-14 lg:py-2 2xl:px-20 2xl:py-3 2xl:text-3xl ">
          Explore MORE ART
        </button>
      </div>
    </section>
  );
}
export default Trending;
