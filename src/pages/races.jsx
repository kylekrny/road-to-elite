import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'


const projects = [
  {
    name: 'Las Vegas Triathlon 2023',
    location: 'Las Vegas, Nevada',
    distance: 'Olympic',
    time: 'TBD',
    place: 'TBD',
  },
  {
    name: 'Boulder Sunset 2023',
    location: 'Boulder, Colorado',
    distance: 'Olympic',
    time: 'TBD',
    place: 'TBD',
  },
  {
    name: 'Spudman 2023',
    location: 'Burley, Idaho',
    distance: 'Olympic',
    time: '2:48:08',
    place: '526 out of 1775',
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Races - RTE</title>
        <meta
          name="description"
          content="The building blocks that have made my career."
        />
      </Head>
      <SimpleLayout
        title="The steps along the journey."
        intro="The races I have entered, the times I have achieved and the places I finished."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card
              as="li"
              key={project.name}
              className="rounded-xl px-8 py-8 shadow-lg"
            >
              <h2 className=" text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {project.name}
              </h2>
              <p className="text-xs">{project.location}</p>
              <Card.Description>
                <ul>
                  <li>
                    <p>
                      <b>Distance:</b> {project.distance}
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Time:</b> {project.time}
                    </p>
                  </li>
                  <li>
                    <p><b>Place:</b> {project.place}</p>
                  </li>
                </ul>
              </Card.Description>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
