import ProfilePic from "../../assets/my_imageLarge.png";

const aboutSectionData = [
  {
    text: "More information will come soon. Learn more by clicking the button below.",
    imgsrc:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "work interests",
    count: 2,
    title: "Work Interests",
    knowMore: true,
    knowMoreRoute: "/experience",
    id: "Work-Interests",
  },
  {
    text: "I like to play basketball in my free time. I like to play basketball in my free time. More information will come soon.",
    imgsrc:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    alt: "basketball",
    count: 3,
    title: "Sports",
    knowMore: false,
    knowMoreLink: "",
    id: "Sports",
  },
  {
    text: "I like to go and explore new places. So far I've been to India, Hong Kong, Macau, Egypt and Canada. ",
    imgsrc:
      "https://images.unsplash.com/photo-1483356256511-b48749959172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "explore",
    count: 4,
    title: "Exploration",
    knowMore: false,
    knowMoreLink: "",
    id: "Exploration",
  },
  {
    text: "My interests are in Physics, data science, AI/ML. I have to edit this section so we can leave it for tomorrow.",
    imgsrc: ProfilePic,
    alt: "work interests",
    count: 1,
    title: "Who am I?",
    knowMore: true,
    knowMoreRoute: "/about",
    id: "Introduction",
  },
];

export default aboutSectionData;
