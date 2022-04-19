import { Link } from "react-router-dom";
import Banner from "./banner";
import Craftwork from "./craftwork";
import Review from "../art/review";
import Form from "./order";
function Craft(){
    return(
        <div>
           <Banner/>
           <Craftwork/>
           <Review/>
           <Form/>
        </div>

    )
}
export default Craft