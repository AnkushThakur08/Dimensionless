import { Link } from "react-router-dom";
import explore from '../../../assets/explore.svg'
import tattoo from '../../../assets/tattoo/tattoo.png'


function Main(){
    return(
        <section className=" dark:bg-[#202124]  dark:text-white  min-h-screen lg:pl-60 lg:px-36 2xl:pt-28  lg:pt-16 ">
          <div className=' justify-center lg:justify-between flex flex-wrap   '> 
               <div className='  w-full lg:w-4/12 '>
                   <div className='pt-10 lg:pt-20 font-bold text-2xl lg:text-6xl text-center lg:text-left 2xl:text-8xl  '>
                       <h2>Explore</h2>
                   </div>
                   <p className='dark:text-[#B5B5B5] montserrat pt-4 lg:pt-6  text-[#343434] text-center lg:text-left 2xl:text-3xl 2xl:pt-16'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d</p>
               </div>
               <div className=' flex justify-center lg:justify-end  pt-10 lg:pt-0 w-4/6 lg:w-8/12'>
                   <div className='w-full'>
                       <img  className="w-full" src={explore}/>
                   </div>
               </div>
          </div>
          <div className='flex pt-14 lg:pt-20 lg:pb-16  2xl:py-20 min-h-screen flex-wrap justify-between '>
              <div className= 'flex justify-center w-full lg:w-6/12'>
                   <div className=' w-full pt-4   '>
                       <img className="w-full" src={tattoo}/>
                   </div>
              </div>
              <div className=' w-full  lg:w-6/12 lg:pt-36 lg:pl-20  2xl:pt-36'>
                  <div className=' pt-4 text-center lg:text-left text-2xl lg:text-5xl 2xl:text-7xl  montserrat font-semibold '>
                      <h3>Tattoos</h3>
                  </div>
                  <p className='dark:text-[#B5B5B5]  pt-6 px-8 lg:px-0 text-center lg:text-xl lg:text-left 2xl:text-3xl 2xl:pt-10'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore  sed diam nonumy eirmod tempor invidunt ut labore 
                  </p>
                  <Link to="/Tattoos" >   
                  <div className=' flex justify-center lg:justify-start lg:pt-16 2xl:pt-20  py-6'>
                      <button className='dark:bg-[#8AB4F8] dark:text-black  button-shadow rounded-lg 2xl:rounded-2xl  bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat lg:px-14 lg:py-2 lg:rounded-xl 2xl:px-20 2xl:py-3 2xl:text-2xl 2xl:font-bold'>Explore</button>
                  </div>
                  </Link>
              </div>
          </div>
        </section>
    )
}
export default Main