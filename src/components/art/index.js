import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./banner";
import Artwork from "./artwork";
import Review from "./review";
import Form from "./order";
function Art(){
    return(
         <div>
            <Banner/>
            <Artwork/>
            <Review/>
             <Form/>
         </div>
    )
}
export default Art