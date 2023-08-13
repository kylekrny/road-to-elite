import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '../../public/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Kyle</title>
        <meta
          name="description"
          content="I’m Kyle. I write clean code, read economics book and obsess over pixels."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-8">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl w-3/4">
              I’m Kyle. I write clean code, read economics book and obsess over
              pixels.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I am a front end engineer with 3+ years of experience. I have
                worked in a wide array of team environments, tech stacks and
                application types. From leading the web marketing effort at a
                multi billion dollar conglomerate, to wearing all the hats at
                small start-ups.
              </p>
              <p>
                I spent two and a half years growing at Lead Sherpa. I spent the
                time perfecting my craft with React and learning the ins and out
                of managing a product and more importantly building a team. My
                role shifted from from frontend engineer, to lead engineer,
                ending with technical product owner. While I do enjoy the
                business aspect of the product role, solving problems and
                working along side my fellow engineer truly brings me great joy.
              </p>
              <p>
                Minimalism and simplicity are key values in every aspect of my
                life, especially development. Clean, readable code and quality
                test coverage are the fundamental attributes to a quality
                application. I primarily code in Javascript and Ruby, but have
                experience with a few other languages.
              </p>
              <p>
                When I am not working you can find me, cooking, learning or
                training for my first triathlon. I am a life long learner, AFOL
                and personal finance nerd, You can checkout my current
                projects on my GitHub. If you have a question, looking for
                a dev, or a friend feel free to reach out.
              </p>
            </div>
        </div>
      </Container>
    </>
  )
}
