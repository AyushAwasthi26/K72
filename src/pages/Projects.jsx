import React, { useEffect } from "react";
import ProjectCard from "../components/project/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Time from "../components/home/Time";
import { useLocation } from "react-router-dom"; // ← ADD THIS IMPORT

export default function Projects() {
  const location = useLocation(); // ← ADD THIS LINE

  const projects = [
    {
      image1: "/Media/Projects/i1.jpg",
      image2: "/Media/Projects/i2.jpg",
      link1: "https://k72.ca/en/work/everyone-s-pharmacy",
      link2: "https://k72.ca/en/work/widescape",
    },
    {
      image1: "/Media/Projects/i3.jpg",
      image2: "/Media/Projects/i4.jpg",
      link1: "https://k72.ca/en/work/oka",
      link2: "https://k72.ca/en/work/opto-reseau",
    },
    {
      image1: "/Media/Projects/i5.jpg",
      image2: "/Media/Projects/i6.jpg",
      link1: "https://k72.ca/en/work/coup-fumant",
      link2: "https://k72.ca/en/work/shelton",
    },
    {
      image1: "/Media/Projects/i7.jpg",
      image2: "/Media/Projects/i8.jpg",
      link1: "https://k72.ca/en/work/best",
      link2: "https://k72.ca/en/work/a-table-avec-lhistoire",
    },
    {
      image1: "/Media/Projects/i9.jpg",
      image2: "/Media/Projects/i10.jpg",
      link1:
        "https://k72.ca/en/work/la-coop-federee-becomes-sollio-groupe-cooperatif",
      link2: "https://k72.ca/en/work/lamajeure",
    },
    {
      image1: "/Media/Projects/i11.jpg",
      image2: "/Media/Projects/i12.jpg",
      link1: "https://k72.ca/en/work/synesthesia",
      link2: "https://k72.ca/en/work/100-temps",
    },
    {
      image1: "/Media/Projects/i13.jpg",
      image2: "/Media/Projects/i14.jpg",
      link1: "https://k72.ca/en/work/crisis24",
      link2: "https://k72.ca/en/work/we-see-you-like-no-other",
    },
    {
      image1: "/Media/Projects/i15.jpg",
      image2: "/Media/Projects/i16.jpg",
      link1: "https://k72.ca/en/work/open",
      link2: "https://k72.ca/en/work/fruite",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  // ✅ REPLACE YOUR useEffect WITH THIS
  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);

    // Force scroll again after a tiny delay
    const immediateScroll = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);

    // Refresh ScrollTrigger
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(immediateScroll);
      clearTimeout(refreshTimer);
    };
  }, [location.pathname]); // ← IMPORTANT: Change from [] to [location.pathname]

  useGSAP(function () {
    gsap.from(".hero", {
      height: "100px",
      stagger: {
        amount: 0.4,
      },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 100%",
        end: "top -500%",
        scrub: true,
      },
    });
  });

  return (
    <>
      <div className="p-3 pb-0">
        <div className="text-black text-[9vw] uppercase pt-[47vh] mb-[8vw] md:mb[4vw] lg:mb-2 xl:mb-0">
          <h1 className="font-[font2] text-[13.5vw] relative inline-block leading-none">
            WORK
            <span className="absolute top-[0.9vw] text-[3vw] font-[font2]">
              16
            </span>
          </h1>
        </div>

        <div className="-mt-[4vh] lol">
          {projects.map((project, index) => (
            <div
              key={index}
              className="hero w-full h-[300px] lg:h-[600px] mb-2 flex gap-2"
            >
              <ProjectCard
                image1={project.image1}
                image2={project.image2}
                link1={project.link1}
                link2={project.link2}
              />
            </div>
          ))}
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
        <div
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/ayush-awasthi-dev/",
              "_blank"
            )
          }
          className="hidden absolute group lg:flex items-center justify-center overflow-hidden gap-3 right-[0.7%] top-[2.5%] border-3 w-auto border-white rounded-full px-6  cursor-pointer hover:border-[#D3FD50] text-white hover:text-[#D3FD50] transition-all duration-300"
        >
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

        <div className="text-white font-[font2] absolute bottom-[0.2%] right-[0.7%] text-[4vw] sm:text-[3.3vw] lg:text-[1.3vw] mb-3 cursor-pointer uppercase">
          Back to top
        </div>
      </div>
    </>
  );
}
