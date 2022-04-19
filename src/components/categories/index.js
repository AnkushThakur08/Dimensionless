import { Link } from "react-router-dom";
import Banner from "./banner";
import Minimilist from "./minimilistic";
import Body from "./full body";
function Categories(){
    return(
        <div>
           <Banner/>
           <Minimilist/>
           <Body/>
        </div>
    )
}
export default Categories