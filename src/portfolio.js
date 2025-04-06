/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Yogeshkumar's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products.",
  og: {
    title: "Yogeshkumar Rupeliya Portfolio",
    type: "website",
    url: "https://yogeshkumar-rupeliya.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Yogeshkumar Rupeliya (Yogi)",
  logo_name: "Yogeahkumar  Rupeliya",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  githubProfile: "https://github.com/Janveble",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Janveble",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yogesh-rupeliya/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:yogeshrupeliya@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/yogi.rj006/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  
];

const skills = {
  data: [
    {
      title: "Materialist | Semiconductor Researcher | MEMS Enthusiast",
      fileName: "DataScienceImg",
      skills: [
        "I am currently pursuing a degree in Advanced Functional Materials at Chemnitz University of Technology, with a strong focus on materials science. My passion lies in semiconductor technology and MEMS, which play a pivotal role in modern electronics, sensors, and microfabrication. Driven by curiosity and a commitment to innovation, I thrive in environments that challenge the boundaries of materials science. I am eager to contribute my analytical skills and technical expertise to projects that push technological frontiers in semiconductor materials, microelectronics, and MEMS applications. I strongly believe in the power of collaboration, continuous learning, and integrity in research and development.",
      ],
      softwareSkills: [
        
      ],
    },],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "Chemnitz Institute of Technology",
      subtitle: "M.Sc. in Advanced Functional Materials",
      logo_path: "TUC.png",
      alt_name: "TUC",
      duration: "2020 - Present",
      descriptions: [
        "Major Modules:",
        "Semiconductor physics - Nano structures, Photovoltaics with Nano technology, Advanced surfaces, Thin films and interfaces, Facets of materials science, Materials in Micro and Nano technologies, Analytical methods, Sustainable production technologies, Printed Functionalities",
      ],
      website_link: "https://www.tu-chemnitz.de/index.html.en",
    },
    {
      title: "Sardar Patel University",
      subtitle: "M.Sc. in Physics",
      logo_path: "SPU.png",
      alt_name: "SPU",
      duration: "2016 - 2018",
      descriptions: [
        "Major Modules:",
        "Mathematical Physics and Computer programming, Nuclear and Particle Physics, Theoretical solid state Physics, Applied Crystallography and Biophysics, Crystal growth and Imperfections in Solid and Thin-film Physics ",
      ],
      website_link: "https://www.spuvvn.edu/",
    },
    {
      title: "Gujarat University",
      subtitle: "B.Sc. in Physics",
      logo_path: "GU.png",
      alt_name: "GU",
      duration: "2013 - 2016",
      descriptions: [
        "Major Modules:",
        "Mathematics ,Mathematical Physics, Classical Physics, Quantum Physics, Solid State Physics, Linear and Non-linear system, Electromagnetism, Electronic circuits, Nanoscience and Nanotechnology, Nuclear Physics ",
      ],
      website_link: "https://www.gujaratuniversity.ac.in/Home",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Electronics Foundations: Semiconductor Devices",
      subtitle: "- Barron Stone",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/bdf34c221115ed7ef81346dbf98f31656400585d0b1bb85f6c9bd758b293da2a?trk=share_certificate",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Microservices Foundations",
      subtitle: "- Frank P Moley III",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/5881d63f2d572156cd8f258bdc48d78edadb2722d15f8c2ec4d28ba596465b76?trk=share_certificate",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Erasmus+",
      subtitle: "- ",
      logo_path: "google_logo.png",
      certificate_link:
        "",
      alt_name: "",
      color_code: "#0C9D5899",
    },
    {
      title: "Erasmus+",
      subtitle: "- ",
      logo_path: "ibm_logo.png",
      certificate_link:
        "",
      alt_name: "",
      color_code: "#1F70C199",
    },
    {
      title: "",
      subtitle: "- ",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "",
      alt_name: "",
      color_code: "#D83B0199",
    },
    {
      title: "",
      subtitle: "- ",
      logo_path: "ibm_logo.png",
      certificate_link:
        "",
      alt_name: "",
      color_code: "#1F70C199",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "Student and Research Assistant",
          company: "Professorship of Chemical Technology, Chemnitz University of Technology",
          company_url: "https://www.tu-chemnitz.de/index.html.en",
          logo_path: "TUC.png",
          duration: "Dec 2021 - Dec 2023",
          location: "Chemniyz, Germany",
          description:
            "• Synthesis of TiO2 nanoparticles • Characterization with different methods like Thermogravimetric analysis (TGA), PXRD for the structural analysis, UV/Vis for Spectrophotometric determination, DLS for Size distribution profile, IR Spectroscopy for the determination of functional groups, Data analysis and Graphing • EndNote for citation of different research literatures • Updating the database ",
          color: "#000000",
        },
        {
          title: "Assistant X-ray Technician",
          company: "Shree Muktajivan Imagine Centre, Ahmedabad ",
          company_url: "",
          logo_path: "X-ray.png",
          duration: "April 2018 - Dec 2020",
          location: "Ahmedabad, Gujarat, India",
          description:
            "• X-rays of a patient’s body • Responsible person for X-Ray instruments (lead shield) • Developing radiographs and maintaining records",
          color: "#0879bf",
        },
        
      ],
    },
    {
      title: "Research Project or not",
      experiences: [
        
      ],
    },
    {
      title: "Voluntary Work",
      experiences: [
        {
          title: "Indian Cultural Centre Chemitnz",
          company: "ICC Chemnitz",
          company_url: "https://iccchemnitz.com/?fbclid=PAZXh0bgNhZW0CMTEAAaa4dv7r3sxuRFo6yaAgeHnuooJMP4cvn9JT0HyIiKULm3qEHohltYwjG64_aem_4ZC26b8FRnpDR2pCIEt6xg",
          logo_path: "ICC.png",
          duration: "Sep 2022 - Present",
          location: "Chemnitz, Germany",
          description:
            "Actively engaged in the Indian Cultural Center Chemnitz (ICC Chemnitz), as a core committee member. Contribution in strategic planning, organizing events, decorations, demonstrating a fervent commitment to making a positive impact of Indian Culture ",
          color: "#4285F4",
        },
        {
          title: "Erasmus+ project",
          company: "",
          company_url: "",
          logo_path: "Erasmus.png",
          duration: "",
          location: "",
          description:
            "",
          color: "#D83B01",
        },
        {
          title: "Erasmus+ project",
          company: "",
          company_url: "",
          logo_path: "Erasmus.png",
          duration: "",
          location: "",
          description:
            "",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Research Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Contact Me.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    
  },
  addressSection: {
    title: "Address",
    subtitle: "09126 Chemnitz, Germany",
    location_map_link: "https://maps.app.goo.gl/NyY3LJUDGP62q7vy9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+49 1522 9743 699",
  },
  emailSection: {
    title: "Email",
    email: "yogeshrupeliya@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
