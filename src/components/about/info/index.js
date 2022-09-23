import learn from "../../../assets/Group 1756.svg";
import collab from "../../../assets/Group 1757.svg";
import earn from "../../../assets/Group 1758.svg";
function Info() {
  return (
    <section className="dark:bg-[#202124] dark:text-white p-6 lg:px-36">
      <div className=" text-center font-semibold text-3xl  py-10 2xl:py-20 2xl:text-6xl">
        <h5>Upcoming</h5>
      </div>
      <div className=" py-10 2xl:py-20 justify-evenly items-center flex flex-wrap ">
        <div className=" w-full p-4 lg:w-6/12">
          <div className="montserrat  font-semibold text-center lg:text-left text-2xl  lg:text-3xl 2xl:text-7xl">
            <h6 className="text-3xl">
              We’re looking forward to having you here, here are the following
              events.
            </h6>
          </div>
          <p className="dark:text-[#B5B5B5] pt-2 px-10 lg:px-0  text-center lg:text-left 3xl:pt-6 2xl:text-2xl">
            Jam Session and Art Exhibition at Studio - October 1
            <br /> <br />
            DNA Online Meet- 19 and 26 September
            <br />
            Art Sessions Everyday (on appointment basis)
            <br /> <br />
            We’re just a call away, you may reach out to us to embark your
            exciting journey here at Dimensionless. 91+ 7353178646
          </p>
        </div>
        <div className=" flex justify-center w-full  lg:w-4/12">
          <div className=" px-10 lg:px-0">
            <img src={learn} />
          </div>
        </div>
      </div>
      <div className="py-10 2xl:py-20 flex flex-wrap items-center justify-evenly p">
        <div className=" order-2 lg:order-1 flex justify-center items-center w-full   lg:w-4/12">
          <div className="dark:text-[#B5B5B5] px-10 pt-4 lg:pt-0 lg:px-0 ">
            <img src={collab} />
          </div>
        </div>
        <div className=" order-1 w-full p-4 lg:w-6/12">
          <div className="montserrat  font-semibold text-center lg:text-right text-2xl  lg:text-3xl 2xl:text-6xl">
            <h3>Lorem ipsum</h3>
          </div>
          <p className="dark:text-[#B5B5B5] pt-3 px-10 lg:px-0 text-center lg:text-right 2xl:pt-6 2xl:text-3xl">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod
          </p>
        </div>
      </div>
      <div className=" py-10 2xl:py-20 justify-evenly pt-10 items-center flex flex-wrap ">
        <div className=" w-full p-4 lg:w-6/12">
          <div className="montserrat  font-semibold text-center lg:text-left text-2xl  lg:text-3xl 2xl:text-6xl">
            <h3>Lorem ipsum</h3>
          </div>
          <p className="dark:text-[#B5B5B5] pt-3 px-10 lg:px-0 text-center lg:text-left 2xl:pt-6 2xl:text-3xl">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam{" "}
          </p>
        </div>
        <div className=" flex justify-center w-full lg:w-4/12">
          <div className="px-10  lg:px-0 pt-4 lg:pt-0 ">
            <img src={earn} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Info;
