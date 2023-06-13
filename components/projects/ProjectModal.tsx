import { Dispatch, SetStateAction, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './ProjectModal.module.scss'
import Link from 'next/link'
import { FaGithub, FaLink } from 'react-icons/fa'

interface Props {
  title: string
  tech: string[]
  desc: string
  img: string
  live: string
  github: string
  modalContent: string
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const ProjectModal = ({
  title,
  tech,
  desc,
  img,
  live,
  github,
  modalContent,
  open,
  setOpen,
}: Props) => {
  useEffect(() => {
    const body = document.querySelector('body')

    if (open) {
      body!.style.overflowY = 'hidden'
    } else {
      body!.style.overflowY = 'scroll'
    }
  }, [open])

  if (!open) return null

  const modal = (
    <div
      id="modal"
      className="fixed inset-0 z-50 flex h-screen cursor-pointer justify-center overflow-y-scroll bg-opaque px-[1.2rem] py-[4.8rem] backdrop-blur-md"
      onClick={() => setOpen(false)}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={e => e.stopPropagation()}
        className="h-fit w-full max-w-[700px] cursor-auto overflow-hidden rounded-[1.2rem] bg-primary-light shadow-modal-shadow"
      >
        <Image
          priority
          src={img}
          alt={title}
          width={500}
          height={400}
          className="h-[400px] w-full"
        />
        <div className="p-[2.4rem]">
          <h4 className="text-lg font-bold">{title}</h4>
          <div className="mb-[2.4rem] mt-[0.2rem] text-xs text-brand">
            {tech.map((v, i) =>
              i !== tech.length - 1 ? `${v}\u2000\u2014\u2000` : `${v}`
            )}
          </div>
          <div className="flex flex-col gap-[1.2rem] text-xs">
            {modalContent.split('[br]').map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </div>
          <div className="mt-[2.4rem]">
            <p className="mb-[0.8rem] text-md font-bold">
              App Links<span className="text-brand">.</span>
            </p>
            <div className="flex items-center gap-[1.6rem]">
              <Link
                target="_blank"
                rel="nofollow"
                href={github}
                className="flex items-center gap-[0.8rem] text-xs text-brand hover:underline"
              >
                <FaGithub /> Source Code
              </Link>
              <Link
                target="_blank"
                rel="nofollow"
                href={live}
                className="flex items-center gap-[0.8rem] text-xs text-brand hover:underline"
              >
                <FaLink /> Live on Vercel
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )

  // @ts-ignore
  return createPortal(modal, document.querySelector('body'))
}

export default ProjectModal
