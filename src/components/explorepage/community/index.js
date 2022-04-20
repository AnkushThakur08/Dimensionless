import { Link } from "react-router-dom";
import com from "../../../assets/images/com.jpg";
function Community() {
  return (
    <section className="dark:bg-[#202124]  min-h-screen  dark:text-white p-6 lg:px-36  2xl:py-40">
      <div className=" flex flex-wrap lg:pt-28  justify-evenly ">
        <div className=" w-full  lg:w-6/12">
          <div className="montserrat  font-semibold text-center text-2xl lg:text-left lg:text-5xl 2xl:text-7xl">
            <h3>DNA Community</h3>
          </div>
          <p className="dark:text-[#B5B5B5] pt-2 lg:pt-4  lg:text-xl 2xl:pt-10 px-6 2xl:text-3xl lg:px-0 text-center lg:text-left">
            We have a creative community which meets every Monday 8 PM - 9 PM
            online to learn collaborate and earn together by sharing referrals
            to and help to grow each other.
          </p>
          <div className="py-8 lg:pt-12 2xl:pt-16 text-center lg:text-left">
            <Link to="/community">
              <button className="dark:bg-[#8AB4F8] dark:text-black  button-shadow rounded-lg  lg:px-14 lg:py-2 lg:rounded-xl 2xl:rounded-2xl bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat 2xl:px-20 2xl:py-3 2xl:text-2xl 2xl:font-bold">
                Explore
              </button>
            </Link>
          </div>
        </div>
        <div className=" flex items-center justify-center lg:justify-end  w-full  lg:w-6/12">
          <div className=" w-full">
            <img className="w-full" src={com} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Community;
