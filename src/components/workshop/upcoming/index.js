import learn from "../../../assets/Group 1756.svg";
import collab from "../../../assets/Group 1757.svg";
import earn from "../../../assets/Group 1758.svg";
function Upcoming() {
  return (
    <section className="dark:bg-[#202124] dark:text-white  p-6  lg:px-36">
      <div className="dark:bg-[#202124] dark:text-white  text-center font-semibold text-3xl  py-10 2xl:py-20 2xl:text-6xl">
        <h5>Upcoming</h5>
      </div>
      <div className=" py-10 2xl:py-20 justify-evenly items-center flex flex-wrap ">
        <div className=" w-full p-4 lg:w-6/12">
          <div className="montserrat  font-semibold text-center lg:text-left text-2xl  lg:text-3xl 2xl:text-2xl">
            <h3>Mandala Art workshop</h3>
          </div>
          <p className="dark:text-[#B5B5B5] pt-2 px-10 lg:px-0  text-center lg:text-left 2xl:pt-6 2xl:text-2xl">
            Learn the ancient technique of mandala art and explore various
            benefits of this art form. Join in our three hour workshop to create
            a healing mandala.
          </p>
          <div className=" flex justify-center lg:justify-start 2xl:pt-10 py-6">
            <button className="dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat 2xl:px-16 2xl:text-2xl 2xl:rounded-2xl 2xl:py-3">
              Book Now
            </button>
          </div>
        </div>
        <div className=" flex justify-center w-full  lg:w-4/12">
          <div className=" px-10 lg:px-0">
            <img src={learn} />
          </div>
        </div>
      </div>
      <div className="py-10 2xl:py-20 flex flex-wrap items-center justify-evenly p">
        <div className=" order-2 lg:order-1 flex justify-center items-center w-full   lg:w-4/12">
          <div className="px-10 pt-4 lg:pt-0 lg:px-0 ">
            <img src={collab} />
          </div>
        </div>
        <div className=" order-1 w-full p-4 lg:w-6/12">
          <div className="montserrat  font-semibold text-center lg:text-right text-2xl  lg:text-3xl 2xl:text-2xl">
            <h3>Tattoo Training Crash Course</h3>
          </div>
          <p className=" dark:text-[#B5B5B5] pt-3  text-center lg:text-right 2xl:pt-6 2xl:text-2xl">
            Learn how to tattoo in this crash course which includes a live demo.
            Join us for our three hour workshop to know and learn how to do
            tattoos.
          </p>
          <div className=" flex justify-center lg:justify-end 2xl:pt-10 py-6">
            <button className="dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat 2xl:px-16 2xl:text-2xl 2xl:rounded-2xl 2xl:py-3">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className=" py-10 2xl:py-20 justify-evenly pt-10 items-center flex flex-wrap ">
        <div className=" w-full p-4 lg:w-6/12">
          <div className="montserrat  font-semibold text-center lg:text-left text-2xl  lg:text-3xl 2xl:text-2xl">
            <h3>Pencils 101</h3>
          </div>
          <p className="dark:text-[#B5B5B5] pt-3 px-10 lg:px-0 text-center lg:text-left 2xl:pt-6 2xl:text-2xl">
            A 2₹ pencil can make million $ masterpiece. Learn the basics of
            pencils and how to use them in this three hour workshop.
          </p>
          <div className=" flex justify-center lg:justify-start 2xl:pt-10 py-6">
            <button className="dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat 2xl:px-16 2xl:text-2xl 2xl:rounded-2xl 2xl:py-3">
              Book Now
            </button>
          </div>
        </div>
        <div className=" flex justify-center w-full lg:w-4/12">
          <div className="px-10  lg:px-0 pt-4 lg:pt-0 ">
            <img src={earn} />
          </div>
        </div>
      </div>
      <div className="py-10 2xl:py-20 flex flex-wrap items-center justify-evenly p">
        <div className="order-2 lg:order-1 flex justify-center items-center w-full   lg:w-4/12">
          <div className=" px-10 lg:px-0 pt-4 lg:pt-0">
            <img src={collab} />
          </div>
        </div>
        <div className=" order-1 w-full p-4 lg:w-6/12">
          <div className="montserrat  font-semibold text-center lg:text-right text-2xl  lg:text-3xl 2xl:text-2xl">
            <h3>Acrylic 101</h3>
          </div>
          <p className="dark:text-[#B5B5B5] pt-3 px-10 lg:px-0 text-center lg:text-right 2xl:pt-6 2xl:text-2xl">
            Whether you paint on a canvas or on a shirt the end result is always
            a very vibrant art. Learn the best techniques of Acrylic paintings
            in this three hour workshop.
          </p>
          <div className=" flex justify-center lg:justify-end 2xl:pt-10 py-6">
            <button className="dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat 2xl:px-16 2xl:text-2xl 2xl:rounded-2xl 2xl:py-3">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className=" py-10 2xl:py-20 justify-evenly  items-center flex flex-wrap ">
        <div className=" w-full p-4 lg:w-6/12">
          <div className="montserrat  font-semibold text-center lg:text-left text-2xl  lg:text-3xl 2xl:text-2xl">
            <h3>Oil Paintings 101</h3>
          </div>
          <p className="dark:text-[#B5B5B5] pt-3 px-10 lg:px-0 text-center lg:text-left 2xl:pt-6 2xl:text-2xl">
            The earliest known surviving oil paintings are Buddhist murals
            created circa 650AD in Bamiyan, Afghanistan. It took several hours &
            a couple of weeks to fully dry. Learn the amazing blends and strokes
            of oil in this three hour workshop.
          </p>
          <div className=" flex justify-center lg:justify-start 2xl:pt-10 py-6">
            <button className="dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat 2xl:px-16 2xl:text-2xl 2xl:rounded-2xl 2xl:py-3">
              Book Now
            </button>
          </div>
        </div>
        <div className=" flex justify-center w-80  lg:w-4/12">
          <div className="px-10 lg:px-0 pt-4 lg:pt-0">
            <img src={earn} />
          </div>
        </div>
      </div>
      <div className="py-10 2xl:py-20 flex flex-wrap items-center justify-between">
        <div className=" order-2 lg:order-1 flex justify-center items-center w-full   lg:w-4/12">
          <div className=" px-10 lg:px-0 pt-4 lg:pt-0">
            <img src={collab} />
          </div>
        </div>
        <div className="order-1 w-full p-4 lg:w-6/12">
          <div className="montserrat  font-semibold text-center lg:text-right text-2xl  lg:text-3xl 2xl:text-2xl">
            <h3>Sketching 101</h3>
          </div>
          <p className="dark:text-[#B5B5B5] pt-3 text-center lg:text-right  2xl:pt-6 2xl:text-2xl">
            The patterns drawn on rocks in South African cave is 73,000 years
            old. Sometime in the Stone Age, human artists began experimenting
            with a new form of visual art: drawing. Learn in this three hour
            workshop how to sketch basic ideas, figures and doodles.
          </p>
          <div className=" flex justify-center lg:justify-end 2xl:pt-10 py-6">
            <button className="dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat 2xl:px-16 2xl:text-2xl 2xl:rounded-2xl 2xl:py-3">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Upcoming;
