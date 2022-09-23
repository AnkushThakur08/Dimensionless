import art from "../../../assets/art-02.svg";
function Banner() {
  return (
    <section className=" dark:bg-[#202124] dark:text-white min-h-80vh p-6 lg:px-36">
      <div className="lg:pt-8 dark:bg-[#202124] dark:text-white bg-white flex flex-wrap  justify-evenly items-center ">
        <div className="lg:pl-24 w-full lg:w-5/12 ">
          <div className=" font-bold text-2xl lg:text-4xl 2xl:text-7xl text-center lg:text-left  ">
            <h2>Training</h2>
          </div>
          <p className="dark:text-[#B5B5B5] montserrat  pt-4 lg:pt-6 lg:text-2xl 2xl:text-2xl 2xl:pt-8 px-4 lg:px-0  text-[#141010] text-center lg:text-left">
            We have regular Art classes on appointment basis from our very
            professional team of creative artists. These classes are scheduled
            at physical spaces and online. To know more about these trainings
            and sessions please check below.
          </p>
          <div className=" flex justify-center lg:justify-start  lg:pt-14 2xl:pt-36 py-6">
            <button className=" dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat lg:px-14 lg:py-2 lg:rounded-xl 2xl:px-24 2xl:py-3 2xl:text-2xl 2xl:rounded-2xl">
              Book Now
            </button>
          </div>
        </div>
        <div className=" lg:pt-20 2xl:pt-60 flex justify-center lg:justify-end w-full lg:w-7/12">
          <div className="w-full px-10 lg:px-0 pt-10 lg:pt-0">
            <img className="w-full" src={art} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Banner;
