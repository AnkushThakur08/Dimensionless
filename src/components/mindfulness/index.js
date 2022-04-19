import { ImOffice } from "react-icons/im";
import { Link } from "react-router-dom";
import Banner from "./banner";
import Untitled from "./untitled";
import Courses from "./courses";
function Mindfulness(){
    return(
        <div>
           <Banner/>
           <Untitled/>
           <Courses/>
        </div>
    )
}
export default Mindfulness