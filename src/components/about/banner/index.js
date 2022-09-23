import about from "../../../assets/Group 1755.svg";
function Banner() {
  return (
    <section className="dark:bg-[#202124] dark:text-white p-6 min-h-80 2xl:pt-28 lg:px-36">
      <div className=" dark:bg-[#202124] dark:text-white bg-white pt-10 pb-10 flex flex-wrap items-center ">
        <div className="lg:pl-14 w-full  lg:w-5/12 ">
          <div className=" font-bold text-2xl lg:text-4xl 2xl:text-7xl text-center lg:text-left lg:pl-10  ">
            <h2>About Us</h2>
          </div>
          <p className="dark:text-[#B5B5B5] montserrat px-4 lg:px-0 lg:pl-9 pt-4 lg:pt-6 2xl:pt-10 text-[#141010] text-center lg:text-xl 2xl:text-1xl lg:text-left">
            Dimensionless is a creative platform that holds a collection of
            creative services like Arts & Crafts, Tattoos, Teaching, Events,
            etc.
            <br /> <br />
            We are a studio located in AECS Layout, Kundanahalli Gate,
            Bangalore. This is where we currently operate. We’re actively open
            to constructive collaborations with creative artists from around the
            world, under the DNA network.
            <br /> <br />
            Do visit us & book an appointment, happy to get in touch.
          </p>
          <div className="flex justify-center lg:justify-start py-12 lg:pt-14 2xl:pt-36 lg:px-9">
            <button className="dark:bg-[#8AB4F8] dark:text-black  button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat lg:px-14 lg:py-2 lg:rounded-xl 2xl:px-24 2xl:py-3 2xl:text-2xl 2xl:rounded-2xl">
              Call Us Now
            </button>
          </div>
        </div>
        <div className=" pt-10 lg:pt-0 flex justify-center lg:justify-end px-10 lg:px-0 lg:w-7/12">
          <div className="w-full">
            <img className="w-full" src={about} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Banner;
