"use client";

import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaCodepen,
  FaArrowRight,
} from "react-icons/fa";
import { AiFillCode, AiFillTool } from "react-icons/ai";
import Reavel from "./Reveal";
import { stack, tools, socials } from "@/constants";
import SectionHeader from "./SectionHeader";
import styles from "@/styles/About.module.scss";

const About = () => {
  return (
    <section id='about' className='section-wrapper'>
      <SectionHeader title='About' dir='l' />
      <div className={styles.aboutGrid}>
        <div>
          <Reavel>
            <p className={`${styles.aboutText} ${styles.letterHighlighter}`}>
              Hello, I&apos;m Omar Mohamed. I&apos;m a self-taught full-stack
              web developer based in Alexandria, Egypt.
            </p>
          </Reavel>
          <Reavel>
            <p className={styles.aboutText}>
              I have a vast array of knowledge in many different front end and
              back end technologies, responsive frameworks, databases and best
              code practices.
            </p>
          </Reavel>
          <Reavel>
            <p className={styles.aboutText}>
              I am capable of turning your desgin ideas into pixel-perfect and
              responsive websites that fascinate users.
            </p>
          </Reavel>
          <Reavel>
            <p className={styles.aboutText}>
              I am also capable of building scalable and secure web servers and
              databases that will exceed your expectations.
            </p>
          </Reavel>
          <Reavel>
            <p className={styles.aboutText}>
              My objective is simply to be the best web developer that I can be
              and to contribute to the technology industry all that I know and
              can do.
            </p>
          </Reavel>
          <Reavel>
            <p className={styles.aboutText}>
              I am dedicated to perfecting my craft by learning from more
              seasoned developers, remaining humble and continuously making
              strides to learn all that I can about development.
            </p>
          </Reavel>
          <Reavel>
            <p className={styles.aboutText}>
              Besides coding, I really enjoy Music, Reading, Coffee and Outdoor
              Walks in Fresh Air.
            </p>
          </Reavel>
          <Reavel>
            <div className='flex items-center gap-[1.6rem]'>
              <div className='flex items-center gap-[0.8rem] text-sm text-brand'>
                <span className='font-medium'>My links</span>
                <FaArrowRight />
              </div>
              <div className='social-container'>
                <span>
                  <Link href={socials.linkedIn} target='_blank'>
                    <FaLinkedin className='social-link' />
                  </Link>
                </span>
                <span>
                  <Link href={socials.github} target='_blank'>
                    <FaGithub className='social-link' />
                  </Link>
                </span>
                <span>
                  <Link href={socials.twitter} target='_blank'>
                    <FaTwitter className='social-link' />
                  </Link>
                </span>
                <span>
                  <Link href={socials.codePen} target='_blank'>
                    <FaCodepen className='social-link' />
                  </Link>
                </span>
              </div>
            </div>
          </Reavel>
        </div>
        <div className='relative'>
          <Reavel>
            <h4 className='mb-[2.4rem] flex items-center text-md font-bold'>
              <AiFillCode className='text-brand' />
              <span className='ml-[0.8rem]'>Tech Stack</span>
            </h4>
            <div className='mb-[4.8rem] flex flex-wrap gap-[1.2rem]'>
              {stack.map((v, i) => (
                <span
                  key={i}
                  className='rounded-full bg-primary-light px-[0.8rem] py-[0.2rem] text-xs'
                >
                  {v}
                </span>
              ))}
            </div>
          </Reavel>
          <Reavel>
            <h4 className='mb-[2.4rem] flex items-center text-md font-bold'>
              <AiFillTool className='text-brand' />
              <span className='ml-[0.8rem]'>Tools & Utils</span>
            </h4>
            <div className='mb-[4.8rem] flex flex-wrap gap-[1.2rem]'>
              {tools.map((v, i) => (
                <span
                  key={i}
                  className='rounded-full bg-primary-light px-[0.8rem] py-[0.2rem] text-xs'
                >
                  {v}
                </span>
              ))}
            </div>
          </Reavel>
        </div>
      </div>
    </section>
  );
};

export default About;
