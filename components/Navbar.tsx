import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#fff");
        setTextColor("#000");
      } else {
        setColor("transparent");
        setTextColor("#fff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] flex justify-start items-center p-4 text-white">
        <div className="w-[10%] h-[10%] sm:w-[5%] sm:h-[5%] mr-4">
          <Image
            src="/logo.png"
            alt="/"
            layout="responsive"
            width="20"
            height="20"
          />
        </div>
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            Xer<span style={{ color: "#ff0000" }}>berus</span>.io
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
