'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter, FaCodepen } from 'react-icons/fa'
import { socials } from '@/constants'
import styles from '@/styles/Header.module.scss'

const Header = () => {
  return (
    <header className="sticky top-0 z-20 flex h-[81px] items-center justify-between bg-opaque px-[2.4rem] text-md font-bold backdrop-blur-md md:px-[3.6rem]">
      <div className="social-container pt-[10px]">
        <motion.span
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <Link href={socials.linkedIn} target="_blank" rel="nofollow">
            <FaLinkedin fontSize={24} className="social-link" />
          </Link>
        </motion.span>
        <motion.span
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href={socials.github} target="_blank" rel="nofollow">
            <FaGithub fontSize={24} className="social-link" />
          </Link>
        </motion.span>
        <motion.span
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href={socials.twitter} target="_blank" rel="nofollow">
            <FaTwitter fontSize={24} className="social-link" />
          </Link>
        </motion.span>
        <motion.span
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href={socials.codePen} target="_blank" rel="nofollow">
            <FaCodepen fontSize={24} className="social-link" />
          </Link>
        </motion.span>
      </div>
      <button
        type="button"
        className={styles.headerButton}
        onClick={() => window.open('/Omar Mohamed.pdf')}
      >
        My resume
      </button>
    </header>
  )
}

export default Header
