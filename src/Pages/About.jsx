import React, { useEffect, memo } from "react";
import {
  FileText,
  Code,
  Sparkles,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Memoized Components
const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        About Me
      </h2>
    </div>
    <p
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-5 h-5 text-purple-400" />
      Transforming ideas into digital experiences
      <Sparkles className="w-5 h-5 text-purple-400" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center p-3 sm:p-6 lg:p-12 lg:py-0 lg:pb-0">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      {/* Optimized gradient backgrounds with reduced complexity for mobile */}
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>
      <div className="relative">
        <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />

          {/* Optimized overlay effects - disabled on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />

          <img
            src="/Eshwar profile.jpg"
            alt="Eshwar Akhilesh Profile"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
          />

          {/* Advanced hover effects - desktop only */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
            <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </div>
  </div>
));

const AboutPage = () => {
  // Optimized AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false,
      });
    };

    initAOS();

    // Debounced resize handler
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div
      className="h-auto py-12 sm:py-16 md:py-20 lg:py-24 text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%]"
      id="About"
    >
      <Header />

      <div className="w-full mx-auto pt-8 sm:pt-12 md:pt-16 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Hello, I'm
              </span>
              <span
                className="block mt-2 sm:mt-3 text-gray-200"
                data-aos="fade-right"
                data-aos-duration="1300"
              >
                Eshwar Akhilesh
              </span>
            </h2>

            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed md:leading-relaxed text-justify"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Hi, I'm Eshwar Akhilesh, a Computer Science and Engineering graduate from NIT Andhra Pradesh, originally from Hyderabad. My academic journey involved working on diverse projects, from web applications to deep learning-based medical imaging, utilizing Python, Java, and full-stack development, which honed my problem-solving skills.

              I've gained valuable industry exposure through three distinct internships. I began at Eclatprime, where I delved into Pega-based BPM workflows, gaining insights into low-code automation and enterprise systems architecture. Following this, as an SDE Intern at Nityo Infotech, I contributed to AI/NLP and full-stack projects, including a resume parsing and candidate screening tool, and an automation tool for Excel data comparison and reporting.

              Currently, I'm an SDE Intern at PharmEasy, where I'm deeply involved in a production healthcare platform. My work includes building Spring Boot services for appointment booking and developing React-based Health Insights dashboards that help caregivers manage health data for multiple family members in one place. This experience has been crucial in understanding the complexities of building scalable and reliable user-facing systems.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4 w-full justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1Dap4F6jQ1zNIzk3z1UipgW1L6Q8a_MQ8/view?usp=sharing"
                className="w-full sm:w-auto"
              >
                <button
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium text-sm sm:text-base transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> View CV
                </button>
              </a>
              <a href="#Portofolio" className="w-full sm:w-auto">
                <button
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium text-sm sm:text-base transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 hover:bg-[#a855f7]/10"
                >
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
                </button>
              </a>
            </div>
          </div>

          <ProfileImage />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes spin-slower {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default memo(AboutPage);
