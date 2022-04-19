import { Link } from "react-router-dom";
import Banner from "./banner";
import Info from "./info";
import Team from "./team";
function About(){
    return(
    <div>
        <Banner/>
        <Info/>
        <Team/>
    </div>
    )
}
export default About