import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useEffect, useRef, useState } from "react";
import { NavbarContext } from "../../context/NavContext";
import Time from "../home/Time";
import { Link } from "react-router-dom";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);

  const [navOpen, setNavOpen, isAnimating, setIsAnimating] =
    useContext(NavbarContext);

  function gsapAnimation() {
    setIsAnimating(true);
    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false), // ✅ animation done
    });
    gsap.set(".navfooter", { opacity: 0 });
    gsap.set(".fullscreennav", { display: "block" }); // use set instead of to
    tl.to(".stairing", {
      delay: 0.2,
      height: "100%",
      stagger: { amount: -0.3 },
    });
    tl.to(".navlink", { opacity: 1, duration: 0.4, ease: "power2.out" });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: { amount: 0.3 },
    });
    tl.to(
      ".navfooter",
      { opacity: 1, duration: 0.4, ease: "power2.out" },
      "-=0.2"
    );
  }

  function gsapAnimationReverse() {
    setIsAnimating(true); // ✅ block Navbar re-render
    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false), // ✅ allow Navbar back after done
    });
    tl.to(".navfooter", { opacity: 0, duration: 0.3, ease: "power2.in" }, "<");
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: { amount: 0.1 },
    });
    tl.to(".navlink", { opacity: 0, duration: 0.3, ease: "power2.in" });
    tl.to(".stairing", {
      height: 0,
      stagger: { amount: 0.1 },
    });
    tl.set(".fullscreennav", { display: "none" }); // use set instead of to
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav hidden text-white overflow-hidden h-screen w-full z-[100] sticky top-0 left-0"
    >
      <div className="h-screen w-full absolute top-0 left-0">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-2/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className="relative z-[110]">
        <div className="navlink flex w-full justify-between lg:p-1 p-2 items-start">
          <div className="p-1.5 flex gap-10">
            <div className="lg:w-30 w-24">
              <Link to="/" onClick={() => setNavOpen(false)}>
                <svg
                  className=" w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 103 44"
                >
                  <path
                    fill="white"
                    fillRule="evenodd"
                    d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                  ></path>
                </svg>
              </Link>
            </div>
            <div>
              <div className="font-[font2] text-sm lg:text-[1vw] uppercase">
                {" "}
                en &nbsp;<span className="text-[#c0c0c0b1]">/ &nbsp;fr</span>
              </div>
            </div>
          </div>
          <div
            onClick={() => setNavOpen(false)}
            className="relative cursor-pointer group flex items-center justify-center lg:w-32 lg:h-32 w-20 h-20"
          >
            <div className="absolute flex items-center justify-center w-full h-full">
              <div className="h-10 lg:h-38 w-0.5 bg-white rotate-45 absolute group-hover:bg-[#D3FD50] transition-all duration-300"></div>
              <div className="h-10 lg:h-38 w-0.5 bg-white -rotate-45 absolute group-hover:bg-[#D3FD50] transition-all duration-300"></div>
            </div>
          </div>
        </div>
        <div className=" pt-[8vh]">
          <div className="link overflow-hidden p-1 origin-top relative border-t-1 border-white">
            <Link to="/projects" onClick={() => setNavOpen(false)}>
              <h1 className="font-[font2] text-5vw lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-4 pt-1 uppercase">
                work
              </h1>
              <div className="moveLink left-0 w-full h-full absolute text-black flex top-0 bg-[#D3FD50]">
                <div className="moveX gap-5 h-full flex items-center">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5vw  text-center lg:leading-[0.8] lg:pt-4 pt-1 uppercase">
                    See Everything
                  </h2>
                  <img
                    className="h-full w-[20vw] p-2 shrink-0 rounded-full object-cover"
                    src="/Media/NavBar/b1-1.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5vw  text-center lg:leading-[0.8] lg:pt-4 pt-1 uppercase">
                    See Everything
                  </h2>
                  <img
                    className="h-full w-[20vw] p-2 shrink-0 rounded-full object-cover"
                    src="/Media/NavBar/b1-2.jpg"
                    alt=""
                  />
                </div>
                <div className="moveX gap-5 h-full flex items-center">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5vw  text-center lg:leading-[0.8] lg:pt-4 pt-1 uppercase">
                    See Everything
                  </h2>
                  <img
                    className="h-full w-[20vw] p-2 shrink-0 rounded-full object-cover"
                    src="/Media/NavBar/b1-1.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5vw  text-center lg:leading-[0.8] lg:pt-4 pt-1 uppercase">
                    See Everything
                  </h2>
                  <img
                    className="h-full w-[20vw] p-2 shrink-0 rounded-full object-cover"
                    src="/Media/NavBar/b1-2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="link overflow-hidden p-1 origin-top relative border-t-1 border-white">
            <Link to="/agency" onClick={() => setNavOpen(false)}>
              <h1 className="font-[font2] text-5vw lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-4 pt-1 uppercase">
                Agency
              </h1>
              <div className="moveLink left-0 w-full h-full absolute text-black flex top-0 bg-[#D3FD50]">
                <div className="moveX gap-5 h-full flex items-center">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5vw  text-center lg:leading-[0.8] lg:pt-4 pt-1 uppercase">
                    Know us
                  </h2>
                  <img
                    className="h-full w-[20vw] p-2 shrink-0 rounded-full object-cover"
                    src="/Media/NavBar/b2-1.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5vw  text-center lg:leading-[0.8] lg:pt-4 pt-1 uppercase">
                    Know us
                  </h2>
                  <img
                    className="h-full w-[20vw] p-2 shrink-0 rounded-full object-cover"
                    src="/Media/NavBar/b2-2.jpg"
                    alt=""
                  />
                </div>
                <div className="moveX gap-5 h-full flex items-center">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5vw  text-center lg:leading-[0.8] lg:pt-4 pt-1 uppercase">
                    Know us
                  </h2>
                  <img
                    className="h-full w-[20vw] p-2 shrink-0 rounded-full object-cover"
                    src="/Media/NavBar/b2-1.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5vw  text-center lg:leading-[0.8] lg:pt-4 pt-1 uppercase">
                    Know us
                  </h2>
                  <img
                    className="h-full w-[20vw] p-2 shrink-0 rounded-full object-cover"
                    src="/Media/NavBar/b2-2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Link>
          </div>
          <div
            onClick={() => window.open("https://k72.ca/en/contact", "_blank")}
            className="link overflow-hidden p-1 origin-top relative border-t-1 border-white"
          >
            <h1 className="font-[font2] text-5vw lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-4 pt-1 uppercase">
              Contact
            </h1>
            <div className="moveLink left-0 w-full h-full absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX gap-5 h-full flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5vw  text-center lg:leading-[0.8] lg:pt-4 pt-1 uppercase">
                  Send us a fax
                </h2>
                <img
                  className="h-full w-[20vw] p-2 shrink-0 rounded-full object-contain"
                  src="/Media/NavBar/heart-b-3.svg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5vw  text-center lg:leading-[0.8] lg:pt-4 pt-1 uppercase">
                  Send us a fax
                </h2>
                <img
                  className="h-full w-[20vw] p-2 shrink-0 rounded-full object-contain"
                  src="/Media/NavBar/heart-b-3.svg"
                  alt=""
                />
              </div>
              <div className="moveX gap-5 h-full flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5vw  text-center lg:leading-[0.8] lg:pt-4 pt-1 uppercase">
                  Send us a fax
                </h2>
                <img
                  className="h-full w-[20vw] p-2 shrink-0 rounded-full object-contain"
                  src="/Media/NavBar/heart-b-3.svg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5vw  text-center lg:leading-[0.8] lg:pt-4 pt-1 uppercase">
                  Send us a fax
                </h2>
                <img
                  className="h-full w-[20vw] p-2 shrink-0 rounded-full object-contain"
                  src="/Media/NavBar/heart-b-3.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            onClick={() => window.open("https://k72.ca/en/blog", "_blank")}
            className="link overflow-hidden p-1 origin-top relative border-y-1 border-white"
          >
            <h1 className="font-[font2] text-5vw lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-4 pt-1 uppercase">
              Blog
            </h1>
            <div className="moveLink left-0 w-full h-full absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX gap-5 h-full flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5vw  text-center lg:leading-[0.8] lg:pt-4 pt-1 uppercase">
                  Read Articles
                </h2>
                <img
                  className="h-full w-[20vw] p-2 shrink-0 rounded-full object-cover"
                  src="/Media/NavBar/b4-1.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5vw  text-center lg:leading-[0.8] lg:pt-4 pt-1 uppercase">
                  Read Articles
                </h2>
                <img
                  className="h-full w-[20vw] p-2 shrink-0 rounded-full object-cover"
                  src="/Media/NavBar/b4-gif.gif"
                  alt=""
                />
              </div>
              <div className="moveX gap-5 h-full flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5vw  text-center lg:leading-[0.8] lg:pt-4 pt-1 uppercase">
                  Read Articles
                </h2>
                <img
                  className="h-full w-[20vw] p-2 shrink-0 rounded-full object-cover"
                  src="/Media/NavBar/b4-1.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5vw  text-center lg:leading-[0.8] lg:pt-4 pt-1 uppercase">
                  Read Articles
                </h2>
                <img
                  className="h-full w-[20vw] p-2 shrink-0 rounded-full object-cover"
                  src="/Media/NavBar/b4-gif.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <div className="navfooter absolute bottom-0 left-0 w-full text-white font-[font2] text-[1.7vh] sm:text-[2vh] px-[1vw] py-[0.5vh] flex items-center justify-between">
        {/* Left Section: Location + Time */}
        <div className="hidden sm:flex items-center justify-center sm:gap-3 absolute bottom-[1.3%] left-[0.7%]">
          <img
            src="/svgs/Globe.svg"
            alt="globe"
            className="h-[4vh] w-[4vh] mr-1 sm:mr-2"
          />
          <span className="flex items-center gap-1 text-[2vh] sm:text-xl">
            MONTREAL_
            <Time />
          </span>
        </div>

        {/* Middle Section: Privacy Links */}
        <div className="hidden 2xl:flex items-center gap-2 uppercase text-[1.4vh] tracking-wide absolute bottom-[1.7%] left-[50%] translate-x-[-50%] mb-2">
          <span className="cursor-pointer hover:text-[#D3FD50] transition-all">
            Privacy Policy
          </span>
          <span className="cursor-pointer hover:text-[#D3FD50] transition-all">
            Privacy Notice
          </span>
          <span className="cursor-pointer hover:text-[#D3FD50] transition-all">
            Ethics Report
          </span>
          <span className="cursor-pointer hover:text-[#D3FD50] transition-all">
            Consent Choices
          </span>
        </div>

        {/* Right Section: Social Media Buttons */}
        <div className="flex items-center gap-3 absolute bottom-[1.3%] right-[0.7%]">
          {["FB", "IG", "IN", "BE"].map((s, i) => (
            <div
              key={i}
              onClick={() =>
                window.open(
                  s === "FB"
                    ? "https://www.linkedin.com/in/ayush-awasthi-dev/"
                    : s === "IG"
                    ? "https://x.com/otakuayush_"
                    : s === "IN"
                    ? "https://github.com/AyushAwasthi26"
                    : "https://leetcode.com/studyplan/leetcode-75/",
                  "_blank"
                )
              }
              className="border-2 border-white rounded-full px-2.5 pt-1 text-[3.5vh] sm:text-[4.5vh] cursor-pointer hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
