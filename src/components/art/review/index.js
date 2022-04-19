import people from '../../../assets/images/people.jpg'

function Review(){
    return(
        <section className="dark:bg-[#202124] dark:text-white p-6 lg:py-20 2xl:py-20 lg:px-40 ">
            <div className='text-center font-semibold text-3xl 2xl:text-5xl'>
                Testimonials
            </div>
            <div className='px-10  2xl:py-16 lg:px-0'>
                <div className=' w-full flex flex-wrap items-center px-4 py-6'>
                    <div className='w-full lg:w-2/12 flex justify-center '>
                        <img   className="rounded-full bg-pink-500 w-1/2 " src={people}/> 
                    </div>   
                    <div  className=' lg:w-10/12  pt-4 text-center lg:text-left lg:pr-20'>
                        <p className='text-sm   lg:pr-20 2xl:text-2xl '>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di</p>
                    </div>    
                </div>
                <div className='flex flex-wrap items-center px-4 py-6 order-1 lg:order-2'>
                    <div className='w-full order-1 lg:order-2 lg:w-2/12 flex justify-center  '>
                        <img className="rounded-full bg-pink-500 w-1/2" src={people}/> 
                    </div>   
                    <div   className='lg:w-10/12 pt-4 order-2 lg:order-1 text-center lg:text-right '>
                        <p className='text-sm 2xl:pl-28 2xl:text-2xl '>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di</p>
                    </div>    
                </div>
                <div className=' flex flex-wrap items-center px-4 py-6'>
                    <div className='w-full lg:w-2/12 flex justify-center '>
                        <img className="rounded-full bg-pink-500 w-1/2" src={people}/> 
                    </div>   
                    <div   className=' lg:w-10/12 pt-4 text-center lg:text-left lg:pr-20'>
                        <p className='text-sm 2xl:pr-20 2xl:text-2xl '>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di</p>
                    </div>    
                </div>
            </div>
        </section>
    )
}
export default Review