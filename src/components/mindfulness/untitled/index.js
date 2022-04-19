import learn from '../../../assets/Group 1756.svg'
import collab from '../../../assets/Group 1757.svg'
import earn from '../../../assets/Group 1758.svg'
function Untitled(){
    return(
        <section className='dark:bg-[#202124] dark:text-white p-4 lg:py-20 lg:px-36'>
        <div className=' text-center font-semibold 2xl:text-6xl text-3xl pt-14 lg:pt-0 2xl:pt-0 lg:py-10 2xl:py-20'>
            <h5>
                Lorem Ipsum
            </h5>
        </div>
        <div className='py-10 lg:py-20 justify-center lg:justify-between items-center flex flex-wrap  '>
             <div className=' w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-left text-2xl lg:text-3xl 2xl:text-6xl'>
                      <h3>Lorem ipsum</h3>
                  </div>
                  <p className='dark:text-[#B5B5B5] pt-3 text-center lg:text-left 2xl:pt-6 2xl:text-3xl'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </p>
             </div>
             <div className=' flex justify-center w-80  lg:w-4/12'>
                 <div className=''>
                     <img src={learn}/>
                 </div>
             </div>
        </div>
        <div className='py-10 lg:py-20 flex flex-wrap items-center justify-center lg:justify-between'>
           <div className='order-2 lg:order-1 flex justify-center items-center w-full   lg:w-4/12'>
               <div className=' '>
                   <img src={collab}/>
               </div>
           </div>
           <div className='order-1 lg:order-2  w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-right text-2xl lg:text-3xl 2xl:text-6xl'>
                      <h3>Lorem ipsum</h3>
                  </div>
                  <p className='dark:text-[#B5B5B5] pt-3 text-center lg:text-right  2xl:pt-6 2xl:text-3xl'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                  </p>
             </div>
         </div> 
         <div className=' py-10 lg:py-20 justify-center lg:justify-between pt-10 items-center flex flex-wrap '>
             <div className=' w-full p-4 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-left text-2xl lg:text-3xl 2xl:text-6xl'>
                      <h3>Lorem ipsum</h3>
                  </div>
                  <p className='dark:text-[#B5B5B5] pt-3 text-center lg:text-left  2xl:pt-6 2xl:text-3xl'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </p>
             </div>
             <div className=' flex justify-center w-80  lg:w-4/12'>
                 <div className=''>
                     <img src={earn}/>
                 </div>
             </div>
            </div>
  </section>
    )
}
export default Untitled