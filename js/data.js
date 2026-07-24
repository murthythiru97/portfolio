/**
 * Portfolio Data Configuration - Thirumurthy S
 * Updated with exact profile, skills, projects, and credentials from Thirumurthy's resume.
 */

const portfolioData = {
  profile: {
    name: "Thirumurthy S",
    role: "Electronics & Communication Engineer",
    rolesList: [
      "Embedded Systems Engineer",
      "IoT Solutions Architect",
      "ECE Engineer",
      "VLSI & Firmware Developer"
    ],
    bio: "Motivated Electronics and Communication Engineering student with hands-on experience in embedded systems, IoT, and circuit design. Passionate about applying practical electronics knowledge to solve real-world engineering problems.",
    avatar: "assets/avatar.png",
    location: "Erode, Tamil Nadu, India",
    email: "murthythiru97@gmail.com",
    phone: "+91 9944441720",
    github: "https://github.com/murthythiru97",
    linkedin: "https://www.linkedin.com/in/thirumurthy-s/",
    resumeUrl: "assets/Thirumurthy_Resume.pdf",
    stats: [
      { label: "B.E. ECE CGPA", value: 7.6, suffix: "" },
      { label: "IoT & Hardware Projects", value: 5, suffix: "+" },
      { label: "NPTEL Certifications", value: 3, suffix: "" },
      { label: "SSLC Score", value: 100, suffix: "%" }
    ]
  },

  aboutTabs: {
    story: "I am an Electronics and Communication Engineering student at K S Rangasamy College of Technology with a strong foundation in embedded systems, IoT architecture, PCB design, and firmware development. My journey spans from building end-to-end wearable IoT solutions for international travel assistance to designing real-time sensor processing systems with ESP32 and Nordic nRF chips.",
    education: [
      {
        degree: "B.E. in Electronics and Communication Engineering",
        institution: "K S Rangasamy College of Technology",
        year: "2023 - 2027",
        description: "Current CGPA: 7.6 (Up to 6th Semester). Focused on Embedded Systems, VLSI Design, IoT, Signal Processing, and Microcontrollers."
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Diamond Jubilee Higher Secondary School",
        year: "2021 - 2023",
        description: "Scored 70.5% in Mathematics and Science stream."
      },
      {
        degree: "Secondary School Leaving Certificate (SSLC)",
        institution: "Best Matriculation School",
        year: "2020 - 2021",
        description: "Achieved a perfect 100% score."
      }
    ],
    certifications: [
      { title: "Introduction to Industry 4.0 and Industrial IoT", issuer: "NPTEL", year: "April 2025" },
      { title: "Introduction to Privacy and Security in Online Social Media", issuer: "NPTEL", year: "April 2025" },
      { title: "English Language for Competitive Exams", issuer: "NPTEL", year: "April 2024" }
    ]
  },

  services: [
    {
      icon: "fa-microchip",
      title: "Embedded Systems & Firmware",
      description: "Developing real-time firmware for microcontrollers (ESP32, Nordic nRF7002DK) using Zephyr RTOS, C, and C++."
    },
    {
      icon: "fa-wifi",
      title: "IoT Solutions & Hardware",
      description: "Designing end-to-end IoT architectures integrating Wi-Fi, BLE indoor localization, sensors, and cloud communication."
    },
    {
      icon: "fa-project-diagram",
      title: "Circuit & PCB Design",
      description: "Creating custom multi-layer PCB layouts, circuit simulations, and hardware schematics using KiCad, Multisim, and MATLAB."
    },
    {
      icon: "fa-cloud",
      title: "Backend & Cloud Services",
      description: "Building Python-based backend APIs and Firebase integrations for real-time sensor data synchronization and device management."
    }
  ],

  skills: [
    { category: "Embedded Systems", name: "C & Python", level: 90, icon: "fas fa-code" },
    { category: "Embedded Systems", name: "Zephyr RTOS", level: 85, icon: "fas fa-microchip" },
    { category: "Embedded Systems", name: "Nordic nRF & ESP32", level: 88, icon: "fas fa-network-wired" },

    { category: "Hardware & VLSI", name: "Verilog HDL", level: 82, icon: "fas fa-memory" },
    { category: "Hardware & VLSI", name: "KiCad PCB Design", level: 85, icon: "fas fa-drafting-compass" },
    { category: "Hardware & VLSI", name: "Multisim & MATLAB", level: 80, icon: "fas fa-wave-square" },
    { category: "Hardware & VLSI", name: "Xilinx & Keil uVision", level: 78, icon: "fas fa-desktop" },

    { category: "Cloud & Software", name: "Firebase & REST APIs", level: 82, icon: "fas fa-cloud-upload-alt" },
    { category: "Cloud & Software", name: "EDA Playground", level: 85, icon: "fas fa-terminal" }
  ],

  experience: [
    {
      role: "Embedded System Developer Virtual Intern",
      company: "Microchip Technology",
      period: "Internship",
      type: "Virtual",
      description: "Gained hands-on exposure to embedded firmware development, 8-bit/32-bit microcontrollers, and real-time hardware applications.",
      highlights: [
        "Mastered microcontroller peripherals, timer interrupts, and serial communication protocols",
        "Implemented embedded C control firmware for hardware testing modules"
      ]
    },
    {
      role: "Product 360 Initiative Developer",
      company: "VVDN Technologies",
      period: "Project Phase",
      type: "Product Prototype",
      description: "Selected for Product 360 Prototype Development Program to build an international travel assistance band.",
      highlights: [
        "Architected multi-layer PCB and firmware using Zephyr RTOS on nRF7002DK",
        "Integrated Wi-Fi, BLE indoor localization, OLED screen, and haptic feedback alerts"
      ]
    }
  ],

  projects: [
    {
      id: "aerolinkers",
      title: "Air Travel Assistance Band (Aerolinkers)",
      category: "ai",
      image: "assets/project-saas.png",
      shortDesc: "End-to-end wearable IoT solution with BLE indoor localization, Wi-Fi, Zephyr RTOS, and Python backend.",
      longDesc: "Developed under VVDN Technologies Product 360 Initiative. Features custom multi-layer PCB schematics designed in KiCad, Nordic nRF7002DK integration, Zephyr RTOS multi-threaded firmware, OLED I2C screen, haptic alerts, child proximity detection, and Python cloud backend API synchronization.",
      techStack: ["Nordic nRF7002DK", "Zephyr RTOS", "KiCad PCB Design", "BLE 5.3 / Wi-Fi 6", "Python", "Firebase"],
      liveUrl: "https://github.com/murthythiru97/aerolinkers-sw",
      githubUrl: "https://github.com/murthythiru97/aerolinkers-sw",
      featured: true
    },
    {
      id: "oxygen-monitor",
      title: "Portable Oxygen Monitoring Device",
      category: "web",
      image: "assets/project-ai.png",
      shortDesc: "ESP32-based medical sensing device for real-time oxygen concentration monitoring.",
      longDesc: "Designed and developed a portable medical oxygen concentration monitor. Features custom analog signal conditioning circuits, ADC calibration, ESP32 real-time sensing, OLED concentration display, and automated threshold audio/visual alert triggers.",
      techStack: ["ESP32", "Oxygen Sensors", "KiCad Schematic", "Embedded C", "OLED Display"],
      liveUrl: "https://github.com/murthythiru97/esp32-oxygen-monitor",
      githubUrl: "https://github.com/murthythiru97/esp32-oxygen-monitor",
      featured: true
    },
    {
      id: "smart-irrigation",
      title: "Smart Irrigation & Soil Sensing System",
      category: "web",
      image: "assets/project-ecom.png",
      shortDesc: "Automated IoT irrigation system using ESP32 and capacitive moisture sensors to conserve water.",
      longDesc: "Improved agricultural water efficiency by designing an automated IoT irrigation controller. Features optocoupler-isolated relay drivers, capacitive soil moisture telemetry, solar charge management, and live Firebase cloud telemetry.",
      techStack: ["ESP32", "Capacitive Moisture Sensors", "Relay Driver Circuit", "Firebase IoT", "Embedded C++"],
      liveUrl: "https://github.com/murthythiru97/smart-irrigation-system",
      githubUrl: "https://github.com/murthythiru97/smart-irrigation-system",
      featured: true
    },
    {
      id: "audio-amplifier",
      title: "Low Distortion Audio Power Amplifier",
      category: "web",
      image: "assets/project-saas.png",
      shortDesc: "High-clarity analog audio amplifier with low THD distortion and power push-pull stage.",
      longDesc: "Designed an analog audio power amplifier achieving high sound fidelity and low Total Harmonic Distortion (THD). Performed circuit schematic capture in KiCad, frequency response simulation in Multisim, and PCB prototype assembly.",
      techStack: ["KiCad Schematics", "Multisim Simulation", "Op-Amp Pre-Amp", "Push-Pull Transistor Stage"],
      liveUrl: "https://github.com/murthythiru97/audio-amplifier-circuit",
      githubUrl: "https://github.com/murthythiru97/audio-amplifier-circuit",
      featured: false
    },
    {
      id: "water-level-indicator",
      title: "Water Level Indicator & Tank Safety Controller",
      category: "web",
      image: "assets/project-ai.png",
      shortDesc: "Microcontroller safety circuit preventing water tank overflow and dry-run pump damage.",
      longDesc: "Engineered an automatic water level controller preventing tank overflow and dry-run pump burnout. Built using transistor sensor arrays, opto-isolated relay switches, and low-power microcontroller logic.",
      techStack: ["Microcontroller Logic", "Transistor Switch Array", "Relay Circuit", "Keil uVision"],
      liveUrl: "https://github.com/murthythiru97/water-level-indicator",
      githubUrl: "https://github.com/murthythiru97/water-level-indicator",
      featured: false
    }
  ],

  testimonials: [
    {
      name: "Product 360 Initiative Evaluator",
      role: "VVDN Technologies",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      quote: "Thirumurthy demonstrated exceptional technical initiative in building the Aerolinkers wearable device with Zephyr RTOS, multi-layer PCB routing, and BLE localization."
    },
    {
      name: "Faculty Mentor",
      role: "Department of ECE, KSRCT",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      quote: "A highly dedicated student with strong domain expertise in VLSI design, embedded firmware, and hardware prototyping."
    }
  ]
};
