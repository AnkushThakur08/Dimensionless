import art from '../../../assets/images/logo512.png'
import formimg from '../../../assets/Group 1764/Group 1764.png'
function Form(){
    return(
        <section className='darkmode dark:text-white darkmode bg-[#EEEEEE] p-6 lg:px-40'>
             <div className=' darkmode dark:text-white flex pt-8 justify-center lg:text-2xl 2xl:text-6xl font-semibold bg-[#EEEEEE]'>
                 <h4>
                     Book your Free Consulation call Now
                 </h4>
             </div>
             <div className="darkmode bg-[#EEEEEE] pb-10 2xl:py-40 flex justify-center pt-10 flex-wrap">
                 <div className="flex justify-center items-end w-8/12">
                         <div className='w-full '> 
                         <img className='w-full' src={formimg} />
                         </div>
                 </div>
                 <div className='darkmode pt-8  2xl:pt-0 flex justify-center w-full lg:w-4/12'>
                     <div className='montserrat'>
                       <div className=''>
                           <label className='block 2xl:text-3xl' for="name">Name</label>
                           <div className='pt-2 2xl:pt-4 '>
                               <input className='rounded-lg py-1 2xl:px-16 2xl:py-3  ' type="text" id="name"/>
                            </div>
                       </div>
                       <div className='pt-4 2xl:pt-8'>
                           <label  className='block 2xl:text-3xl'  for="e-mail">E-mail Address</label>
                           <div className='pt-2 2xl:pt-4'>
                           <input  className='rounded-lg py-1  2xl:px-16 2xl:py-3'  type="email" id="e-mail"/>
                           </div>
                       </div>
                       <div className='pt-4 2xl:pt-8 '>
                           <label  className='block 2xl:text-3xl'  for="number">Contact Number</label>
                           <div className='pt-2'>
                           <input  className='rounded-lg py-1 2xl:px-16 2xl:py-3' type="number" id="number"/>
                           </div>
                       </div>
                       <div className='pt-4 2xl:pt-8'>
                           <label  className='block 2xl:text-3xl'  for="date">Date</label>
                           <div className='pt-2'>
                           <input className='rounded-lg px-2 py-1  2xl:px-16 2xl:py-3'  type="date" id="date"/>
                           </div>
                       </div>
                       <div className='pt-4 2xl:pt-8'>
                           <label  className='block 2xl:text-3xl'  for="time">Time</label>
                           <div className='pt-2 2xl:pt-4'>
                           <input  className='rounded-lg px-12 py-1  2xl:px-28 2xl:py-3' type="time"  id="time"/>
                           </div>
                       </div>
                       <div className='flex  pt-10 2xl:pt-20 items-center'>
                           <button className='bg-[#1A73E8] shadow montserrat text-white rounded-lg px-8 py-1 2xl:px-20 2xl:py-3 2xl:text-2xl 2xl:font-bold 2xl:rounded-2xl'>Submit</button>
                      </div> 
                   </div>   
                 </div>
             </div>
        </section>
    )
}
export default Form