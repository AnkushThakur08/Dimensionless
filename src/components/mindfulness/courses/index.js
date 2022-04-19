import learn from '../../../assets/Group 1756.svg'
import collab from '../../../assets/Group 1757.svg'
import earn from '../../../assets/Group 1758.svg'

function Courses(){
    return(
        <section className="dark:bg-[#202124] dark:text-white p-4 l;g:py-20 lg:px-36">
          <div className=' text-center font-semibold 2xl:text-6xl text-3xl py-10 2xl:py-20'>
                <h5>
                    Our Courses
                </h5>
          </div>
             <div className='py-10 2xl:py-20 flex flex-wrap items-center justify-between'>
           <div className=' flex justify-center items-center w-full   lg:w-4/12'>
               <div className=' '>
                   <img src={collab}/>
               </div>
           </div>
           <div className=' w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-right text-2xl  lg:text-3xl 2xl:text-6xl'>
                      <h3>Lorem Ipsum</h3>
                  </div>
                  <p className='dark:text-[#B5B5B5] pt-3 text-center lg:text-right  2xl:pt-6 2xl:text-3xl'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                  </p>
                  <div className=' flex justify-center lg:justify-end  2xl:pt-10 py-6'>
                  <button className='dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat 2xl:px-16 2xl:text-2xl 2xl:rounded-2xl 2xl:py-3'>Book Now</button>
                  </div>
             </div>
         </div> 
         <div className='pb-10 lg:py-10 2xl:py-20 justify-center lg:justify-between items-center flex flex-wrap '>
             <div className=' w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-left text-2xl lg:text-3xl 2xl:text-6xl'>
                      <h3>Lorem ipsum</h3>
                  </div>
                  <p className='dark:text-[#B5B5B5] pt-3 text-center lg:text-left  2xl:pt-6 2xl:text-3xl'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </p>
                  <div className=' flex justify-center lg:justify-start 2xl:pt-10  py-6'>
                  <button className='dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat 2xl:px-16 2xl:text-2xl 2xl:rounded-2xl 2xl:py-3'>Book Now</button>
                  </div>
             </div>
             <div className=' flex justify-center w-80  lg:w-4/12'>
                 <div className=''>
                     <img src={earn}/>
                 </div>
             </div>
         </div>
         <div className='py-10 2xl:py-20 flex flex-wrap items-center justify-between'>
           <div className=' order-2 lg:order-1 flex justify-center items-center w-full   lg:w-4/12'>
               <div className=' '>
                   <img src={collab}/>
               </div>
           </div>
           <div className=' w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-right text-2xl  lg:text-3xl 2xl:text-6xl'>
                      <h3>Lorem Ipsum</h3>
                  </div>
                  <p className='dark:text-[#B5B5B5] pt-3 text-center lg:text-right  2xl:pt-6 2xl:text-3xl'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                  </p>
                  <div className=' flex justify-center lg:justify-end 2xl:pt-10 py-6'>
                  <button className='dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat 2xl:px-16 2xl:text-2xl 2xl:rounded-2xl 2xl:py-3'>Book Now</button>
                  </div>
             </div>
             </div>
        </section>
    )
}
export default Courses