import question from "../../../assets/Group 1754.svg";
import "./index.css";
import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Faq() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <section className="darkmode p-4 min-h-screen bg-[#EEEEEE] lg:py-14 2xl:py-20 lg:px-40">
      <div className="darkmode bg-[#EEEEEE]  dark:text-white flex justify-center text-2xl lg:text-4xl lg:pb-4 2xl:text-6xl font-semibold">
        <h5>FAQ'S</h5>
      </div>
      <div className="flex darkmode  bg-[#EEEEEE] pb-10 2xl:py-20  flex-wrap items-center">
        <Fragment>
          <Accordion open={open === 1} onClick={() => handleOpen(1)}>
            <AccordionHeader className="dark:text-black flex pl-4 lg:pl-0 lg:text-xl 2xl:text-4xl  montserrat font-semibold px-4">
              What is the Cost of getting a tattoo?
            </AccordionHeader>
            <AccordionBody className="text-sm text-center lg:text-lg lg:pt-4 2xl:text-2xl 2xl:pt-4 lg:text-left pt-2 px-12">
              Cost depends on time taken, design, complexity, placement etc. A
              small tattoo starts from ₹3950. A medium size tattoo can cost
              around ₹5500 - ₹9000.
              <br /> <br /> A tattoo session of 4-6 hours for big tattoos is
              usually ₹12000 - ₹20000. However we design the tattoo in your
              budget too which you can flaunt for life. Consultation if free, we
              understand your requirement and give our best try to design the
              perfect tattoo for you.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 2} onClick={() => handleOpen(2)}>
            <AccordionHeader className="dark:text-black flex pl-4 lg:pl-0 lg:text-xl 2xl:text-4xl  montserrat font-semibold px-4">
              Can you fix my tattoo or do a cover-up?
            </AccordionHeader>
            <AccordionBody className="text-sm text-center lg:text-lg lg:pt-4 2xl:text-2xl 2xl:pt-4 lg:text-left pt-2 px-12">
              We understand that sometime because of old decisions or getting a
              tattoo from less known artist can make you carry a bad tattoo for
              long and can be frustrating to live with it.
              <br /> <br />
              We have more than ten years of experience in coverups and
              rectifying bad tattoos. We have team of artists who can give you
              the best ideas in town. Also we can help in covering up scars
              which you feel can be covered with a beautiful tattoo.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 3} onClick={() => handleOpen(3)}>
            <AccordionHeader className="dark:text-black flex pl-4 lg:pl-0 lg:text-xl 2xl:text-4xl  montserrat font-semibold px-4">
              How painful is getting a tattoo?
            </AccordionHeader>
            <AccordionBody className="text-sm text-center lg:text-lg lg:pt-4 2xl:text-2xl 2xl:pt-4 lg:text-left pt-2 px-12">
              Tattooing is a very individualistic experience where different
              clients experience pain differently. However there are certain
              parts on the body which pains differently like knuckles , bones
              and nerve areas.
              <br /> <br />
              We usually suggest to go natural and experience the tattooing in a
              very cozy calm environment with nice music in the background so
              that you remember the experience for lifetime. In addition we also
              use numbing spray which can reduce the pain for small duration
              tattoos (if client needs) .
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 4} onClick={() => handleOpen(4)}>
            <AccordionHeader className="dark:text-black flex pl-4 lg:pl-0 lg:text-xl 2xl:text-4xl  montserrat font-semibold px-4">
              What is the aftercare for tattoo?
            </AccordionHeader>
            <AccordionBody className="text-sm text-center lg:text-lg lg:pt-4 2xl:text-2xl 2xl:pt-4 lg:text-left pt-2 px-12">
              After tattooing we give you a digital version or the aftercare /
              in printout which you can follow for next 2 weeks.
              <br />
              Usually skin heals in 2-4 weeks depending on person. We guide you
              throughout the process to ensure that you get the best end result.
            </AccordionBody>
          </Accordion>
        </Fragment>
        {/* <div className=" w-full lg:w-6/12  lg:text-left p-4">
          <div className="dark:text-black flex pl-4 lg:pl-0 lg:text-xl 2xl:text-4xl  montserrat font-semibold">
          
            // Code Starts From here

            <p className=" px-4">Q1</p>
            <p className="">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            </p>
          </div>
          <p className="text-sm text-center lg:text-lg lg:pt-4 2xl:text-2xl 2xl:pt-4 lg:text-left pt-2 px-12">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren,
          </p>
        </div> */}

        {/* <div className="w-full lg:w-6/12  p-4">
          <div className="dark:text-black flex pt-4 lg:text-xl lg:pt-0 pl-4 lg:pl-0 2xl:text-4xl montserrat font-semibold ">
            <p className="px-3">Q2</p>
            <p className="">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            </p>
          </div>
          <p className="text-sm  text-center  lg:text-lg lg:pt-4  2xl:text-2xl 2xl:pt-4 lg:text-left pt-2 px-12">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren,
          </p>
        </div> */}
      </div>
      <div className="flex darkmode lg:py-6 bg-[#EEEEEE]  justify-center">
        <div className=" px-20 py-8  lg:px-0 lg:py-0  lg:w-3/12">
          <img src={question} />
        </div>
      </div>
      {/* <div className="darkmode flex pb-10 pt-10 bg-[#EEEEEE] 2xl:py-20  flex-wrap  items-center">
        <div className="w-full lg:w-6/12 p-4">
          <div className="dark:text-black flex pt-4 lg:pt-0 lg:text-xl pl-4 lg:pl-0 2xl:text-4xl montserrat font-semibold ">
            <p className="px-3">Q3</p>
            <p className="">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            </p>
          </div>
          <p className="text-sm text-center  lg:text-lg lg:pt-4  2xl:text-2xl 2xl:pt-4 lg:text-left pt-2  px-12">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren,
          </p>
        </div>
        <div className="w-full lg:w-6/12 p-4">
          <div className="dark:text-black flex pt-4 lg:pt-0 lg:text-xl pl-4 lg:pl-0 2xl:text-4xl montserrat font-semibold ">
            <p className="px-3">Q4</p>
            <p className="">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            </p>
          </div>
          <p className="text-sm text-center  lg:text-lg lg:pt-4  2xl:text-2xl 2xl:pt-4 lg:text-left pt-2  px-12">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren,
          </p>
        </div>
      </div> */}
    </section>
  );
}
export default Faq;
