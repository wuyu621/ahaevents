import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import service1Img from "./assets/service1.png";
import service2Img from "./assets/service2.png";
import service3Img from "./assets/service3.png";
import service4Img from "./assets/service4.png";
import service1bImg from "./assets/service1b.png";
import service1cImg from "./assets/service1c.png";
import service1dImg from "./assets/service1d.png";

export const links = [
  {
    url: "/",
    title: "home",
  },

  {
    url: "/about",
    title: "about",
  },

  {
    url: "/contact",
    title: "contact",
  },
];

export const service = [
  {
    title: "Balloon Bouquet",
    img: service1Img,
    url: "balloonBouquet",
    info: "Choose from our selection of 10 stunning balloon arrangements, each expertly crafted and fully customizable to match your chosen your theme, color scheme, and size preferences. Prices start at $88. ",
    servicesImg: [
      { img: service1bImg },
      { img: service1cImg },
      { img: service1dImg },
    ],
  },
  {
    title: "Backdrop Setup",
    img: service2Img,
    url: "backdropSetup",
    info: "Explore our personalized background design, setup, and dismantling services, meticulously crafted to align with your preferences. Balloons elegantly complement background panels, and a variety of props are available for rent. Prices start at $380. ",
  },
  {
    title: "Balloon Sets",
    img: service3Img,
    url: "balloonSets",
    info: "Tailoring to your preferences, we offer a wide range of balloon arrangements in various themes and colors. Enjoy free delivery for orders above $500 in the Seattle area.",
  },
  {
    title: "Balloon Art",
    img: service4Img,
    url: "balloonArt",
    info: "I am Athena. A professional balloon artist fluent in both Chinese and English, beloved by children far and wide! Based in Seattle, I offer balloon art services for all occasions. Don't hesitate to reach out. My rate is $120 per hour, with a minimum booking of two hours.",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
];
