import formimg from "../../../assets/Group 1759.svg";
function Form() {
  return (
    <section className="darkmode bg-white lg:h-screen pb-10 lg:pb-16 2xl:pb-24 p-6 lg:px-40">
      <div className="darkmode bg-white  h-full flex justify-center flex-wrap">
        <div className="flex justify-center pt-14 lg:pt-20 2xl:pt-36 w-8/12">
          <div className="w-full flex justify-center">
            <img className="w-10/12 h-full object-cover" src={formimg} />
          </div>
        </div>
        <div className="  w-full h-full lg:w-4/12 flex  flex-col">
          <h4 className="text-xl text-center lg:text-4xl 2xl:text-5xl font-semibold  py-6">Contact Now</h4>
          <div className="dark:bg-[#202124]   w-full h-70vh py-8 2xl:py-20 rounded-xl lg:rounded-2xl  2xl:rounded-3xl px-8 flex flex-col justify-between">
            <div>
            <div className="pb-4 2xl:pb-8 2xl:pl-8  ">
              <input
                className="dark:bg-[#464646] w-full rounded-lg 2xl:rounded-2xl bg-[#EEEEEE] py-1 px-2 lg:px-8 2xl:py-6  "
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>
            <div className="pb-4  2xl:pb-8 2xl:pl-8 ">
              <input
                className="dark:bg-[#464646] w-full 2xl:rounded-2xl rounded-lg bg-[#EEEEEE] py-1 px-2 lg:px-8 2xl:py-6 "
                placeholder="E-mail Address"
                type="email"
                id="e-mail"
              />
            </div>
            <div className="pb-4  2xl:pb-8 2xl:pl-8">
              <input
                className="dark:bg-[#464646] w-full 2xl:rounded-2xl  rounded-lg bg-[#EEEEEE]  py-1 px-2 lg:px-8 2xl:py-6 "
                placeholder="Contact Number"
                type="text"
                id="number"
              />
            </div>
            <div className="lg:pb-20  2xl:pb-6 2xl:pl-8">
              <input
                className="dark:bg-[#464646] w-full 2xl:rounded-2xl rounded-lg bg-[#EEEEEE] py-8 px-2 lg:px-8 2xl:py-20  "
                placeholder="Message"
                type="textarea"
                id="message"
              />
            </div>
            </div>
            <div className="flex justify-center 2xl:pt-20  pt-4 items-center">
              <button className="dark:bg-[#8AB4F8] dark:text-black bg-[#1A73E8] shadow montserrat text-white rounded-lg px-8 py-1 lg:px-14 2xl:px-20 2xl:py-4 2xl:rounded-2xl 2xl:text-2xl">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Form;
