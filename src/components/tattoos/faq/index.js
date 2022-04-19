import question from '../../../assets/Group 1754.svg'
function Faq(){
    return(
         <section className="darkmode p-4 min-h-screen bg-[#EEEEEE] lg:py-14 2xl:py-20 lg:px-40">
             <div className="darkmode bg-[#EEEEEE]  dark:text-white flex justify-center text-2xl lg:text-4xl lg:pb-4 2xl:text-6xl font-semibold">
                 <h5>FAQ'S</h5>
             </div>
           <div className="flex darkmode  bg-[#EEEEEE] pb-10 2xl:py-20  flex-wrap items-center">
                <div className=" w-full lg:w-6/12  lg:text-left p-4">
                    <div className="dark:text-black flex pl-4 lg:pl-0 lg:text-xl 2xl:text-4xl  montserrat font-semibold ">
                       <p  className=" px-4">Q1</p>
                       <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p> 
                    </div>
                    <p className="text-sm text-center lg:text-lg lg:pt-4 2xl:text-2xl 2xl:pt-4 lg:text-left pt-2 px-12">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    </p>     
                </div>
                <div className="w-full lg:w-6/12  p-4">
                    <div className="dark:text-black flex pt-4 lg:text-xl lg:pt-0 pl-4 lg:pl-0 2xl:text-4xl montserrat font-semibold ">
                       <p  className="px-3">Q2</p>
                       <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p> 
                    </div>
                    <p className="text-sm  text-center  lg:text-lg lg:pt-4  2xl:text-2xl 2xl:pt-4 lg:text-left pt-2 px-12">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    </p>     
                </div>
           </div>
           <div className='flex darkmode lg:py-6 bg-[#EEEEEE]  justify-center'>
               <div className=' px-20 py-8  lg:px-0 lg:py-0  lg:w-3/12'>
                   <img src={question}/>
               </div>
           </div>
           <div className="darkmode flex pb-10 pt-10 bg-[#EEEEEE] 2xl:py-20  flex-wrap  items-center">
                <div className="w-full lg:w-6/12 p-4">
                    <div className="dark:text-black flex pt-4 lg:pt-0 lg:text-xl pl-4 lg:pl-0 2xl:text-4xl montserrat font-semibold ">
                       <p  className="px-3">Q3</p>
                       <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p> 
                    </div>
                    <p className="text-sm text-center  lg:text-lg lg:pt-4  2xl:text-2xl 2xl:pt-4 lg:text-left pt-2  px-12">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    </p>     
                </div>
                <div className="w-full lg:w-6/12 p-4">
                    <div className="dark:text-black flex pt-4 lg:pt-0 lg:text-xl pl-4 lg:pl-0 2xl:text-4xl montserrat font-semibold ">
                       <p  className="px-3">Q4</p>
                       <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p> 
                    </div>
                    <p className="text-sm text-center  lg:text-lg lg:pt-4  2xl:text-2xl 2xl:pt-4 lg:text-left pt-2  px-12">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    </p>     
                </div>
           </div>
         </section>
    )
}
export default Faq