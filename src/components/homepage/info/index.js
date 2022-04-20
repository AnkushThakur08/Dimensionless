function Info() {
  return (
    <section className="darkmode 2xl:pt-20  bg-[#EEEEEE] w-full flex flex-wrap  lg:mt-10  lg:px-40">
      <div className=" text-center  lg:text-left px-10 flex flex-wrap">
        <div className=" w-full lg:p-4  lg:w-3/12">
          <h3 className="text-2xl 2xl:text-4xl font-semibold p-1">ART </h3>
          <p className="text-sm px-2 2xl:text-2xl 2xl:pt-6 pt-2 lg:pt-4 montserrat dark:border-[#B5B5B5] lg:border-r-2 lg:border-slate-500">
            Discover, Buy and Sell Art from our wide range of artists
          </p>
        </div>
        <div className="w-full pt-6 lg:p-4  lg:w-3/12">
          <h3 className="text-2xl 2xl:text-4xl font-semibold p-1">TATTOOS</h3>
          <p className="text-sm px-2 2xl:text-2xl 2xl:pt-6 pt-2 lg:pt-4 montserrat  lg:border-r-2 dark:border-[#B5B5B5] lg:border-slate-500">
            Get tattooed at our studio in Bangalore and Shimla
          </p>
        </div>
        <div className="w-full pt-6 lg:p-4  lg:w-3/12">
          <h3 className="text-2xl 2xl:text-4xl  font-semibold p-1">DNA</h3>
          <p className="text-sm px-2   2xl:text-2xl 2xl:pt-6 pt-2 lg:pt-4 montserrat  ">
            Join our Dimensionless community and network with creative people
          </p>
        </div>
      </div>
      <div className=" w-full pt-10 pb-8 flex justify-center lg:justify-end">
        <button className="bg-white button-shadow text-[#1A73E8] py-1 px-8 rounded-2xl montserrat   border-2 border-[#1A73E8] dark:border-[#8AB4F8] dark:bg-[#202124] dark:text-[#8AB4F8] 2xl:text-2xl 2xl:px-20 2xl:py-3 ">
          Contact Us
        </button>
      </div>
    </section>
  );
}
export default Info;
