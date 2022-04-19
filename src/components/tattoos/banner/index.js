import art from '../../../assets/images/logo512.png'
import tattoo from '../../../assets/tattoo/tattoo.png'
function Banner(){
    return(
     <section className='dark:text-white dark:bg-[#202124] w-full flex flex-wrap justify-between lg:pt-10 lg:min-h-screen p-6 lg:px-36'>
        <div className="  lg:pl-8 text-center lg:text-left w-full lg:w-6/12">
         <div className='lg:p-6 lg:pt-20'>
           <h2 className='text-2xl lg:text-5xl 2xl:text-8xl font-bold pt-4 tracking-widest' >DIMENSIONLESS TATTOOS</h2>
           <h5 className='pt-2 lg:pt-10 lg:text-lg 2xl:text-4xl 2xl:pt-20 text-[#343434] dark:text-white montserrat'>IMAGINE-DESIGN-TATTOO</h5>
           <div className=' py-10 lg:py-16 2xl:pt-40'>
           <button className='dark:text-black button-shadow rounded-lg 2xl:rounded-2xl 2xl:px-10 2xl:py-4 2xl:text-3xl  dark:bg-[#8AB4F8] bg-[#1A73E8] text-[#FFFFFF] text-sm montserrat py-1 px-8'>Book a Free Consulation</button>
           </div>
         </div>  
        </div>
        <div className="  w-full lg:w-5/12">
            <div className='flex justify-center lg:justify-end'>
                 <div className='  w-4/6 lg:w-full '>
                      <img className='w-full' src={tattoo} alt="art" />
                    </div>
             </div>
        </div>
    </section>
    )
}
export default Banner