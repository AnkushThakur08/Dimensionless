import art from '../../../assets/Mindfulness-01.svg'
function Banner(){
    return(
        <section className="dark:bg-[#202124] dark:text-white  min-h-60 pt-14 lg:px-36">
        <div className='dark:bg-[#202124] bg-white flex flex-wrap justify-center lg:justify-between items-center 2xl:pt-16'> 
             <div className=' w-full lg:w-6/12 lg:pl-20 '>
                 <div className=' font-bold  text-2xl lg:text-5xl 2xl:text-7xl text-center lg:text-left  '>
                     <h2>Mindfulness</h2>
                 </div>
                 <p className='dark:text-[#B5B5B5] montserrat pt-6 px-8 lg:px-0   text-[#141010] text-sm lg:text-lg text-center lg:text-left 2xl:text-3xl'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d</p>
                 <div className=' flex justify-center lg:justify-start lg:pt-20 py-6'>
                    <button className='dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-xl bg-[#1A73E8] text-[#FFFFFF] px-4 lg:px-10 py-1 lg:py-2 2xl:px-16 2xl:text-2xl 2xl:rounded-2xl text-sm montserrat'>Book a Session Today</button>
                </div>             
             </div>
             <div className='  flex justify-center pt-14 lg:pt-0 2xl:pt-0 lg:justify-end w-4/6 lg:w-5/12'>
                 <div className='w-full'>
                     <img  className='w-full ' src={art}/>
                 </div>
             </div>
        </div>
      </section>
    )
}
export default Banner