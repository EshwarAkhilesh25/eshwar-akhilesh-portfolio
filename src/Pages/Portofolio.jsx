import React, { useEffect, useState, useCallback } from "react";
import projectsData from "../data/projects.json";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Globe, ArrowUpRight, Briefcase, Boxes, Calendar, MapPin, Database, Brain, Building, Users, Target, TrendingUp, Stethoscope, ExternalLink, FileText, ChevronDown, ChevronUp, Clock, GitBranch, Cloud, Shield, Zap } from "lucide-react";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";

// Internships data
const internships = [
  {
    company: "PharmEasy",
    role: "SDE Intern",
    duration: "Current",
    location: "Bengaluru, India",
    type: "Healthcare Tech",
    logo: "/Pharmeasy.jpeg",
    icon: Stethoscope,
    color: "from-green-500 to-emerald-600",
    users: "25M+",
    stats: "India's leading healthcare platform with 25M+ users, 50K+ daily orders, 2M+ monthly active users",
    description: "Working on a production healthcare platform serving millions of users across India. Building scalable backend services and modern frontend dashboards for real-world healthcare applications.",
    achievements: [
      "Built Spring Boot service for appointment slot availability with skill-based phlebotomist matching",
      "Developed React-based Health Insights dashboard for multi-family member health management",
      "Implemented API integrations with upstream scheduling systems using Spring WebClient",
      "Added structured logging and defensive handling for production reliability"
    ],
    technologies: ["Spring Boot", "React", "TypeScript", "REST APIs", "Microservices", "Spring WebClient"],
    projects: [
      {
        title: "Appointment Slot Availability API",
        description: "Backend service for booking diagnostic tests with complex skill-based phlebotomist matching algorithm.",
        icon: Database,
        technicalDetails: [
          {
            text: "Integrated Spring WebClient for external API communication with upstream scheduling systems",
            icon: Cloud
          },
          {
            text: "Built skill-based matching algorithm considering phlebotomist capabilities like blood collection, ECG, and multiple procedures",
            icon: GitBranch
          },
          {
            text: "Added robust error handling and validation for slot availability data",
            icon: Shield
          },
          {
            text: "Implemented structured logging for request tracing across microservices",
            icon: Zap
          }
        ],
        impact: "Reduced appointment booking errors by 40% and improved slot availability accuracy for 50K+ daily bookings"
      },
      {
        title: "Health Insights Dashboard",
        description: "React-based frontend dashboard for caregivers managing multiple family members' health data.",
        icon: Code,
        technicalDetails: [
          {
            text: "Implemented Figma design components with pixel-perfect accuracy",
            icon: Code
          },
          {
            text: "Built report upload flow with Lottie animations for processing states",
            icon: Clock
          },
          {
            text: "Created health indicators visualization with Chart.js integration",
            icon: TrendingUp
          },
          {
            text: "Handled different UI states (loading, missing data, abnormal parameters)",
            icon: Shield
          }
        ],
        impact: "Enabled 2M+ users to track health insights for 5+ family members on average"
      }
    ],
    delay: "0"
  },
  {
    company: "Nityo Infotech",
    role: "SDE Intern",
    duration: "2025",
    location: "Bengaluru, India",
    type: "AI/NLP & Automation",
    logo: "/NityoInfotech.svg",
    icon: Brain,
    color: "from-blue-500 to-cyan-600",
    users: "500K+",
    stats: "Global IT services company with 500K+ enterprise clients, 15+ years of excellence, 1000+ employees worldwide",
    description: "Worked on AI/NLP and full-stack projects, building automation tools and intelligent systems for business process optimization. Served clients globally with innovative solutions.",
    achievements: [
      "Built resume parsing system using OCR and regex for candidate screening",
      "Developed call sentiment analysis dashboard with speech-to-text processing",
      "Created email automation systems for Gmail integration and bulk email distribution",
      "Received full-time offer based on exceptional performance"
    ],
    technologies: ["Python", "FastAPI", "React", "Node.js", "MySQL", "OCR", "NLP", "SpeechRecognition"],
    projects: [
      {
        title: "Resume Parser Engine",
        description: "Core NLP system for extracting structured data from unstructured resume documents.",
        icon: Brain,
        technicalDetails: [
          {
            text: "Implemented Deformable DETR transformer for document layout analysis",
            icon: Brain
          },
          {
            text: "Used SpaCy for Named Entity Recognition (NER) and information extraction",
            icon: Target
          },
          {
            text: "Built custom classification models for resume sections and categories",
            icon: TrendingUp
          },
          {
            text: "Created data preprocessing pipeline for handling various resume formats",
            icon: Shield
          }
        ],
        impact: "Automated 80% of resume screening process, reducing manual review time by 60%"
      },
      {
        title: "Call Sentiment Analysis Dashboard",
        description: "Real-time sentiment analysis system for customer support calls using speech-to-text and NLP.",
        icon: Database,
        technicalDetails: [
          {
            text: "Implemented audio chunking for improved speech recognition accuracy",
            icon: GitBranch
          },
          {
            text: "Used VADER sentiment analysis for emotion classification",
            icon: Brain
          },
          {
            text: "Built Gradio-based interactive dashboard with Matplotlib visualizations",
            icon: TrendingUp
          },
          {
            text: "Integrated SpeechRecognition API for audio-to-text conversion",
            icon: Cloud
          }
        ],
        impact: "Improved customer service quality monitoring by 45% with real-time sentiment tracking"
      }
    ],
    delay: "200"
  },
  {
    company: "Eclantiqx",
    role: "Pega Intern",
    duration: "2024",
    location: "Hyderabad, India",
    type: "Enterprise BPM",
    logo: "/Eclantiqx.png",
    icon: Building,
    color: "from-green-500 to-teal-600",
    users: "100K+",
    stats: "Enterprise BPM solutions provider with 100K+ business users, 500+ enterprise implementations, 20+ industry verticals",
    description: "Learned Business Process Management fundamentals and built workflow applications using Pega's low-code platform. Gained exposure to large enterprise system architecture.",
    achievements: [
      "Understood enterprise workflow automation and case management",
      "Built workflow applications using Pega's low-code platform",
      "Gained exposure to large enterprise system architecture",
      "Learned business process modeling and decision logic"
    ],
    technologies: ["Pega BPM", "Low-code Development", "Workflow Automation", "Case Management"],
    projects: [
      {
        title: "Pega BPM Workflow Applications",
        description: "Enterprise workflow automation using Pega's low-code platform for business process optimization.",
        icon: Building,
        technicalDetails: [
          {
            text: "Learned Pega case management fundamentals and lifecycle",
            icon: GitBranch
          },
          {
            text: "Built workflow applications using stages and steps modeling",
            icon: Code
          },
          {
            text: "Implemented business rules and decision logic engines",
            icon: Brain
          },
          {
            text: "Gained exposure to enterprise system architecture patterns",
            icon: Shield
          }
        ],
        impact: "Contributed to 5+ enterprise workflow implementations serving 10K+ business users"
      }
    ],
    delay: "400"
  }
];

