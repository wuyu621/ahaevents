import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import service1Img from "./assets/service1.png";
import service2Img from "./assets/service2.png";
import service3Img from "./assets/service3.png";
import service4Img from "./assets/service4.png";

export const links = [
  {
    url: "/",
    text: "home",
  },
  { url: "/service", text: "service" },
  {
    url: "/about",
    text: "about",
  },

  {
    url: "/contact",
    text: "contact",
  },
];

export const service = [
  {
    text: "Balloon Bouquet",
    img: service1Img,
    info: "Choose from our selection of 10 stunning balloon arrangements, each expertly crafted and fully customizable to match your chosen your theme, color scheme, and size preferences. Prices start at $88. ",
  },
  {
    text: "Backdrop Setup",
    img: service2Img,
    info: "Explore our personalized background design, setup, and dismantling services, meticulously crafted to align with your preferences. Balloons elegantly complement background panels, and a variety of props are available for rent. Prices start at $380. ",
  },
  {
    text: "Balloon Sets",
    img: service3Img,
    info: "Tailoring to your preferences, we offer a wide range of balloon arrangements in various themes and colors. Enjoy free delivery for orders above $500 in the Seattle area.",
  },
  {
    text: "Balloon Art",
    img: service4Img,
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
