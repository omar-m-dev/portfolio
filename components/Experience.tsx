"use client";

import SectionHeader from "./SectionHeader";
import ExpCard from "./ExpCard";
import { exp } from "@/constants";

const Experience = () => {
  return (
    <section id='experience' className='section-wrapper'>
      <SectionHeader title='Experience' dir='l' />
      {exp.map((v, i) => (
        <ExpCard key={i} {...v} />
      ))}
    </section>
  );
};

export default Experience;
