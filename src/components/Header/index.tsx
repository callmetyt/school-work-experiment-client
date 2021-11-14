import { useState } from "react";
import "./index.scss";

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navList = ["主页", "职位", "产品与服务", "校园招聘"];

  return (
    <div className="header">
      <div className="logo">
        <svg
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3204"
          width="32"
          height="32"
        >
          <path
            d="M752 96c-103.9 0-194.2 58.3-240 143.9C466.2 154.3 375.9 96 272 96 121.8 96 0 217.8 0 368c0 336 512 592 512 592s512-256 512-592c0-150.2-121.8-272-272-272zM64 368c0-55.6 21.6-107.8 60.9-147.1S216.4 160 272 160c76.9 0 147.2 42.2 183.6 110.1L512 375.6l56.4-105.5C604.8 202.2 675.1 160 752 160c55.6 0 107.8 21.6 147.1 60.9S960 312.4 960 368c0 10.6-0.6 21.2-1.9 32H750.4l-92.6 145.5-78.5-141.3-153.4 214.9L295.1 243l-89.7 157H65.9c-1.3-10.8-1.9-21.4-1.9-32z m877.9 99.9c-11.4 32-28.3 64.8-50.3 97.7-38.7 57.8-93.4 116.2-162.6 173.7-86 71.5-173.3 123.7-217 148.1-43.7-24.4-131-76.6-217-148.1-69.1-57.5-123.8-115.9-162.6-173.7-22-32.9-39-65.7-50.3-97.7-0.5-1.3-0.9-2.6-1.4-3.9h161.8l38.3-67L406 757l166.5-233.1L654 670.6 785.6 464h157.7c-0.5 1.3-0.9 2.6-1.4 3.9z"
            p-id="3205"
            fill="#ffffff"
          ></path>
        </svg>
        <div className="tle">
          <div className="line1">HeartDance</div>
          <div className="line2">心脏跳动</div>
        </div>
        <div className="text">招聘</div>
      </div>

      <ul className="nav">
        {navList.map((item, index) => {
          return (
            <li
              className={activeIndex === index ? "active" : ""}
              onClick={() => {
                setActiveIndex(index);
              }}
              key={index}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Header;
