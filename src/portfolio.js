/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "DataLioness",
  title: "Heya, I'm Damy",
  subTitle: emoji(
    "I'm a Tech Designer / Gameplay Programmer studying at Breda University of Applied Sciences! 🚀"
  ),
  resumeLink: "", // Set to empty to hide the button
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
  subTitle: "IM A GAMEPLAY PROGRAMMER STUDYING TECHNICAL DESIGN AT BUASoki v",
  skills: [
    emoji(
      "⚡ Have been creating gameplay experiences for over 10 years now. I started with ㅤㅤㅤ modding games back in 2014."
    ),
    emoji(
      "⚡ I'm always looking for opportunities to learn and grow as a game developer"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "Git",
    //   fontAwesomeClassname: "fab fa-git"
    // },
    // {
    //   skillName: "Perforce",
    //   fontAwesomeClassname: "fa fa-code-branch"
    // },
    // {
    //   skillName: "C++",
    //   fontAwesomeClassname: "fa fa-code"
    // },
    // {
    //   skillName: "OpenGL",
    //   fontAwesomeClassname: "fa fa-cube"
    // },
    // {
    //   skillName: "Unreal Engine 5",
    //   fontAwesomeClassname: "fa fa-gamepad"
    // },
    // {
    //   skillName: "Technical Game Design",
    //   fontAwesomeClassname: "fa fa-star"
    // }
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
      desc: "Currently studying at BUas to become a Gameplay Programmer in the AAA Industry.",
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
      desc: "Here I learned the basics of programming and mainly building websites.",
      descBullets: [
        "HTML, CSS, JavaScript, PHP, SQL, C#, Java",
        "Laravel, Vue.JS, React",
        "Git, Github",
        "Scrum, Agile"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
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
  projects: [
    {
      images: [
        require("./assets/images/Ortus_Thumbnail.png"),
        require("./assets/images/ORTUS_GameplayOne.png"),
        require("./assets/images/ORTUS_GameplayTwo.png")
      ],
      projectName: "ORTUS",
      projectDesc:
        "First year project at BUas, a Twin-stick shooter game made in Unreal Engine 5.4.",
      footerLink: [
        {
          name: "Go to Itch page",
          url: "https://buas.itch.io/team-cumin"
        },
        {
          name: "See Trailer",
          url: "https://www.youtube.com/watch?v=AKISXZogN5w"
        }
      ],
      tags: [
        {name: "Unreal Engine 5"},
        {name: "Blueprinting"},
        {name: "Gameplay Programming"},
        {name: "Graphics Programming"},
        {name: "Best Year 1 Tech | BUas | 2024"}
      ]
    },
    {
      images: [
        require("./assets/images/ArmadilloMayhem2.png"),
        require("./assets/images/ArmadilloMayhem1.png")
      ],
      projectName: "Armadillo Mayhem",
      projectDesc:
        "As my first project at BUas as a Technical Designer in Year 2 from switching from Programming to the Design & Production course that aligns more with my gameplay programming goals. You are an armadillo shooting up enemies. Roll and dash into enemies to damage them bounce around to turn into a boosted version and defeat everything on your path.",
      footerLink: [
        {
          name: "Go to Itch page",
          url: "https://datalioness.itch.io/armadillo-mayhem"
        },
        {
          name: "See Trailer",
          url: "https://youtu.be/xTdDhn9c2bg"
        }
      ],
      tags: [
        {name: "Unreal Engine 5"},
        {name: "Blueprinting"},
        {name: "Technical Design"}
      ]
    },
    {
      images: [
        require("./assets/images/ViewfinderCamera.jpg"),
        require("./assets/images/ViewfinderPhoto.jpg"),
        require("./assets/images/ViewfinderBridge.jpg")
      ],
      projectName: "Viewfinder Feature Recreation",
      projectDesc:
        "As my second project at BUas as a Technical Designer, I recreated the core mechanic of Viewfinder in Unreal Engine 5. This mechanic lets players take pictures and place/blend them into the world.\n" +
        "\n" +
        "To showcase the functionality and creative potential of this mechanic, I designed a demo level that demonstrates its potential.",
      tags: [
        {name: "Unreal Engine 5"},
        {name: "Blueprinting"},
        {name: "C++"},
        {name: "Technical Design"},
        {name: "Gameplay Programming"}
      ],
      footerLink: [
        {
          name: "View pipeline videos",
          url: "https://www.youtube.com/playlist?list=PLHxTDmjUToZ28CHMKOgWRPcggfd53Dw_p"
        },
        {
          name: "View Showcase Video",
          url: "https://www.youtube.com/watch?v=PcrpUXnaqrA"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const jamProjects = {
  title: "Game Jam Projects",
  subtitle: "Projects I've made for Game Jams I attended.",
  projects: [
    {
      images: [require("./assets/images/WolFish_Thumbnail.png")],
      projectName: "WolFish",
      projectDesc:
        "Play as a fish that transcends dimensions and transform into a wolf. Made in 3 days for the CMGT Game Jam #3 2023. For this project I was resposible for all of the programming inside of the game.",
      footerLink: [
        {
          name: "Go to Itch page",
          url: "https://spel16.itch.io/wolfish"
        }
      ],
      tags: [
        {name: "Unreal Engine 5"},
        {name: "Blueprinting"},
        {name: "Gameplay Programming"},
        {name: "CMGT Game Jam 2024 #1"}
      ]
    },
    {
      images: [
        require("./assets/images/DisconnectedThumbnail.png"),
        require("./assets/images/Disconnected_GameplayOne.png"),
        require("./assets/images/Disconnected_GameplayTwo.png")
      ],
      projectName: "Disconnected...",
      projectDesc:
        "Step into the boots of a resourceful robot navigating a mysterious space station in Disconnected... Created for the  Kenney Jam 2024 in 48 hours, this game challenges you to traverse levels by connecting with cameras throughout the station. Each camera offers a unique perspective, altering how you view the world around you.",
      footerLink: [
        {
          name: "Go to Itch page",
          url: "https://datalioness.itch.io/disconnected"
        }
      ],
      tags: [
        {name: "Unreal Engine 5"},
        {name: "Blueprinting"},
        {name: "Gameplay Programming"},
        {name: "Technical Design"},
        {name: "Level Design"},
        {name: "Solo Project"},
        {name: "Kenney Game Jam 2024"}
      ]
    },
    {
      images: [
        require("./assets/images/DriftedAwayLogo.png"),
        require("./assets/images/DriftedAwayGameplay.png"),
        require("./assets/images/DriftedAwayGameplay2.png")
      ],
      projectName: "Drifted Away",
      projectDesc:
        "Drifted away is a side scrolling game where you play as a cloud and have to push a raft across the ocean. Be careful though! There are many obstacles you have to avoid when guiding the raft around. Blow stuff away, destroy them with your lightning bolts! Made in 3 days for the CMGT Game Jam 2024. For this project I was responsible for Tech Design and Gameplay programming.",
      footerLink: [
        {
          name: "Go to Itch page",
          url: "https://mrsxythe.itch.io/cmgt-gameham-2024"
        }
      ],
      tags: [
        {name: "Unreal Engine 5"},
        {name: "Blueprinting"},
        {name: "Technical Design"},
        {name: "Gameplay Programming"},
        {name: "CMGT Game Jam 2025 #1"}
      ]
    },
    {
      images: [
        require("./assets/images/SoakedInSinLogo.png"),
        require("./assets/images/SoakedInSinGameplayOne.png"),
        require("./assets/images/SoakedInSinGameplayTwo.png"),
        require("./assets/images/SoakedInSinGameplayThree.png")
      ],
      projectName: "Soaked in Sin",
      projectDesc:
        "Soaked in Sin is an anthology of three games set in the imagination of a 6-year-old taking a bath. The first game being a collection of micro games, players make the biggest bubble, try to keep a bubble from popping, race a bubble through the bath, and trying to dodge lego bricks. In the second game, players use different bubble bullets in a first-person shooter, and in the third game, they clean up the mess before Mom gets back. I worked as a Gameplay Programmer on this project. This project was made for Global Game Jam 2025 in 48 hours with a group of 12 people.",
      tags: [
        {name: "Unreal Engine 5"},
        {name: "Blueprinting"},
        {name: "Gameplay Programming"},
        {name: "Global Game Jam 2025"}
      ],
      footerLink: [
        {
          name: "Go to Itch page",
          url: "https://datalioness.itch.io/soaked-in-sin"
        },
        {
          name: "See Trailer",
          url: "https://youtu.be/GNtSb0M_6_w"
        }
      ]
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    }
  ],
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
  jamProjects
};
