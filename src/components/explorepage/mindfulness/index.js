import mind from '../../../assets/mindfulness.svg'
function Mindfulness(){
    return(
        <section className="darkmode dark:text-white min-h-screen  bg-[#EEEEEE] p-6 lg:py-20  lg:px-36">
          <div className='darkmode bg-[#EEEEEE]'>
              <div className=' px-16 pt-10  py-6'>
                  <img  src={mind}   alt="mindfulness"/>
              </div>
          </div>
          <div className=" 2xl:pt-20 lg:pt-10 flex flex-wrap">
              <div className="w-full pb-10 darkmode bg-[#EEEEEE] lg:w-8/12 lg:px-16 py-6">
                  <div className="dark:text-white  text-2xl lg:text-5xl 2xl:text-7xl text-center font-semibold montserrat lg:text-left">
                      <h3>Mindfulness</h3>
                  </div>
                  <p className=" pt-2 lg:pt-4 lg:text-xl  2xl:pt-8 2xl:text-3xl px-6 lg:px-0 text-center lg:text-left">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor inviduntsed diam nonumy eirmod tempor inviduntsed diam nonumy eirmod tempor invidunt
                  </p>
              </div>
              <div className="darkmode bg-[#EEEEEE] pt-6  flex justify-center items-end w-full lg:w-4/12">
                  <div className=" pb-10 ">
                      <button className='dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg 2xl:rounded-2xl bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat lg:px-14 lg:py-2 lg:rounded-xl 2xl:px-16 2xl:text-2xl 2xl:py-3 2xl:font-bold '>Explore</button>
                  </div>
              </div>
          </div> 
        </section>
    )
}
export default Mindfulness