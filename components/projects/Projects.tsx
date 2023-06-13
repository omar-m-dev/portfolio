'use client'

import { projects } from '@/constants'
import ProjectCard from './ProjectCard'
import SectionHeader from '../utils/SectionHeader'

const Projects = () => {
  return (
    <section id="projects" className="section-wrapper">
      <SectionHeader title="Projects" dir="r" />
      <div className="grid grid-cols-1 gap-[3.2rem] md:grid-cols-2">
        {projects.map((v, i) => (
          <ProjectCard key={i} {...v} />
        ))}
      </div>
    </section>
  )
}

export default Projects