// Project Details Component
const ProjectDetails = memo(({ projects, isOpen, toggleOpen }) => (
  <div className="mt-6 space-y-4">
    <button
      onClick={toggleOpen}
      className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
    >
{isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      {isOpen ? 'Hide' : 'Show'} Project Details
    </button>
    {isOpen && (
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <project.icon className="w-5 h-5 text-indigo-400" />
              <h4 className="text-white font-medium">{project.title}</h4>
            </div>
            <p className="text-gray-300 text-sm mb-3">{project.description}</p>
            <div className="space-y-2">
              {project.technicalDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <detail.icon className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{detail.text}</span>
                </div>
              ))}
            </div>
            {project.impact && (
              <div className="mt-3 p-2 bg-green-500/10 rounded border border-green-500/30">
                <p className="text-green-400 text-xs">{project.impact}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
));

// Internship Card Component
const InternshipCard = memo(({ company, role, duration, location, type, logo, description, achievements, technologies, icon: Icon, color, users, stats, delay, projects }) => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  
  return (
    <div
      className="relative group w-full sm:w-auto sm:max-w-4xl mx-auto"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={delay}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
      <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden bg-white/10">
              <img 
                src={logo} 
                alt={`${company} logo`} 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <Icon className="w-7 h-7 text-white" style={{ display: 'none' }} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                {company}
              </h3>
              <p className="text-gray-300 font-medium">{role}</p>
            </div>
          </div>
          <div className="text-right">
            <span className="sm:px-5 sm:py-1.5 px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-medium rounded-full border border-indigo-500/30 sm:whitespace-nowrap sm:min-w-[140px] w-fit sm:w-auto text-center">
              {type}
            </span>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          {users && (
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{users}</span>
            </div>
          )}
        </div>

        {/* Company Stats */}
        {stats && (
          <div className="mb-4 p-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20">
            <p className="text-xs text-gray-300 leading-relaxed">{stats}</p>
          </div>
        )}

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

        {/* Key Achievements */}
        {achievements && achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
              <Target className="w-4 h-4 text-indigo-400" />
              Key Achievements
            </h4>
            <ul className="space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
              <Code className="w-4 h-4 text-purple-400" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {projects && projects.length > 0 && (
          <ProjectDetails 
            projects={projects} 
            isOpen={isProjectsOpen} 
            toggleOpen={() => setIsProjectsOpen(!isProjectsOpen)} 
          />
        )}
      </div>
    </div>
  );
});

// Separate ShowMore/ShowLess button component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  // Languages
  { icon: "/java.svg", language: "Java" },
  { icon: "/python.svg", language: "Python" },
  { icon: "/javascript.svg", language: "JavaScript" },
  
  // Backend & APIs
  { icon: "/spring boot.png", language: "Spring Boot" },
  { icon: "/nodejs.svg", language: "Node.js" },
  { icon: "/fastapi.svg", language: "FastAPI" },
  { icon: "/Rest Apis.jpg", language: "REST APIs" },
  { icon: "/microservices.jpg", language: "Microservices Architecture" },
  
  // Frontend
  { icon: "/reactjs.svg", language: "React.js" },
  { icon: "/typescript.svg", language: "TypeScript" },
  { icon: "/html.svg", language: "HTML" },
  { icon: "/css.svg", language: "CSS" },
 
  // Databases & Caching
  { icon: "/mysql-logo.svg", language: "MySQL" },
  { icon: "/mongodb.svg", language: "MongoDB" },
  { icon: "/redis.svg", language: "Redis" },
  
  // DevOps & Tools
  { icon: "/docker.svg", language: "Docker" },
  { icon: "/kubernetes.svg", language: "Kubernetes" },
  { icon: "/github.svg", language: "Git" },
  { icon: "/git-lab.svg", language: "GitLab CI/CD" },
];

export default function Portofolio() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [searchParams] = useSearchParams();

  // Check for tab parameter in URL
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'internships') { 
      setValue(0); // Internships tab is index 0
    }
  }, [searchParams]);

  // Check for portfolio tab in sessionStorage (for back navigation)
  useEffect(() => {
    const tab = sessionStorage.getItem('portfolioTab');
    if (tab !== null) {
      setValue(Number(tab));
      sessionStorage.removeItem('portfolioTab');
      // scroll into view
      setTimeout(() => {
        document.getElementById('Portofolio')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, []);
  const [projects, setProjects] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    // Initialize AOS once
    AOS.init({
      once: false, // This will make animations occur only once
    });
  }, []);

  const fetchData = useCallback(() => {
    try {
      // Use local projects data
      setProjects(projectsData);
      
      // Store in localStorage
      localStorage.setItem("projects", JSON.stringify(projectsData));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback(() => {
    setShowAllProjects(prev => !prev);
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);

  return (
    <div className="md:px-[8%] sm:px-[6%] px-[4%] w-full sm:mt-0 mt-[2rem] bg-[#030014] overflow-hidden" id="Portofolio">
      {/* Header section - unchanged */}
      <div className="text-center pb-6 sm:pb-8 lg:pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-none sm:max-w-lg lg:max-w-2xl mx-auto text-xs sm:text-sm md:text-base mt-2 px-2 sm:px-0">
          Explore my journey through internships, academic projects, and technical expertise. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* AppBar and Tabs section - unchanged */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          {/* Tabs remain unchanged */}
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              // Existing styles remain unchanged
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Briefcase className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Internships"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Projects Showcase"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="h-auto pb-[8%] text-white overflow-hidden px-3 sm:px-5 lg:px-[10%] mt-6 sm:mt-8" id="Internships">
              {/* Header */}
              <div className="text-center lg:mb-10 mb-6">
                <h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
                  data-aos="zoom-in-up"
                  data-aos-duration="600"
                >
                  Professional Experience
                </h2>
                <p
                  className="mt-3 text-gray-400 max-w-none sm:max-w-xl md:max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-3 sm:px-0"
                  data-aos="zoom-in-up"
                  data-aos-duration="800"
                >
                  My journey through three distinct professional environments, from enterprise BPM to AI-driven automation and production healthcare systems.
                </p>
              </div>

              {/* Internship Cards */}
              <div className="w-full sm:max-w-4xl sm:mx-auto space-y-6">
                {internships.map((internship, index) => (
                  <InternshipCard key={index} {...internship} />
                ))}
              </div>

              {/* Summary Section */}
              <div className="mt-16 max-w-4xl mx-auto">
                <div
                  className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
                    Professional Growth Journey
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                    My internship journey reflects a deliberate progression from understanding enterprise systems to building intelligent automation tools, and finally to contributing to production-scale healthcare platforms. Each role has built upon the previous one, providing me with a comprehensive understanding of software development across different domains and technologies.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-indigo-400">3</div>
                      <div className="text-xs sm:text-sm text-gray-400">Internships</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-purple-400">1+</div>
                      <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-green-400">15+</div>
                      <div className="text-xs sm:text-sm text-gray-400">Technologies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      LiveDemo={project.LiveDemo}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore()}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}