import { Link } from "react-router-dom";
import Banner from "./banner"
import Category from "./category";
import Form from "./form";
import Work from "./work";
import Testimonial from "./testimonial";
import Faq from "./faq";
function Tattoos(){
    return(
        <div>
          <Banner/>
          <Category/>
          <Form/>
          <Work/>
          <Testimonial/>
          <Faq/>
        </div>
    )
}
export default Tattoos