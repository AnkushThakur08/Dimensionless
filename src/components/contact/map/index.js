import {BsTwitter} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'

function Map(){
    return(
        <section className='dark:bg-[#202124] dark:text-white  p-4 py-20 2xl:py-40 lg:px-36 flex flex-wrap'>
            <div className=" w-full lg:w-6/12 ">
                <div className='px-8 montserrat 2xl:text-4xl'>
                    <p>dimensionlesstudios@gmail.com</p>
                </div>
                <div className='flex dark:text-[#B5B5B5] text-[#1A73E8] items-center 2xl:text-4xl px-8 pt-3 2xl:py-6'>
                        <div className=' p-2'><BsTwitter/></div>
                        <div className=' p-2'><FaFacebookSquare/></div>
                        <div className=' p-2'><BsInstagram/></div>
                        <div className=' p-2'><BsYoutube/></div>
                        <div className=' p-2'><HiOutlineMail/></div>
                    </div>
                <div  className='px-8 pt-2  2xl:text-4xl montserrat'>
                   <p>+91-1234567890</p>
                </div>   
                <div className='px-8 2xl:text-4xl py-4 2xl:py-8 w-4/6 montserrat'>
                    <p>2nd Cross Road, 1st Main Road AECS Layout - A Block Brookfield, Bengaluru Karnataka - 560037</p>
                </div> 
            </div>
            <div className='w-full lg:w-6/12 flex justify-center items-center'>
                  <div className='w-4/6 text-center  2xl:text-6xl  2xl:h-3/4  h-40 bg-gray-600'>
                       <p > MAP</p>
                  </div>
            </div>
        </section>
    )
}
export default Map