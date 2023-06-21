"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className='sticky left-0 top-0 z-20 flex h-screen flex-col items-center'
      style={{ backgroundColor: "hsl(0, 0%, 3%)" }}
    >
      <span
        className='my-[1.8rem] flex h-[45px] w-[45px] shrink-0 cursor-pointer items-center justify-center rounded bg-primary-light text-md font-extrabold'
        onClick={() => {
          document.location.hash === ""
            ? document.getElementById("main")?.scrollIntoView()
            : (document.location.hash = "");
        }}
      >
        O<span className='text-brand'>.</span>
      </span>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        href='#about'
        onClick={(e) => {
          setSelected("about");
        }}
        className={
          selected === "about"
            ? "flex h-[100px] w-full shrink-0 items-center justify-center border-r border-brand bg-primary-light text-sm font-extralight opacity-100 writing-vertical-lr"
            : "flex h-[100px] w-full shrink-0 items-center justify-center border-r border-transparent text-sm font-extralight opacity-50 transition-colors duration-100 writing-vertical-lr hover:border-brand hover:bg-primary-light hover:opacity-100"
        }
      >
        About
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        href='#projects'
        onClick={(e) => {
          setSelected("projects");
        }}
        className={
          selected === "projects"
            ? "flex h-[100px] w-full shrink-0 items-center justify-center border-r border-brand bg-primary-light text-sm font-extralight opacity-100 writing-vertical-lr"
            : "flex h-[100px] w-full shrink-0 items-center justify-center border-r border-transparent text-sm font-extralight opacity-50 transition-colors duration-100 writing-vertical-lr hover:border-brand hover:bg-primary-light hover:opacity-100"
        }
      >
        Projects
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        href='#experience'
        onClick={(e) => {
          setSelected("experience");
        }}
        className={
          selected === "experience"
            ? "flex h-[100px] w-full shrink-0 items-center justify-center border-r border-brand bg-primary-light text-sm font-extralight opacity-100 writing-vertical-lr"
            : "flex h-[100px] w-full shrink-0 items-center justify-center border-r border-transparent text-sm font-extralight opacity-50 transition-colors duration-100 writing-vertical-lr hover:border-brand hover:bg-primary-light hover:opacity-100"
        }
      >
        Exp.
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        href='#contact'
        onClick={(e) => {
          setSelected("contact");
        }}
        className={
          selected === "contact"
            ? "flex h-[100px] w-full shrink-0 items-center justify-center border-r border-brand bg-primary-light text-sm font-extralight opacity-100 writing-vertical-lr"
            : "flex h-[100px] w-full shrink-0 items-center justify-center border-r border-transparent text-sm font-extralight opacity-50 transition-colors duration-100 writing-vertical-lr hover:border-brand hover:bg-primary-light hover:opacity-100"
        }
      >
        Contact
      </motion.a>
    </motion.nav>
  );
};

export default Navbar;
