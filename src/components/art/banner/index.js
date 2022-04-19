import art from '../../../assets/art-03.svg'
function Banner(){
    return(
        <section className='dark:bg-[#202124]  p-6 min-h-60vh lg:px-36'>
        <div className='dark:bg-[#202124] lg:pt-20 2xl:pt-40 bg-white flex flex-wrap justify-between  '> 
           <div className=' w-full lg:w-5/12 lg:pl-16 2xl:pt-20 '>
               <div className='dark:text-white font-bold text-2xl text-center lg:text-left lg:text-5xl 2xl:text-7xl '>
                   <h2>Art</h2>
               </div>
               <p className='dark:text-[#B5B5B5] montserrat px-4 lg:px-0 lg:pt-4 pt-2 2xl:pt-6 text-[#160c0c] text-center lg:text-left 2xl:text-3xl'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d</p>
              <div className='py-12 lg:pt-14 text-center lg:text-left 2xl:pt-28  '>
              <button className='dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat  lg:px-14 lg:py-2 lg:rounded-xl 2xl:px-20 2xl:py-3 2xl:text-2xl'>Book an Order Now</button>    
              </div>           
           </div>
           <div className='  flex justify-center  lg:justify-end w-full lg:w-7/12'>
               <div className='w-full px-8 lg:px-0 '>
                   <img className='w-full' src={art}/>
               </div>
           </div>
      </div>
    </section>
    )
}
export default Banner