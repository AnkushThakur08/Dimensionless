import art from '../../../assets/Tattoo-01/Tattoo-01.png'
function Banner(){
    return(
        <section className="  p-6 lg:px-40">
        <div className='bg-white flex flex-wrap  justify-evenly items-center '> 
             <div className=' w-full lg:w-4/12 '>
                 <div className=' tracking-widest font-bold text-2xl lg:text-4xl text-center lg:text-left  '>
                     <h2>Explore Tattoo Categories</h2>
                 </div>
                 <p className='montserrat pt-4 lg:pt-14 px-4 lg:px-0  text-[#141010] text-center lg:text-left'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d</p>         
             </div>
             <div className='  flex justify-center lg:justify-end w-full lg:w-6/12'>
                 <div className='px-10 lg:px-0 pt-10 lg:pt-0'>
                     <img style={{width:140}}  src={art}/>
                 </div>
             </div>
        </div>
      </section>
    )
}
export default Banner