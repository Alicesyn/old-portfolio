import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaPaperclip
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Quynh-Anh Vu. All Rights Reserved.`,
  author: {
    name: "Quynh-Anh Vu",
    accounts: [
      {
        url: "https://github.com/Alicesyn",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://linkedin.com/in/quynhanh-vu",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:quynhanhtvu@gmail.com",
        label: "Gmail",
        type: "red",
        icon: <FiMail />
      },
      {
        url: "static/Quynh-Anh_Vu_Resume.pdf",
        label: "Resume",
        type: "orange",
        icon: <FaPaperclip />
      }
    ]
  }
};

export default siteConfig;
