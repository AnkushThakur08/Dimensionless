import { Link } from "react-router-dom";
import work from '../../../assets/workshops/workshops.png'
import training from '../../../assets/Training-illustrations.svg'
function Workshop(){
    return(
        <section className='darkmode bg-[#EEEEEE] p-6 lg:px-40'>
        <div className= 'darkmode bg-[#EEEEEE] flex justify-evenly flex-wrap '>
             <div className=' pt-10 lg:py-20 pb-14 w-full p-4 lg:w-6/12'>
                  <div className='dark:text-white montserrat   font-semibold text-center lg:text-left text-2xl lg:text-5xl 2xl:text-left 2xl:text-7xl'>
                      <h3>Workshops</h3>
                  </div>
                  <p className='pt-2 lg:pt-4  2xl:pt-8 text-center lg:text-left lg:text-xl  2xl:text-4xl'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                  </p>
                  <div className='py-6 lg:pt-10 2xl:pt-12  text-center lg:text-left'>
                    <Link to="/workshop">
                     <button className='dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg  lg:px-14 lg:py-2 lg:rounded-xl 2xl:rounded-2xl bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat 2xl:px-20 2xl:py-3 2xl:text-2xl 2xl:font-bold'>Explore</button>
                     </Link>
                  </div>
             </div>
             <div className='darkmode flex items-center justify-center 2xl:justify-end  w-full  lg:w-6/12'>
                 <div className='w-full p-8 lg:p-4'>
                     <img  className="w-full" src={work}/>
                 </div>
             </div>
        </div>
        <div className='darkmode bg-[#EEEEEE] pt-8 lg:py-10 2xl:pt-40 flex justify-between flex-wrap '>
           <div className=' flex items-center order-2 lg:order-1 justify-center w-full  lg:w-6/12'>
               <div className='w-full p-8 lg:p-6'>
                   <img className="w-full" src={training}/>
               </div>
           </div>
           <div className=' lg:pl-16 darkmode w-full order-1  2xl:pl-16 p-6 lg:w-6/12'>
                  <div className='dark:text-white montserrat  font-semibold text-center lg:text-left text-2xl lg:text-5xl 2xl:text-7xl'>
                      <h3>Trainings</h3>
                  </div>
                  <p className='pt-2 lg:pt-4  2xl:pt-10 text-center lg:text-left lg:text-xl  2xl:text-4xl'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
                  </p>
                  <div className='py-8 lg:pt-10 2xl:pt-12 text-center lg:text-left'>
                    <Link to="/training" >
                     <button className='dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg  lg:px-14 lg:py-2 lg:rounded-xl 2xl:rounded-2xl bg-[#1A73E8] text-[#FFFFFF] px-10  py-1 text-sm montserrat  2xl:px-20 2xl:py-3 2xl:text-2xl 2xl:font-bold'>Explore</button>
                     </Link>
                  </div>
             </div>
         </div>   
  </section>
    )
}
export default Workshop