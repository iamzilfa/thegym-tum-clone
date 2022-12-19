import Image from "next/image";
import Menu from "../../public/assets/vectors/menu.svg";
import Logo from "../../public/assets/vectors/tum-logo.svg";
import Search from "../../public/assets/vectors/search.svg";
import Bars from "../../public/assets/vectors/bars.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-Sapphire w-full fixed z-10">
        <div className="px-6 container mx-auto text-white">
          <div className="flex py-4 items-center justify-between xl:justify-start">
            <div className="flex items-center mr-[4.75rem]">
              <div className="mr-4">
                <Image src={Menu} alt="Menu" className="menu" />
              </div>
              <div className="flex items-center gap-3">
                <Image src={Logo} alt="logo" />
                <ul className="flex flex-col font-normal leading-[0.875rem] tracking-[0.0125rem] text-xs text-white">
                  <li>Technical</li>
                  <li>Universtity</li>
                  <li>of Munich</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <ul className="items-center mr-[3.375rem] gap-x-6 hidden xl:flex">
                <li className="nav-li">NEWS AND EVENTS</li>
                <li className="nav-li">STUDIES</li>
                <li className="nav-li">LIFELONG LEARNING</li>
                <li className="nav-li">REASEARCH</li>
                <li className="nav-li">INNOVATION</li>
                <li className="nav-li">COMMUNITY</li>
                <li className="nav-li">ABOUT TUM</li>
              </ul>
              <div className="flex mr-[1.25rem]">
                <span className="text-gray-500 font-medium hover:text-white">
                  DE
                </span>
                <span className="border border-l-2 mx-2"></span>
                <span>EN</span>
              </div>
              <div>
                <Image src={Search} alt="search" />
              </div>
              <div className="block xl:hidden">
                <Image src={Bars} alt="bars" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
