// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Santhosh",
  middleName: "",
  lastName: "Kumar",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/vsksanthu",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/vsk.santhu",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/vsk_santhu/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/santhuvsk/",
    },
    // { 
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/santhoshkumar.jpg"),
  imageSize: 375,
  message:
    "Hey there! I'm Santhosh Kumar, a frontend enthusiast with a knack for crafting beautiful and functional web experiences using Frontend Technologies. With a background in Information and Technology during UG, I've dived headfirst into the world of frontend development and havent looked back since. My passion for coding stems from my love of problem-solving and creativity. I thrive on the challenge of turning ideas into reality and enjoy the satisfaction of seeing my projects come to life. From startups to established companies, I've worked on a range of projects, each presenting its unique set of opportunities and learnings. I believe in maintaining a healthy work-life balance and find that my passions outside of coding often inspire fresh ideas and perspectives in my work. Thanks for stopping by, and I hope you enjoy exploring my portfolio.",
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "vsksanthu", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/santhoshkumar.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/santhoshkumar.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "React JS", value: 90 },
    { name: "JavaScript", value: 75 },
    { name: "HTML/CSS", value: 85 },
    { name: "CSS", value: 65 },
    { name: "PHP", value: 65 },
    { name: "Redux", value: 65 },
    { name: "MySQL", value: 55 },
    { name: "Material UI", value: 80 },
    { name: "CI/CD", value: 55 },
    { name: "Generative AI", value: 50 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "vsk.santhu@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Senior Software Engineer L4',// Here Add Company Name
      companylogo: require('../assets/img/saama.svg'),
      date: 'March 2023 – Present',
    },
    {
      role: 'Senior UI Developer',
      companylogo: require('../assets/img/upskillist.svg'),
      date: 'July 2022 – Feburary 2023',
    },
    {
      role: 'Senior Developer',
      companylogo: require('../assets/img/checksum.png'),
      date: 'Feburary 2016 – June 2022',
    },
    {
      role: 'Associate Software Developer',
      companylogo: require('../assets/img/dell.png'),
      date: 'December 2013 – January 2016',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

//Achievements Section
const achievements = {
  show:true,
  heading:"Experience",
  title:'Best Customer Satisfication Award - 2014',
  companyName: 'Nichehands'
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, achievements };
