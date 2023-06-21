"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import Reavel from "./Reveal";
import styles from "./ProjectCard.module.scss";
import ProjectModal from "./ProjectModal";

interface Props {
  title: string;
  tech: string[];
  desc: string;
  img: string;
  live: string;
  github: string;
  modalContent: string;
}

const ProjectCard = ({
  title,
  tech,
  desc,
  img,
  live,
  github,
  modalContent,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.75 }}
      >
        <div
          className='group relative aspect-video w-full cursor-pointer overflow-hidden rounded-[0.8rem] bg-primary-light'
          onClick={() => setOpen(true)}
        >
          <Image
            src={img}
            alt={title}
            width={500}
            height={100}
            className='absolute bottom-0 left-1/2 h-full w-[90%] -translate-x-1/2 translate-y-[20%] rotate-0 rounded-[0.4rem] transition-transform duration-[250ms] group-hover:rotate-2'
          />
        </div>
        <div className='my-[1.6rem]'>
          <Reavel width='100%'>
            <div className='flex items-center gap-[1.2rem]'>
              <h4 className='max-w- shrink-0 text-md font-bold'>{title}</h4>
              <div className='h-[1px] w-full bg-typography opacity-30' />
              <Link
                href={github}
                target='_blank'
                rel='nofollow'
                className='opacity-75 transition-all duration-[250ms] hover:text-brand hover:opacity-100'
              >
                <FaGithub fontSize={28} />
              </Link>
              <Link
                href={live}
                target='_blank'
                rel='nofollow'
                className='opacity-75 transition-all duration-[250ms] hover:text-brand hover:opacity-100'
              >
                <FaLink fontSize={28} />
              </Link>
            </div>
          </Reavel>
          <Reavel width='100%'>
            <div className='my-[0.8rem] text-xs text-brand'>
              {tech.map((v, i) =>
                i !== tech.length - 1 ? `${v}\u2000\u2014\u2000` : `${v}`
              )}
            </div>
          </Reavel>
          <Reavel width='100%'>
            <p className='text-[18px] font-extralight'>
              {desc} <br />
              <span
                onClick={() => setOpen(true)}
                className='mt-[2.5rem] inline-flex cursor-pointer items-center gap-[0.1rem] text-xs font-normal text-brand hover:underline'
              >
                Learn more
                <span>
                  <MdKeyboardArrowRight />
                </span>
              </span>
            </p>
          </Reavel>
        </div>
      </motion.div>
      <ProjectModal
        title={title}
        tech={tech}
        desc={desc}
        img={img}
        live={live}
        github={github}
        modalContent={modalContent}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default ProjectCard;
