import { Link } from "react-router-dom";
import art from '../../../assets/images/logo512.png'
import book from '../../../assets/books1.svg'
function Books(){
    return(
        <section className='dark:bg-[#202124] dark:text-white min-h-screen p-6  2xl:pb-24  lg:px-36'>
        <div className=' flex flex-wrap lg:justify-evenly  2xl:pt-32 '>
             <div className='w-full p-4 lg:pt-28 lg:w-6/12'>
                  <div className='montserrat  font-semibold text-center lg:text-left text-2xl lg:text-4xl  2xl:text-7xl'>
                      <h3>Books & Beyond</h3>
                  </div>
                  <p className='dark:text-[#B5B5B5] pt-2  lg:pt-4 lg:text-xl 2xl:pt-8 2xl:text-3xl px-6 lg:px-0 text-center lg:text-left'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt sed diam nonumy eirmod tempor invidunt 
                  </p>
                  <div className='py-10 lg:pt-20 text-center lg:text-left'>
                    <Link to="/books">
                     <button className='dark:bg-[#8AB4F8] dark:text-black button-shadow rounded-lg  lg:px-14 lg:py-2 lg:rounded-xl 2xl:rounded-2xl 2xl:px-20 bg-[#1A73E8] text-[#FFFFFF] px-10 py-1 text-sm montserrat  2xl:py-3 2xl:text-2xl 2xl:font-bold'>Explore</button>
                     </Link>
                  </div>
             </div>
             <div className=' flex justify-center  lg:pt-14  lg:w-6/12'>
                 <div className='w-full px-20 lg:px-0 '>
                     <img className="w-full" src={book}/>
                 </div>
             </div>
        </div>
        </section>
    )
}
export default Books