import art from "../../../assets/Group 1760.svg";
function Banner() {
  return (
    <section className="dark:bg-[#202124] dark:text-white  p-6 lg:min-h-screen lg:px-36">
      <div className="lg:pt-28 2xl:pt-48 dark:bg-[#202124] dark:text-white bg-white flex flex-wrap  justify-evenly items-center ">
        <div className=" lg:pl-24 w-full lg:w-4/12 ">
          <div className=" font-bold text-2xl lg:text-4xl 2xl:text-7xl text-center lg:text-left  ">
            <h2 className="2xl:text-6xl">Contact Us</h2>
          </div>
          <p className="dark:text-[#B5B5B5] montserrat pt-3 lg:pt-6 px-4 lg:px-0 text-[#141010] text-center lg:text-left 2xl:text-2xl 2xl:pt-10">
            We’re just a call away, you may reach out to us to embark your
            exciting journey here at Dimensionless.
            <br /> <br />
            91+ 7353178646
          </p>
          <div className=" flex justify-center lg:justify-start lg:pt-20 2xl:pt-40 py-6">
            <button className="dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat 2xl:px-20 2xl:py-3 2xl:rounded-2xl 2xl:text-2xl ">
              Call us Now
            </button>
          </div>
        </div>
        <div className="  flex justify-center lg:justify-end w-full lg:w-8/12">
          <div className="w-full px-10 lg:px-0 pt-10 lg:pt-0">
            <img className="w-full" src={art} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Banner;
