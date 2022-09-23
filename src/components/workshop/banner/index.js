import art from "../../../assets/art-01.svg";
function Banner() {
  return (
    <section className="dark:bg-[#202124] dark:text-white  min-h-80vh p-6 lg:px-36">
      <div className="dark:bg-[#202124] dark:text-white bg-white flex flex-wrap  justify-evenly items-center ">
        <div className="lg:pl-16 w-full lg:w-5/12 ">
          <div className=" font-bold text-2xl lg:text-5xl 2xl:text-7xl text-center lg:text-left  ">
            <h2>Workshop</h2>
          </div>
          <p className="dark:text-[#B5B5B5] montserrat pt-4 lg:pt-6 lg:text-3xl 2xl:pt-8 px-4 lg:px-0  text-[#141010] text-center lg:text-left">
            We conduct numerous workshops on arts & crafts. <br />
            This is an incredible opportunity to discover your untapped talent &
            develop new hobbies.
            <br />
            These workshops are on a regular weekly/monthly basis, as follows
          </p>
          <div className=" flex justify-center lg:justify-start lg:pt-28  2xl:pt-40 py-6">
            <button className="dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat lg:px-16 lg:py-2 lg:rounded-xl 2xl:px-24 2xl:py-3 2xl:text-2xl 2xl:rounded-2xl">
              Book Now
            </button>
          </div>
        </div>
        <div className=" lg:pt-20 2xl:pt-48 flex justify-center lg:justify-end w-full lg:w-7/12">
          <div className="w-full px-10 lg:px-0 pt-10 lg:pt-0">
            <img className="w-full" src={art} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Banner;
