import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import logo from '../../assets/ds-w-500/ds-logo.png';
import darklogo from '../../assets/ds-b-2500/ds-b-logo.png';

function Footer(props) {
  return (
    <footer className="dark:bg-[#8AB4F8] dark:text-white bg-[#4D93EF] p-6 lg:px-36 pt-20">
      <div className="flex flex-wrap justify-center w-full dark:border-[#464646] border-b-2 border-[#EEEEEE] pb-20">
        <div className=" w-full lg:w-9/12">
          <h3 className="dark:text-black text-[#FFFFFF] montserrat lg:text-3xl 2xl:text-4xl ">
            Get Updates
          </h3>
          <p className="w-2/4 dark:text-[#464646] text-[#E3E3E3] text-sm py-6 2xl:text-2xl">
            Get the latest buzz, we can now stay connected.
          </p>
          <div className="flex">
            <input
              className="dark:bg-[#464646] rounded-[15px] py-4 px-8 text-xl 2xl:px-20 montserrat"
              type="email"
              placeholder="Your Email Address"
            />
            <button className="ml-5 bg-[#1A73E8] text-xl montserrat text-[#FFFFFF] rounded-[10px] px-10 py-1 ">
              SIGN UP
            </button>
          </div>
        </div>
        <div className=" pt-8 mb-20 lg:pt-0 w-full lg:w-3/12">
          <h3 className="dark:text-black montserrat text-[#FFFFFF] lg:text-3xl 2xl:text-4xl">
            Join Us Now
          </h3>
          <div className=" dark:text-[#464646] text-[#FFF] flex py-6 lg:text-lg 2xl:text-2xl items-center">
            <div className=" mr-2 p-2 bg-white rounded-lg">
              <BsTwitter color="#1A73E8" />
            </div>

            <div className="  mr-2 p-2 bg-white rounded-lg">
              <a href="https://www.facebook.com/dimensionless.art">
                <FaFacebookSquare color="#1A73E8" />
              </a>
            </div>

            <div className=" mr-2 p-2 bg-white rounded-lg">
              <a href="https://www.instagram.com/dimensionless.art.studio">
                <BsInstagram color="#1A73E8" />
              </a>
            </div>

            <div className="  mr-2 p-2 bg-white rounded-lg">
              <a href="https://www.youtube.com/channel/UCJeIjZBpJbOmCUVqtOq6NjQ">
                <BsYoutube color="#1A73E8" />
              </a>
            </div>
            <div className=" mr-2 p-2 bg-white rounded-lg">
              <HiOutlineMail color="#1A73E8" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-6">
        <div className="flex flex-wrap w-full">
          <div className="w-6/12 lg:w-4/12">
            <h5 className="dark:text-black text-white text-2xl 2xl:text-4xl font-semibold mb-10">
              Categories
            </h5>
            <ul className="dark:text-[#464646] text-[#E3E3E3] 2xl:text-2xl pt-3">
              <li>
                <Link to="/Tattoos">Tattoos </Link>
              </li>
              <Link to="/art">
                <li>Art</li>
              </Link>
              <Link to="/craft">
                <li>Craft</li>
              </Link>
              <Link to="/mindfulness">
                <li>Mindfulness</li>
              </Link>
              <Link to="/books">
                <li>Books & Beyond</li>
              </Link>
              <Link to="/workshop">
                <li>Workshops</li>
              </Link>
              <Link to="/training">
                <li>Trainings</li>
              </Link>
            </ul>
          </div>
          <div className="w-6/12 lg:w-4/12 flex justify-center">
            <div>
              <h5 className="dark:text-black text-white text-2xl 2xl:text-4xl font-semibold mb-10">
                Community
              </h5>
              <ul className="dark:text-[#464646] text-[#E3E3E3] 2xl:text-2xl pt-3">
                <li>
                  <Link to="/community">DNA Community </Link>
                </li>
                <li>Blogs</li>
              </ul>
            </div>
          </div>
          <div className="w-6/12 lg:w-4/12 pt-6 lg:pt-0 flex lg:justify-end">
            <div>
              <h5 className="dark:text-black text-white text-2xl 2xl:text-4xl font-semibold mb-10">
                Company
              </h5>
              <ul className="dark:text-[#464646] text-[#E3E3E3] 2xl:text-2xl pt-3">
                <Link to="/about-us">
                  <li>About Us</li>
                </Link>
                <Link to="/contact-us">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 dark:border-[#464646] border-[#EEEEEE]  py-6">
        {' '}
        <div className=" flex flex-wrap justify-center item-center">
          <img
            className="w-10 lg:w-60 "
            src={props.toggleDark ? darklogo : logo}
            alt="logo"
          />
        </div>{' '}
        <h2 className="dark:text-black flex flex-wrap justify-center text-2xl montserrat text-center text-[#FFFFFF] tracking-widest py-4 lg:py-6 2xl:text-4xl">
          DIMENSIONLESS
        </h2>
      </div>
      <div className="dark:text-[#464646] text-[#E3E3E3] py-6 text-sm 2xl:text-lg flex justify-evenly lg:justify-between">
        <div>Site Map</div>
        <div className="">Terms & Conditions</div>
        <div> Privacy Policy</div>
      </div>
    </footer>
  );
}
export default Footer;
