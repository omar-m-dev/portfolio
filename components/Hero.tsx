"use client";

import Reavel from "./Reveal";
import DotGrid from "./DotGrid";

const Hero = () => {
  return (
    <section className='section-wrapper mb-[9.6rem]'>
      <div className='relative z-10 my-[4.8rem] w-fit max-w-[700px]'>
        <Reavel>
          <h1 className='text-xl font-black leading-[1.1] md:text-2xl'>
            Hi, I<span className='text-brand'>&apos;</span>m Omar
            <span className='text-brand'>.</span>
          </h1>
        </Reavel>
        <Reavel>
          <h2 className='mt-[1.6rem] text-lg font-extralight leading-[1.1]'>
            I&apos;m a{" "}
            <span className='font-bold text-brand'>Full Stack Developer</span>
          </h2>
        </Reavel>
        <Reavel>
          <p className='my-[2.4rem] max-w-[650px] text-[1.8rem] font-extralight'>
            I&apos;ve spent the last year building and scaling applications for
            some pretty cool companies and individuals. I also create
            interesting self projects on my spare time. Let&apos;s connect!
          </p>
        </Reavel>
        <Reavel>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
            className='z-20 overflow-hidden rounded-[0.4rem] bg-brand px-[2.4rem] py-[1.2rem] text-sm text-primary-dark transition-opacity duration-200 hover:opacity-80'
          >
            Contact me
          </button>
        </Reavel>
      </div>
      <DotGrid />
    </section>
  );
};

export default Hero;
