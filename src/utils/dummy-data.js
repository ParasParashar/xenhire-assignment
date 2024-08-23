import { RxAvatar } from "react-icons/rx";
import {
  FaBook,
  FaPeopleArrows,
  FaThumbsUp,
  FaUserCheck,
} from "react-icons/fa";
import { PiNotepadFill } from "react-icons/pi";
import { PiCalendarDotsBold } from "react-icons/pi";
import { VscReferences } from "react-icons/vsc";
import { CiCircleCheck } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";

export const problems = [
  {
    icons: PiNotepadFill,
    description: "How to get my resume noticed by employers?",
  },
  {
    description: "How do I practice my interview-giving skills",
    icons: FaPeopleArrows,
  },
  {
    description: "How do I crack HR interveiw rounds?",
    icons: RxAvatar,
  },

  {
    description: "How should I plan my interview preparation?",
    icons: PiCalendarDotsBold,
  },
  {
    description: "How do I know if I am ready for an interview?",
    icons: CiCircleCheck,
  },
  {
    description: "How can I get referrals & job opportunities",
    icons: VscReferences,
  },
];

export const howItWorks = [
  {
    icons: FaBook,
    title: "Book a program as per your use case",
    description:
      "Select from complete interveiw preparation programs or one-off sessions to get started",
  },
  {
    icons: FaUserCheck,
    title: "We assign a perfect mentor for you",
    description:
      "Get a handpicked mentor based on your experience,goals and target companies",
  },
  {
    icons: FaThumbsUp,
    title: "Crack your interview with 1:1 expert guidance",
    description:
      "Select real outcomes with 1:1 mentorship at every stage of your interview preparation journey",
  },
];

export const mentorHelp = [
  {
    title: "1:1 Interview Prep",
    description: "Prepare with a mentor from your target companies",
    services: [
      {
        name: "Software Developer",
        icon: MdArrowOutward,
      },
      {
        name: "Data Scientist/Analyst",
        icon: MdArrowOutward,
      },
      {
        name: "DevOps/SRE",
        icon: MdArrowOutward,
      },
    ],
  },
  {
    title: "1:1 Mock Interviews",
    description:
      "Practice and improve your interview skills with top interviewers",
    services: [
      {
        name: "Technical Mock Interviews",
        icon: MdArrowOutward,
      },
      {
        name: "HR/Behavioural Mock Interviews",
        icon: MdArrowOutward,
      },
    ],
  },
  {
    title: "1:1 Consultations",
    description:
      "Clear all your doubts with a mentorfrom your target companies",
    services: [
      {
        name: "Resume Analysis",
        icon: MdArrowOutward,
      },
      {
        name: "Plan your interview Preparation",
        icon: MdArrowOutward,
      },
    ],
  },
];
