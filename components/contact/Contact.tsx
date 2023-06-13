'use client'

import Link from 'next/link'
import { AiFillMail } from 'react-icons/ai'
import Reavel from '../utils/Reveal'
import { socials } from '@/constants'

const Contact = () => {
  return (
    <section id="contact" className="section-wrapper">
      <div className="m-auto max-w-[700px] rounded-[1.2rem]">
        <Reavel width="100%">
          <h4 className="text-center text-xl font-black leading-[1] md:text-2xl">
            Contact<span className="text-brand">.</span>
          </h4>
        </Reavel>
        <Reavel width="100%">
          <p className="my-[2.4rem] text-center text-[18px] font-extralight">
            Have an idea to discuss? Shoot me an email if you want to connect!
            You can also find me on{' '}
            <Link
              href={socials.linkedIn}
              target="_blank"
              className="text-brand hover:underline"
            >
              Linkedin
            </Link>{' '}
            or{' '}
            <Link
              href={socials.twitter}
              target="_blank"
              className="text-brand hover:underline"
            >
              Twitter
            </Link>{' '}
            if that&apos;s more your speed.
          </p>
        </Reavel>
        <Reavel width="100%">
          <Link href={`mailto:${socials.email}`}>
            <div className="m-auto flex w-fit items-center justify-center gap-[0.8rem] rounded-2xl bg-primary-light px-[3.2rem] py-[1.2rem] transition-colors duration-500 hover:text-brand">
              <AiFillMail fontSize={24} />
              <span className="text-md">Send Email</span>
            </div>
          </Link>
        </Reavel>
      </div>
    </section>
  )
}

export default Contact
