/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Damy",
  title: "Heya, I'm Damy",
  subTitle: emoji(
    "I'm a <b>Test</b> studying at Breda University of Applied Sciences! 🚀"
  ),
  resumeLink: "Resume Button", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/damyodk/",
  itchio: "https://datalioness.itch.io/",
  blsky: "https://bsky.app/profile/datalioness.itch.io",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About me in short",
  subTitle:
    "I'M A TECHNICAL DESIGNER WITH A BACKGROUND IN GAMEPLAY PROGRAMMING",
  skills: [
    emoji(
      "⚡ I have been creating gameplay experiences for over 10 years now. I started with modding games back in 2014."
    ),
    emoji(
      "⚡ I'm always looking for opportunities to learn and grow as a game developer."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Unreal Engine 5 <br>C++ & Blueprinting",
      fontAwesomeClassname: "fa fa-gamepad",
      image: require("./assets/images/UnrealEngineLogo.png")
    },
    {
      skillName: "Git<br>ᅠ",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Perforce<br>ᅠ",
      fontAwesomeClassname: "fa fa-code-branch"
    },
    {
      skillName: "Steamworks<br>ᅠ",
      fontAwesomeClassname: "fa-brands fa-steam"
    },
    {
      skillName: "OpenGL<br>ᅠ",
      fontAwesomeClassname: "fa fa-cube"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Breda University of Applied Sciences",
      logo: require("./assets/images/BUas_Logo.jpg"),
      subHeader: "Bachelor Degree - Creative Media & Game Technologies",
      duration: "September 2023 - Now",
      desc: "I am currently studying at BUas to become a Gameplay Programmer in the AAA Industry.",
      descBullets: [
        "C++, Blueprinting",
        "Game Design principles",
        "OpenGL, Unreal Engine 5",
        "Perforce",
        "Scrum, Agile"
      ]
    },
    {
      schoolName: "ROC Nijmegen",
      logo: require("./assets/images/logo-roc-nijmegen.png"),
      subHeader: "MBO - Software Development",
      duration: "September 2018 - 🎓 July 2022",
      desc: "Here, I learned the basics of programming and mainly building websites.",
      descBullets: [
        "HTML, CSS, JavaScript, PHP, SQL, C#, Java",
        "Laravel, Vue.JS, React",
        "Git, GitHub",
        "Scrum, Agile"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Unreal Engine",
      progressPercentage: "75%"
    },
    {
      Stack: "C++",
      progressPercentage: "60%"
    },
    {
      Stack: "Perforce",
      progressPercentage: "90%"
    },
    {
      Stack: "Git",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "School Projects",
  subtitle: "The projects I've worked on at school.",
  projects: [],
  display: false // Set false to hide this section, defaults to true
};

const jamProjects = {
  title: "Projects",
  subtitle:
    "Projects I've worked on in teams or solo, for school, game jams or just for fun.",
  projects: [
    {
      images: [
        require("./assets/images/ViewfinderShowcase.webp"),
        require("./assets/images/ViewfinderCameraBridgePicture.png"),
        require("./assets/images/ViewfinderPhoto.jpg"),
        require("./assets/images/ViewfinderBridge.jpg")
      ],
      projectName: "Viewfinder Feature Recreation",
      projectDesc:
        "Recreation of Viewfinder's photo to world mechanic in Unreal Engine 5, where 2D pictures become traversable 3D environments.",
      contributions: [
        "Implemented photo placement mechanic",
        "Created pipeline for setting up the photo to world system",
        "Designed showcase level demonstrating puzzle possibilities.",
        "Developed tools for designers to easily create new puzzles."
      ],
      tags: [
        {name: "Team Size: Solo"},
        {name: "Unreal Engine 5"},
        {name: "Blueprinting & C++"},
        {name: "Technical Design"},
        {name: "Gameplay Programming"},
        {name: "BUas Y2 Project"}
      ],
      footerLink: [
        {
          name: "Read more",
          url: "https://portfolio-blogs-one.vercel.app/viewfinder",
          openInNewTab: false
        }
      ]
    },
    {
      images: [
        require("./assets/images/SoakedInSinGameplayTwo.png"),
        require("./assets/images/SoakedInSinLogo.png"),
        require("./assets/images/SoakedInSinGameplayOne.png"),
        require("./assets/images/SoakedInSinGameplayThree.png")
      ],
      projectName: "Soaked in Sin",
      projectDesc:
        "A three-part anthology game created for Global Game Jam 2025.",
      contributions: [
        "Contributed to post jam improvements and bug fixes for successful Steam release.",
        "Programmed core mechanics across all three minigames.",
        "Maintained a rapidly growing codebase with 13 people building content simultaneously during a 48-hour timespan."
      ],
      tags: [
        {name: "Team Size: 13"},
        {name: "Unreal Engine 5"},
        {name: "Gameplay Programming"},
        {name: "Global Game Jam 2025"}
      ],
      footerLink: [
        {
          name: "Read more",
          url: "https://portfolio-blogs-one.vercel.app/soaked-in-sin",
          openInNewTab: false
        }
      ]
    },
    {
      images: [
        require("./assets/images/sunny3.png"),
        require("./assets/images/ThumbOne.png"),
        require("./assets/images/ThumbThree.png"),
        require("./assets/images/ThumbFour.png"),
        require("./assets/images/sunbeat-city-1080.png")
      ],
      projectName: "Sunbeat City",
      projectDesc:
        "A first-person parkour game set in a solarpunk-themed city.",
      contributions: [
        "Implemented parkour traversal mechanics.",
        "Developed core gameplay systems and interactions.",
        "Collaborated across disciplines to deliver a polished vertical slice.",
        "Maintained and optimized codebase for performance and scalability."
      ],
      tags: [
        {name: "Team Size: 21"},
        {name: "Unreal Engine 5"},
        {name: "Gameplay Programming"},
        {name: "BUas Y2 Project"}
      ],
      footerLink: [
        {
          name: "Read more",
          url: "https://portfolio-blogs-one.vercel.app/sunbeatcity",
          openInNewTab: false
        }
      ]
    },
    {
      images: [
        require("./assets/images/ORTUS_GameplayOne.png"),
        require("./assets/images/Ortus_Thumbnail.png"),
        require("./assets/images/ORTUS_GameplayTwo.png")
      ],
      projectName: "ORTUS",
      projectDesc: "A twin-stick shooter made during first year at BUas.",
      contributions: [
        "Implemented gameplay features.",
        "Built designer friendly tools for creating gameplay.",
        "Worked on systems to enhance the player experience."
      ],
      tags: [
        {name: "Team Size: 12"},
        {name: "Unreal Engine 5"},
        {name: "Gameplay Programming"},
        {name: "Graphics Programming"},
        {name: "BUas Y1 Project"},
        {name: "Best Year 1 Tech | BUas | 2024"}
      ],
      footerLink: [
        {
          name: "Read more",
          url: "https://portfolio-blogs-one.vercel.app/ortus",
          openInNewTab: false
        }
      ]
    },
    {
      images: [
        require("./assets/images/DisconnectedShowcase.webp"),
        require("./assets/images/Disconnected_GameplayOne.png"),
        require("./assets/images/DisconnectedThumbnail.png"),
        require("./assets/images/Disconnected_GameplayTwo.png")
      ],
      projectName: "Disconnected...",
      projectDesc: "A solo project made for Kenney Jam 2024.",
      contributions: [
        "Designed and programmed camera-switching mechanic.",
        "Built all gameplay and systems solo in 48 hours.",
        "Created level design to highlight perspective based gameplay."
      ],
      tags: [
        {name: "Team Size: Solo"},
        {name: "Unreal Engine 5"},
        {name: "Gameplay Programming"},
        {name: "Technical Design"},
        {name: "Level Design"},
        {name: "Kenney Game Jam 2024"}
      ],
      footerLink: [
        {
          name: "Go to Itch page",
          url: "https://datalioness.itch.io/disconnected"
        }
      ]
    },
    {
      images: [
        require("./assets/images/DriftedAwayGameplay.png"),
        require("./assets/images/DriftedAwayLogo.png"),
        require("./assets/images/DriftedAwayGameplay2.png")
      ],
      projectName: "Drifted Away",
      projectDesc:
        "A side-scrolling game where players control a cloud to guide a raft.",
      contributions: [
        "Implemented wind mechanic for player movement.",
        "Collaborated in a small jam team to deliver within 3 days."
      ],
      tags: [
        {name: "Team Size: 5"},
        {name: "Unreal Engine 5"},
        {name: "Technical Design"},
        {name: "Gameplay Programming"},
        {name: "CMGT Game Jam 2024 #1"}
      ],
      footerLink: [
        {
          name: "Go to Itch page",
          url: "https://mrsxythe.itch.io/cmgt-gameham-2024",
          openInNewTab: true
        }
      ]
    },
    {
      images: [
        require("./assets/images/ArmadilloMayhem1.png"),
        require("./assets/images/ArmadilloMayhem2.png")
      ],
      projectName: "Armadillo Mayhem",
      projectDesc:
        "A twin-stick shooter solo project featuring an armadillo protagonist.",
      contributions: [
        "Designed and implemented core combat systems.",
        "Implemented unique roll and dash mechanics."
      ],
      tags: [
        {name: "Team Size: Solo"},
        {name: "Unreal Engine 5"},
        {name: "Technical Design"},
        {name: "BUas Y2 Project"}
      ],
      footerLink: [
        {
          name: "See Trailer",
          url: "https://youtu.be/xTdDhn9c2bg",
          openInNewTab: true
        }
      ]
    },
    {
      images: [
        require("./assets/images/BussinessCard_V4.png"),
        require("./assets/images/PrototypeShowcase.png")
      ],
      projectName: "Damy's Sandbox",
      projectDesc: "A personal Unreal project to experiment with prototypes.",
      contributions: [
        "Multiple prototypes exploring gameplay mechanics just for the fun of it!",
        "Focused on rapid iteration and experimentation."
      ],
      tags: [
        {name: "Team Size: Solo"},
        {name: "Unreal Engine 5"},
        {name: "Prototyping"},
        {name: "Gameplay Programming"},
        {name: "Technical Design"}
      ],
      footerLink: [
        {
          name: "Read the blog",
          url: "https://portfolio-blogs-one.vercel.app/damy-sandbox",
          openInNewTab: false
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const recommendations = {
  quotes: [
    {
      name: "Lasse Meerburg",
      linkedin: "https://www.linkedin.com/in/lasse-meerburg-8530b225b",
      profilePicture: require("./assets/images/LasseMeerburg.jpeg"),
      role: "Producer (Sunbeat City, Soaked in Sin & ORTUS)",
      text: "Damy is hard working and selfmotivating, as long as she has a challenge in front of her she will figure it out with remarkable speed. <br>She's able to work well with others like when having to work close with designers to create specific features. Her overall optimistic attitude makes her approachable when you need help with technical issues. <br>Overall a delight to work with."
    },
    {
      name: "Jeroen Vermeulen",
      linkedin: "https://www.linkedin.com/in/jeroen-vermeulen-59994a317",
      role: "Environment Artist (Sunbeat City)",
      profilePicture: require("./assets/images/JeroenVermeulen.jpeg"),
      text: "Always really helpfull, and really nice to talk to.<br>Knows what she's talking about and doesn't shy away for an extra challenge"
    },
    {
      name: "Adrian Kowalik",
      linkedin: "https://www.linkedin.com/in/adrian-kowalik",
      profilePicture: require("./assets/images/AdrianKowalik.jpeg"),
      role: "UI/UX Designer (Sunbeat City, Soaked in Sin & ORTUS)",
      text: "I have worked with Damy on multiple projects over the course of 3 years. She's a really nice person to work with and incredibly motivated. She always tackles complex tasks head on, quickly delivering clean, maintainable code. During the creation of Sunbeat City she created many tools that allowed us to create new features. I'd work with her again when possible."
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "You can contact me via email!",
  email_address: "d.opdkamp@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "datalioness_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  jamProjects,
  recommendations
};
