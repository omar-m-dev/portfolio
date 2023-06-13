'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles/Navbar.module.scss'
import Link from 'next/link'

const Navbar = () => {
  const [selected, setSelected] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('.section-wrapper')

    const options = {
      threshold: 0.3,
    }

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)

    sections.forEach(section => observer.observe(section))
  }, [])

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.navBar}
      style={{ backgroundColor: 'hsl(0, 0%, 3%)' }}
    >
      <span
        className={styles.logo}
        onClick={() => {
          document.location.hash === ''
            ? document.getElementById('main')?.scrollIntoView()
            : (document.location.hash = '')
        }}
      >
        O<span>.</span>
      </span>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        href="#about"
        onClick={e => {
          setSelected('about')
        }}
        className={selected === 'about' ? styles.selected : ''}
      >
        About
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        href="#projects"
        onClick={e => {
          setSelected('projects')
        }}
        className={selected === 'projects' ? styles.selected : ''}
      >
        Projects
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        href="#experience"
        onClick={e => {
          setSelected('experience')
        }}
        className={selected === 'experience' ? styles.selected : ''}
      >
        Exp.
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        href="#contact"
        onClick={e => {
          setSelected('contact')
        }}
        className={selected === 'contact' ? styles.selected : ''}
      >
        Contact
      </motion.a>
    </motion.nav>
  )
}

export default Navbar
