import React, { useContext, useRef } from 'react'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'
import { useLocation, Link } from 'react-router-dom'

const Navbar = () => {
  const navGreenRef = useRef(null)
  const [navOpen, setNavOpen, isAnimating] = useContext(NavbarContext)
  const [navColor, setNavColor] = useContext(NavbarColorContext)
  const locate = useLocation().pathname

  if (navOpen || isAnimating) return null;

  // Function to scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  // Handle link click - navigate and scroll to top
  const handleLinkClick = () => {
    scrollToTop();
  };

  return (
    <div
      className={`z-40 flex ${
        locate === '/projects' || locate === '/agency' ? 'sticky' : 'fixed'
      } top-0 w-full items-start justify-between`}
    >
      <div className="lg:p-5 p-2">
        <Link to="/" onClick={handleLinkClick}>
          <div className="lg:w-36 w-24">
            <svg
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 103 44"
            >
              <path
                fill={locate === '/' ? 'white' : 'black'}
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
        </Link>
      </div>

      <div
        onClick={() => setNavOpen(true)}
        onMouseEnter={() => (navGreenRef.current.style.height = '100%')}
        onMouseLeave={() => (navGreenRef.current.style.height = '0%')}
        className="lg:h-12.5 h-10 bg-black relative w-[45vw] md:w-[15vw] 2xl:w-[15vw]"
      >
        <div
          ref={navGreenRef}
          className="bg-[#D3FD50] transition-all absolute top-0 h-0 w-full"
        ></div>
        <div className="relative h-full md:px-8 px-2 flex flex-col justify-center items-end lg:gap-1 gap-0.5 group">
          <div className="md:w-12 md:h-[1.6px] w-6 h-0.5 bg-white group-hover:bg-black"></div>
          <div className="md:w-6 md:h-[1.6px] w-3 h-0.5 bg-white group-hover:bg-black"></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
