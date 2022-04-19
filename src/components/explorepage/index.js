import Main from "./main";
import Craft from "./craft";
import Community from "./community";
import Workshop from "./workshop";
import Books from "./books";
import Mindfulness from "./mindfulness";
 function Explore(){
     return(
         <div className="dark:bg-black dark:text-white">
        <Main/>
        <Craft/>
        <Community/>
        <Workshop/>
        <Books/>
        <Mindfulness/>
        </div>
     )
 }
 export default Explore