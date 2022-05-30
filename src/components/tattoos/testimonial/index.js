import review1 from "../../../assets/HomePage/review1.png";
import review2 from "../../../assets/HomePage/review2.png";
import review3 from "../../../assets/HomePage/review3.png";
import reviews from "../../../assets/HomePage/reviews.png";
import rating from "../../../assets/HomePage/rating.png";
import fb from "../../../assets/HomePage/fb.png";
import fbReview from "../../../assets/HomePage/fbReview.png";
import justdail from "../../../assets/HomePage/justdail.png";
import justdailRating from "../../../assets/HomePage/justdailRating.png";

function Testimonial() {
  return (
    <section className="dark:bg-[#202124] dark:text-white p-6 2xl:py-20 lg:px-40 lg:py-16">
      <div className="text-center font-semibold 2xl:py-8 text-3xl 2xl:text-5xl">
        Testimonials
      </div>

      <div className=" w-full flex flex-wrap items-center px-4 py-6">
        <div className="w-full lg:w-2/12 flex justify-center ">
          <img className="" src={reviews} />
        </div>

        <div className="lg:w-2/3 pt-4 text-center ml-40">
          <img src={rating} />
        </div>
      </div>

      <div className="px-10  2xl:py-16 lg:px-0">
        <div className=" w-full flex flex-wrap items-center px-4 py-6">
          {/* <div className='w-full lg:w-2/12 flex justify-center '>
                        <img   className="rounded-full bg-pink-500 w-1/2 " src={people}/> 
                    </div>    */}
          <div className=" lg:w-10/12  pt-4 text-center lg:text-left lg:pr-20">
            <img src={review1} />
          </div>
        </div>
        <div className="flex flex-wrap items-center px-4 py-10 order-1 lg:order-2">
          {/* <div className="w-full order-1 lg:order-2 lg:w-2/12 flex justify-center  ">
            <img className="rounded-full bg-pink-500 w-1/2" src={people} />
          </div> */}
          <div className="lg:w-10/12 pt-4 order-2 lg:order-1 text-center lg:text-right ">
            <img src={review2} />
          </div>
        </div>
        <div className=" flex flex-wrap items-center px-4 py-6">
          {/* <div className="w-full lg:w-2/12 flex justify-center ">
            <img className="rounded-full bg-pink-500 w-1/2" src={people} />
          </div> */}
          <div className=" lg:w-10/12 pt-4 text-center lg:text-left lg:pr-20">
            <img src={review3} />
          </div>
        </div>
      </div>

      <div className="dark:text-[#8AB4F8] text-[#1A73E8] py-3 flex justify-start text-4xl   2xl:text-6xl 2xl:pb-6  ">
        <img className="w-1/12 px-1 mx-2" src={fb} alt="Metting image" />
        <img className="w-3/12 px-1 mx-2" src={fbReview} alt="Metting image" />
        <img className="w-3/12 px-1 mx-2" src={justdail} alt="Metting image" />
        <img
          className="w-3/12 px-1 mx-2"
          src={justdailRating}
          alt="Metting image"
        />
      </div>
    </section>
  );
}
export default Testimonial;
