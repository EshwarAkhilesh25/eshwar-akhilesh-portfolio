import React, { useEffect, memo, useState } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Code,
  Users,
  Target,
  TrendingUp,
  Building,
  Stethoscope,
  Brain,
  Mail,
  FileText,
  ChevronDown,
  ChevronUp,
  Clock,
  Award,
  GitBranch,
  Database,
  Cloud,
  Shield,
  Zap,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectDetails = memo(({ projects, isOpen, toggleOpen }) => (
  <div className="mt-6 space-y-4">
    <div className="flex items-center justify-between">
      <h4 className="text-sm font-semibold text-white flex items-center gap-2">
        <FileText className="w-4 h-4 text-indigo-400" />
        Detailed Project Discussion
      </h4>
      <button
        onClick={toggleOpen}
        className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
      >
        {isOpen ? (
          <>
            <ChevronUp className="w-4 h-4" />
            Show Less
          </>
        ) : (
          <>
            <ChevronDown className="w-4 h-4" />
            Show More
          </>
        )}
      </button>
    </div>
    
    {isOpen && (
      <div className="space-y-4" data-aos="fade-in" data-aos-duration="500">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                <project.icon className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="flex-1">
                <h5 className="text-white font-medium mb-1">{project.title}</h5>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
            
            {project.technicalDetails && (
              <div className="ml-11 space-y-3">
                {project.technicalDetails.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-start gap-2">
                    <detail.icon className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-300">{detail.text}</p>
                      {detail.code && (
                        <code className="text-xs bg-gray-900/50 px-2 py-1 rounded text-green-400 mt-1 block">
                          {detail.code}
                        </code>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {project.impact && (
              <div className="ml-11 mt-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-green-400">Impact</span>
                </div>
                <p className="text-xs text-gray-300">{project.impact}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
));

const InternshipCard = memo(({ company, role, duration, location, type, description, achievements, technologies, icon: Icon, color, users, stats, delay, projects }) => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  
  return (
  <div
    className="relative group"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay={delay}
  >
    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
    <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${color} p-3`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
              {company}
            </h3>
            <p className="text-gray-300 font-medium">{role}</p>
          </div>
        </div>
        <div className="text-right">
          <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-medium rounded-full border border-indigo-500/30">
            {type}
          </span>
          {users && (
            <div className="mt-2">
              <span className="text-lg font-bold text-green-400">{users}</span>
              <p className="text-xs text-gray-400">Users</p>
            </div>
          )}
        </div>
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
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

      {/* Project Details */}
      {projects && (
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

const InternshipPage = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);

  const internships = [
    {
      company: "PharmEasy",
      role: "SDE Intern",
      duration: "Current",
      location: "Bengaluru, India",
      type: "Healthcare Tech",
      icon: Stethoscope,
      color: "from-green-500 to-emerald-600",
      description: "Working on a production healthcare platform serving millions of users across India. Building scalable backend services and modern frontend dashboards for real-world healthcare applications.",
      achievements: [
        "Built Spring Boot service for appointment slot availability with skill-based phlebotomist matching",
        "Developed React-based Health Insights dashboard for multi-family member health management",
        "Implemented API integrations with upstream scheduling systems using Spring WebClient",
        "Added structured logging and defensive handling for production reliability"
      ],
      technologies: ["Spring Boot", "React", "TypeScript", "REST APIs", "Microservices", "Spring WebClient"],
      users: "25M+",
      stats: "India's leading healthcare platform with 25M+ users, 50K+ daily orders, 2M+ monthly active users",
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
      icon: Brain,
      color: "from-blue-500 to-cyan-600",
      description: "Worked on AI/NLP and full-stack projects, building automation tools and intelligent systems for business process optimization. Served clients globally with innovative solutions.",
      achievements: [
        "Built resume parsing system using OCR and regex for candidate screening",
        "Developed call sentiment analysis dashboard with speech-to-text processing",
        "Created email automation systems for Gmail integration and bulk email distribution",
        "Received full-time offer based on exceptional performance"
      ],
      technologies: ["Python", "FastAPI", "React", "Node.js", "MySQL", "OCR", "NLP", "SpeechRecognition"],
      users: "500K+",
      stats: "Global IT services company with 500K+ enterprise clients, 15+ years of excellence, 1000+ employees worldwide",
      projects: [
        {
          title: "Resume Parsing System",
          description: "Automated candidate screening system using OCR and NLP for resume information extraction.",
          icon: Brain,
          technicalDetails: [
            {
              text: "Implemented multi-format text extraction from PDF, DOCX, and scanned images",
              icon: FileText
            },
            {
              text: "Used Tesseract OCR for processing image-based resume documents",
              icon: Zap
            },
            {
              text: "Built regex-based field extraction for name, email, phone, and skills",
              icon: Code
            },
            {
              text: "Created skill matching algorithm with scoring system for candidate ranking",
              icon: Award
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
        },
        {
          title: "Email Automation Systems",
          description: "Suite of tools for Gmail integration, attachment processing, and bulk email distribution.",
          icon: Mail,
          technicalDetails: [
            {
              text: "Built IMAP-based Gmail integration with SQLite storage",
              icon: Database
            },
            {
              text: "Implemented attachment preview for PDF, images, Excel files",
              icon: FileText
            },
            {
              text: "Created bulk email system with Pandas Excel integration",
              icon: Code
            },
            {
              text: "Added delivery tracking and status updates",
              icon: Shield
            }
          ],
          impact: "Automated 70% of HR communication workflows, saving 15+ hours weekly"
        }
      ],
      delay: "100"
    },
    {
      company: "Eclatprime",
      role: "Pega Intern",
      duration: "2024",
      location: "Hyderabad, India",
      type: "Enterprise BPM",
      icon: Building,
      color: "from-purple-500 to-pink-600",
      description: "Learned Business Process Management fundamentals and built workflow applications using Pega's low-code platform. Gained exposure to enterprise-scale system architecture.",
      achievements: [
        "Understood enterprise workflow automation and case management",
        "Built workflow applications using Pega's low-code platform",
        "Gained exposure to large enterprise system architecture",
        "Learned business process modeling and decision logic"
      ],
      technologies: ["Pega BPM", "Low-code Development", "Workflow Automation", "Case Management"],
      users: "100K+",
      stats: "Enterprise BPM solutions provider with 100K+ business users, 500+ enterprise implementations, 20+ industry verticals",
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
      delay: "200"
    }
  ];

  return (
    <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10" id="Internships">
      {/* Header */}
      <div className="text-center lg:mb-12 mb-8">
        <h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          data-aos="zoom-in-up"
          data-aos-duration="600"
        >
          Internship Experience
        </h2>
        <p
          className="mt-4 text-gray-400 max-w-3xl mx-auto text-lg"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          My journey through three distinct professional environments, from enterprise BPM to AI-driven automation and production healthcare systems.
        </p>
      </div>

      {/* Internship Cards */}
      <div className="max-w-6xl mx-auto space-y-6">
        {internships.map((internship, index) => (
          <InternshipCard key={index} {...internship} />
        ))}
      </div>

      {/* Summary Section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div
          className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-indigo-400" />
            Professional Growth Journey
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            My internship journey reflects a deliberate progression from understanding enterprise systems to building intelligent automation tools, and finally to contributing to production-scale healthcare platforms. Each role has built upon the previous one, providing me with a comprehensive understanding of software development across different domains and technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400">3</div>
              <div className="text-sm text-gray-400">Internships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">2025</div>
              <div className="text-sm text-gray-400">Graduate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">15+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipPage;
