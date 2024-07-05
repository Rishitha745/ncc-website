import img1 from "../assets/ncc1.png";
import img3 from "../assets/ncc3.jpg";
import img4 from "../assets/ncc4.jpg";
import img5 from "../assets/ncc5.jpg";
import img6 from "../assets/ncc6.jpg";
import img7 from "../assets/ncc7.jpg";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Council", href: "/teams" },
  { label: "Training", href: "/blog" },
];

export const socialMedia = [
  { icon: BsFacebook, href: "#" },
  { icon: BsInstagram, href: "#" },
  { icon: BsLinkedin, href: "#" },
  { icon: BsTwitter, href: "#" },
];

export const imageCarousel = [img1, img3, img1, img4, img5, img6, img7];

import car1 from "../assets/ncc3.jpg";
import car2 from "../assets/ncc4.jpg";
import car3 from "../assets/ncc5.jpg";
import car4 from "../assets/ncc6.jpg";
import car5 from "../assets/ncc7.jpg";
import {
  BookOpen,
  Crosshair,
  Flag,
  History,
  Music,
  ShieldHalf,
  SquareActivity,
  Menu,
} from "lucide-react";

import { PiShirtFoldedFill } from "react-icons/pi";

export const IMAGES = [
  { url: car1, alt: "Car One" },
  { url: car2, alt: "Car Two" },
  { url: car3, alt: "Car Three" },
  { url: car4, alt: "Car Four" },
  { url: car5, alt: "Car Five" },
];

export const aboutData = [
  {
    name: "About NCC",
    image: Menu,
    content:
      "The  ewfbwekjfndskvnksdfnkdfv  enfguewgpege3 National Cadet Corps (NCC) is a youth development movement. It has enormous potential for nation-building. The NCC provides opportunities to the youth of the country for their all-round development with a sense of Duty, Commitment, Dedication, Discipline, and Moral Values so that they become able leaders and useful citizens. The NCC provides exposure to the cadets in a wide range of activities, with a distinct emphasis on Social Services, Discipline, and Adventure Training.",
  },
  {
    name: "Aim of NCC",
    image: Crosshair,
    content:
      "The NCC aims at developing character, comradeship, discipline, a secular outlook, the spirit of adventure, and ideals of selfless service amongst young citizens. Further, it aims at creating a pool of organized, trained, and motivated youth with leadership qualities in all walks of life, who will serve the Nation regardless of which career they choose.",
  },
  {
    name: "NCC Motto",
    image: SquareActivity,
    content:
      "The motto of NCC is ‘Unity and Discipline’ which was adopted on 23 Dec 1957. In living up to its motto, the NCC strives to be and is one of the greatest cohesive forces of our nation, bringing together the youth hailing from different parts of the country and moulding them into united, secular, and disciplined citizens of the nation.",
  },
  {
    name: "NCC Song",
    image: Music,
    content:
      "The NCC song was adopted in January 1963. The song was written by Sudarshan Faakir and composed by the then Director of Music, Maj. Gen. (Dr.) V. Mani. The following is the English version of the NCC song.",
  },
  {
    name: "NCC Pledge",
    image: BookOpen,
    content:
      "WE THE CADET OF THE NATIONAL CADET CORPS, DO SOLEMNLY PLEDGE THAT WE SHALL ALWAYS UPHOLD THE UNITY OF INDIA. WE RESOLVE TO BE DISCIPLINED AND RESPONSIBLE CITIZEN OF OUR NATION. WE SHALL UNDERTAKE POSITIVE COMMUNITY SERVICE IN THE SPIRIT OF SELFLESSNESS AND CONCERN FOR OUR FELLOW BEINGS.",
  },
  {
    name: "NCC Flag",
    image: Flag,
    content:
      "The NCC flag for various units of NCC was first introduced in 1951. The flag contains the NCC badge in gold in the middle, the letters “NCC” encircled by a wreath of seventeen leaves in gold at the top left-hand corner, and the whole set against a background of deep blue.",
  },
  {
    name: "NCC Uniform",
    image: PiShirtFoldedFill,
    content:
      "The NCC uniform consists of a khaki shirt and khaki trousers for army cadets, light blue shirts and navy blue pants for navy cadets, and sky blue shirts and navy blue pants for air force cadets. The cadets wear their respective service rank insignia on the shoulders.",
  },
  {
    name: "NCC Rank",
    image: ShieldHalf,
    content:
      "The rank of an NCC cadet starts from Cadet and goes up to the Senior Under Officer. The Senior Under Officer is the senior most cadet of the NCC unit of a college. The cadets are given ranks according to their performance and achievements in the NCC.",
  },
  {
    name: "History of NCC",
    image: History,
    content:
      "The NCC in India was formed with the National Cadet Corps Act of 1948. It was raised on 15 July 1948. The origin of NCC can be traced back to the ‘University Corps’, which was created under the Indian Defence Act 1917, with the objective to make up for the shortage of the Army.",
  },
];

export const faqData = [
  {
    type: "B-certificate",
    content:
      "'B' Certificate is awarded to SD/SW Cadets of schools/colleges after the completion of 2 years training course and passing 'B' Cert examination conducted by NCC authorities.",
    questions: [
      {
        question: "Question-1",
        answer: "Answer",
      },
      {
        question: "Question-2",
        answer: "Answer",
      },
      {
        question: "Question-3",
        answer: "Answer",
      },
    ],
  },
  {
    type: "C-certificate",
    content:
      "'C' Certificate is awarded to SD/SW Cadets of colleges after the completion of 3 years training course and passing 'C' Cert examination conducted for it.",
    questions: [
      {
        question: "Question-1",
        answer: "Answer",
      },
      {
        question: "Question-2",
        answer: "Answer",
      },
      {
        question: "Question-3",
        answer: "Answer",
      },
    ],
  },
];

export const eventsData = [
  {
    year: 2024,
    events: [
      {
        title: "Republic Day Parade",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "26th Jan 2024",
        image: img1,
      },
      {
        title: "Rank Ceremony",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "28th Feb 2024",
        image: img1,
      },
      {
        title: "Camp Visit",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "1st-10th June 2024",
        image: img1,
      },
      {
        title: "Independence Day Parade",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "15th Aug 2024",
        image: img1,
      },
    ],
  },
  {
    year: 2023,
    events: [
      {
        title: "Republic Day Parade",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "26th Jan 2023",
        image: img1,
      },
      {
        title: "Rank Ceremony",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "28th Feb 2023",
        image: img1,
      },
      {
        title: "Camp Visit",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "1st-10th June 2023",
        image: img1,
      },
      {
        title: "Independence Day Parade",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "15th Aug 2023",
        image: img1,
      },
    ],
  },
  {
    year: 2022,
    events: [
      {
        title: "Republic Day Parade",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "26th Jan 2022",
        image: img1,
      },
      {
        title: "Rank Ceremony",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "28th Feb 2022",
        image: img1,
      },
      {
        title: "Camp Visit",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "1st-10th June 2022",
        image: img1,
      },
      {
        title: "Independence Day Parade",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "15th Aug 2022",
        image: img1,
      },
    ],
  },
];
