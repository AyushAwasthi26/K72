import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Time from "../components/home/Time";
import { Link } from "react-router-dom";

const Agency = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const teamSectionRef = useRef(null);

  const [darkMode, setDarkMode] = useState(false);

  const imageArray = [
    "/Media/Agency/imgi_1_Carl_480x640.jpg",
    "/Media/Agency/imgi_2_Olivier_480x640.jpg",
    "/Media/Agency/imgi_3_Lawrence_480x640.jpg",
    "/Media/Agency/imgi_4_HugoJoseph_480x640.jpg",
    "/Media/Agency/imgi_5_ChantalG_480x640.jpg",
    "/Media/Agency/imgi_6_SophieA_480x640.jpg",
    "/Media/Agency/imgi_7_Michele_480X640.jpg",
    "/Media/Agency/imgi_8_MEL_480X640.jpg",
    "/Media/Agency/imgi_9_CAMILLE_480X640_2.jpg",
    "/Media/Agency/imgi_10_MEGGIE_480X640_2.jpg",
    "/Media/Agency/imgi_11_joel_480X640_3.jpg",
  ];

  const staff = [
    {
      role: "Business Lead",
      name: "CARL GODBOUT",
    },
    {
      role: "Copywriter",
      name: "CAMILLE BRIÈRE",
    },
    {
      role: "Account Manager",
      name: "STÉPHANIE BRUNELLE",
    },
    {
      role: "EVP & Managing Director",
      name: "PIERRE-LUC PAIEMENT",
    },
    {
      role: "Art Director",
      name: "MÉLANIE LAVIOLETTE",
    },
    {
      role: "Director of Strategy",
      name: "MICHÈLE RIENDEAU",
    },
    {
      role: "Account Director",
      name: "MEGGIE LAVOIE",
    },
    {
      role: "Account Manager",
      name: "PHILIPPE PERREAULT",
    },
    {
      role: "Strategist",
      name: "BÉATRICE ROUSSIN",
    },
    {
      role: "Account Manager",
      name: "LOU GRAVEL-JEAN",
    },
    {
      role: "Planificateur stratégique principal",
      name: "OLIVIER ROEYAERTS",
    },
    {
      role: "Account Manager",
      name: "HÉLÈNE CONTI",
    },
    {
      role: "Account Coordinator",
      name: "LAWRENCE MEUNIER",
    },
    {
      role: "Senior Director",
      name: "ISABELLE BEAUCHEMIN",
    },
    {
      role: "Graphic Designer",
      name: "OLIVIER DUCLOS",
    },
    {
      role: "Associate Creative Director",
      name: "JOËL LETARTE",
    },
    {
      role: "Creative Director",
      name: "CHANTAL GOBEIL",
    },
    {
      role: "Associate Creative Director",
      name: "SÉBASTIEN ROY",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top -98%",
        end: "top -245%",
        scrub: 1,
        pin: true,
        pinType: "transform",
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (e) => {
          const progress = e.progress;
          const index =
            progress < 1
              ? Math.floor(progress * imageArray.length)
              : imageArray.length - 1;
          imageRef.current.src = imageArray[index];
        },
      },
    });
  });

  // Dark mode switch when team section enters
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: teamSectionRef.current,
      start: "top top",
      end: "bottom top",
      onEnter: () => setDarkMode(true),
      onLeaveBack: () => setDarkMode(false),
    });
  });

  // Marquee animation for team member names (alternate direction)
  // 3. Marquee animation for team member names (ALTERNATING SMOOTH LOOP)
  React.useEffect(() => {
    if (!gsap) return;

    const tracks = gsap.utils.toArray(".marqueeTrack");

    // Clear any existing tweens to prevent conflicts on re-render
    gsap.killTweensOf(tracks);
    const animations = [];

    tracks.forEach((track, i) => {
      const innerMarquee = track.querySelector(".nameMarquee");
      if (!innerMarquee) return;

      const loopDistance = innerMarquee.offsetWidth;
      const direction = i % 2 === 0 ? -1 : 1;
      const loopDuration = 14;

      let initialX = 0;
      let targetX = direction * loopDistance;

      // Fix for Right-Moving Tracks (direction = 1)
      if (direction === 1) {
        initialX = -loopDistance;
        targetX = 0;
      }

      gsap.set(track, { x: initialX });

      const anim = gsap.to(track, {
        x: targetX,
        duration: loopDuration,
        repeat: -1,
        ease: "none",

        modifiers: {
          x: (x) => {
            const value = parseFloat(x);
            return `${value % -loopDistance}px`;
          },
        },
      });
      animations.push(anim);
    });

    // Cleanup function
    return () => {
      animations.forEach((anim) => anim.kill());
    };
  }, [gsap]);

  // Custom font styling for demonstration (assumes Tailwind config or external loading)
  const customFont = {
    // Fallback font-family, assuming 'font2' is loaded externally or configured in Tailwind
    fontFamily: "Oswald, sans-serif",
  };

  return (
    <div
      className={`transition-colors duration-700 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* SECTION 1 */}
      <div className="section1 text-black bg-white relative">
        {/* 
          👇 z-30 keeps image above text but under navbar (usually z-50)
             add small drop-shadow for better separation if needed
        */}
        <div
          ref={imageDivRef}
          className="h-[50vw] w-[35vw] sm:h-[35vw] sm:w-[25vw] lg:h-[20vw] lg:w-[15vw] absolute top-[16vh] left-[12vw] md:top-[5vh] md:left-[30vw] overflow-hidden rounded-2xl bg-white"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="/Media/Agency/imgi_1_Carl_480x640.jpg"
            alt="logo"
          />
        </div>

        <div className="relative font-[font2]">
          <div className="pt-[42vh] md:pt-[40vh]">
            <h1 className="text-[20vw] uppercase leading-[18vw] text-center">
              SEVEN7Y
              <br />
              TWO
            </h1>
          </div>
          <div className="pl-[50%] md:pl-[45%] mt-7 ml-3">
            <p className="text-[4vh] lg:text-[7vh] lg:leading-[7vh]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              We’re inquisitive and open-minded, and we make sure creativity
              crowds out ego from every corner. A brand is a living thing, with
              values, a personality and a story. If we ignore that, we can
              achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>
      </div>
      {/* SECTION 2 */}
      <div className="section2 w-full h-auto text-[3vh] lg:text-[2.7vh] font-[620] tracking-tight flex flex-col space-y-[15vh] pt-[25vh] px-[10vw]">
        <div className="flex justify-items-start">
          <div className="mr-[22vw]">Expertise</div>
          <div>
            <ul className="space-y-[0.5vh]">
              <li>Strategy</li>
              <li>Advertising</li>
              <li>Branding</li>
              <li>Design</li>
              <li>Content</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-y-[6vh] sm:gap-y-[10vh]">
          <div className="w-full sm:w-[32%] leading-tight pr-10">
            <p>
              <span className="font-semibold">Our Work_</span> Born in
              curiosity, raised by dedication and fed with a steady diet of
              creativity.
            </p>
          </div>
          <div className="w-full sm:w-[32%] leading-tight pr-10">
            <p>
              <span className="font-semibold">Our Creative_</span> Simmering in
              an environment where talent can come to a full boil. Encouraged to
              become the best versions of ourselves.
            </p>
          </div>
          <div className="w-full sm:w-[32%] leading-tight pr-10">
            <p>
              <span className="font-semibold">Our Culture_</span> We’re open to
              each other. Period. The team works together to create a space that
              makes us proud.
            </p>
          </div>
        </div>
      </div>
      {/* TEAM SECTION */}
      <div
        ref={teamSectionRef}
        className="team-section relative w-full min-h-[200vh] flex flex-col justify-center items-center overflow-hidden pt-[50vh]"
      >
        {/* MEMBER 1 */}
        <div className="relative w-full h-screen flex justify-center items-center mb-[2vw] lg:mb-[20vh]">
          {/* First name (moves left) */}
          <div className="absolute top-[40vh] lg:top-[35vh] left-0 transform -translate-y-1/2 w-[200%] overflow-hidden z-0">
            <div className="marqueeTrack flex whitespace-nowrap space-x-[80vh]">
              <div className="nameMarquee flex text-[14vw] sm:text-[10vw] font-[font2] text-[#D3FD50] uppercase space-x-[80vh]">
                <span>Camille&nbsp;</span>
                <span>Camille&nbsp;</span>
                <span>Camille&nbsp;</span>
              </div>
              <div className="nameMarquee flex text-[14vw] sm:text-[10vw] font-[font2] text-[#D3FD50] uppercase space-x-[80vh]">
                <span>Camille&nbsp;</span>
                <span>Camille&nbsp;</span>
                <span>Camille&nbsp;</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="z-10 rounded-2xl overflow-hidden shadow-lg w-[60vw] h-[80vw] sm:w-[65vh] sm:h-[98vh]">
            <img
              src="/Media/Agency/people/p1.jpg"
              className="w-full h-full object-cover"
              alt="Camille"
            />
          </div>

          {/* Surname (moves right) */}
          <div className="absolute bottom-[40vh] lg:bottom-[35vh] left-0 transform translate-y-1/2 w-[200%] overflow-hidden z-20">
            <div className="marqueeTrack flex whitespace-nowrap space-x-[80vh]">
              <div className="nameMarquee flex text-[14vw] sm:text-[10vw] font-[font2] text-[#D3FD50] uppercase space-x-[80vh]">
                <span>
                  BRIÈRE&nbsp;
                  <span className="text-white text-4xl justify-end">
                    Design Head
                  </span>
                </span>
                <span>
                  BRIÈRE&nbsp;
                  <span className="text-white text-4xl justify-end">
                    Design Head
                  </span>
                </span>
                <span>
                  BRIÈRE&nbsp;
                  <span className="text-white text-4xl justify-end">
                    Design Head
                  </span>
                </span>
              </div>
              <div className="nameMarquee flex text-[14vw] sm:text-[10vw] font-[font2] text-[#D3FD50] uppercase space-x-[80vh]">
                <span>
                  BRIÈRE&nbsp;
                  <span className="text-white text-4xl justify-end">
                    Design Head
                  </span>
                </span>
                <span>
                  BRIÈRE&nbsp;
                  <span className="text-white text-4xl justify-end">
                    Design Head
                  </span>
                </span>
                <span>
                  BRIÈRE&nbsp;
                  <span className="text-white text-4xl justify-end">
                    Design Head
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* MEMBER 2 */}
        <div className="relative w-full h-screen flex justify-center items-center">
          {/* First name (moves left) */}
          <div className="absolute top-[40vh] lg:top-[35vh] left-0 transform -translate-y-1/2 w-[200%] overflow-hidden z-0">
            <div className="marqueeTrack flex whitespace-nowrap space-x-[80vh]">
              <div className="nameMarquee flex text-[14vw] sm:text-[10vw] font-[font2] text-[#D3FD50] uppercase space-x-[80vh]">
                <span>Michèle&nbsp;</span>
                <span>Michèle&nbsp;</span>
                <span>Michèle&nbsp;</span>
              </div>
              <div className="nameMarquee flex text-[14vw] sm:text-[10vw] font-[font2] text-[#D3FD50] uppercase space-x-[80vh]">
                <span>Michèle&nbsp;</span>
                <span>Michèle&nbsp;</span>
                <span>Michèle&nbsp;</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="z-10 rounded-2xl overflow-hidden shadow-lg w-[60vw] h-[80vw] sm:w-[65vh] sm:h-[98vh]">
            <img
              src="/Media/Agency/people/p2.jpg"
              className="w-full h-full object-cover"
              alt="Michele"
            />
          </div>

          {/* Surname (moves right) */}
          <div className="absolute bottom-[40vh] lg:bottom-[35vh] left-0 transform translate-y-1/2 w-[200%] overflow-hidden z-20">
            <div className="marqueeTrack flex whitespace-nowrap space-x-[80vh]">
              <div className="nameMarquee flex text-[14vw] sm:text-[10vw] font-[font2] text-[#D3FD50] uppercase space-x-[80vh]">
                <span>
                  RIENDEAU&nbsp;
                  <span className="text-white text-4xl justify-end">
                    Design Head
                  </span>
                </span>
                <span>
                  RIENDEAU&nbsp;
                  <span className="text-white text-4xl justify-end">
                    Design Head
                  </span>
                </span>
                <span>
                  RIENDEAU&nbsp;
                  <span className="text-white text-4xl justify-end">
                    Design Head
                  </span>
                </span>
              </div>
              <div className="nameMarquee flex text-[14vw] sm:text-[10vw] font-[font2] text-[#D3FD50] uppercase space-x-[80vh]">
                <span>
                  RIENDEAU&nbsp;
                  <span className="text-white text-4xl justify-end">
                    Design Head
                  </span>
                </span>
                <span>
                  RIENDEAU&nbsp;
                  <span className="text-white text-4xl justify-end">
                    Design Head
                  </span>
                </span>
                <span>
                  RIENDEAU&nbsp;
                  <span className="text-white text-4xl justify-end">
                    Design Head
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TEAM DIRECTORY SECTION */}
      <div className="w-full bg-black text-white py-[20vh] overflow-hidden">
        <div className="flex flex-col w-screen align-top">
          {staff.map((member, i) => (
            <div
              key={i}
              className="group relative flex align-top justify-between items-start w-full h-[9vh] border-y-[0.2px] border-[#c8c8c8af] py-[1vh]  border-[#222] overflow-hidden"
            >
              {/* Neon hover bar (like navbar) */}
              <div className="absolute left-0 top-0 h-0 w-full bg-[#D3FD50] transition-all duration-500 ease-in-out group-hover:h-full z-0"></div>

              {/* Text content */}
              <div className="flex justify-between items-start py-2 w-full relative z-10 px-[1vw] group-hover:text-[#000000]">
                <p className="text-[1.8vh] font-[800] flex align-top font-medium uppercase tracking-normal">
                  {member.role}
                </p>
                <p className="text-[3vh] lg:text-[5vh] font-semibold uppercase px-[1vw] text-right">
                  {member.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-black relative">
        <div className="sticky top-0 w-full min-h-[80vh] sm:h-screen flex items-center justify-center px-2 sm:px-4">
          <div
            onClick={() =>
              window.open("https://k72.ca/en/work/we-see-you-like-no-other")
            }
            className="relative cursor-pointer font-[font2] w-full h-full rounded-[5vh] overflow-hidden"
          >
            <img
              src="/Media/Agency/pro-slides/p1.jpg"
              className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-500"
              alt="Opto-Réseau"
            />
            <div className="absolute flex flex-col space-y-[3vh] justify-center items-center text-center font-[font2] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
              <div className="text-[4vh]">Opto-Réseau</div>
              <h2 className="text-[5vh] lg:text-[8.5vh]">
                We see you like no other
              </h2>
            </div>
          </div>
        </div>

        <div className="sticky top-0 w-full min-h-[80vh] sm:h-screen flex items-center justify-center px-2 sm:px-4">
          <div
            onClick={() => window.open("https://k72.ca/en/work/lamajeure")}
            className="relative cursor-pointer font-[font2] w-full h-full rounded-[5vh] overflow-hidden"
          >
            <img
              src="/Media/Agency/pro-slides/p2.jpg"
              className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-500"
              alt="Lamajeure"
            />
            <div className="absolute flex flex-col space-y-[3vh] justify-center items-center text-center font-[font2] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
              <div className="text-[4vh]">Lamajeure</div>
              <h2 className="text-[8.5vh]">Lamajeure</h2>
            </div>
          </div>
        </div>

        <div className="sticky top-0 w-full min-h-[80vh] sm:h-screen flex items-center justify-center px-2 sm:px-4">
          <div
            onClick={() => window.open("https://k72.ca/en/work/fruite")}
            className="relative cursor-pointer font-[font2] w-full h-full rounded-[5vh] overflow-hidden"
          >
            <img
              src="/Media/Agency/pro-slides/p3.jpg"
              className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-500"
              alt="Lassonde"
            />
            <div className="absolute flex flex-col space-y-[3vh] justify-center items-center text-center font-[font2] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
              <div className="text-[4vh]">Lassonde</div>
              <h2 className="text-[8.5vh]">Fruité</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full h-[30vh] lg:h-[60vh] bg-black mt-[5vh] overflow-hidden relative">
        <div className="flex items-center gap-3 absolute top-[2.5%] left-[0.7%]">
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
              className="border-3 border-white rounded-full pt-2 px-3 lg:px-6 text-[5vh] md:text-[9.5vh] font-[font2] cursor-pointer hover:border-[#D3FD50] text-white hover:text-[#D3FD50] transition-all duration-300"
            >
              {s}
            </div>
          ))}
        </div>
        <div onClick={() => window.open("https://www.linkedin.com/in/ayush-awasthi-dev/", "_blank")} className="hidden absolute group lg:flex items-center justify-center overflow-hidden gap-3 right-[0.7%] top-[2.5%] border-3 w-auto border-white rounded-full px-6  cursor-pointer hover:border-[#D3FD50] text-white hover:text-[#D3FD50] transition-all duration-300">
          <div className="text-[5.5vh] sm:text-[9.5vh] font-[font2] text-white group-hover:text-[#D3FD50] transition-all duration-300 uppercase pt-2">
            Contact
          </div>
          <div className="relative w-[6vh] h-[6vh]">
            <img
              src="/Media/Projects/heart-b-3.svg"
              className="absolute inset-0 w-full h-full opacity-100 group-hover:opacity-0 transition-all duration-300"
            />
            <img
              src="/Media/Projects/heart-b-3-green.svg"
              className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            />
          </div>
        </div>

        <div className="flex items-center justify-center sm:gap-3 absolute bottom-[2%] left-[0.7%]">
          <img
            src="/svgs/Globe.svg"
            alt="globe"
            className="h-[4vh] w-[4vh] mr-1 sm:mr-2"
          />
          <span className="flex items-center gap-1 text-[4vw] sm:text-xl text-white font-[font2] pt-1">
            MONTREAL_
            <Time />
          </span>
        </div>

        <div className="hidden xl:flex items-center gap-[2vw] uppercase text-[1.8vh] text-white font-[font2] tracking-wide absolute bottom-[3.5%] left-[32%]">
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

        <div className="text-white font-[font2] absolute bottom-[2%] right-[2%] text-[5vw] sm:text-[3vw] lg:text-[1.3vw] mb-3 cursor-pointer uppercase">
          Back to top
        </div>
      </div>
    </div>
  );
};

export default Agency;
