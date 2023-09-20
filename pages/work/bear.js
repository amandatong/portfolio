import CaseStudy from '../../components/CaseStudy'

const facts = [
    {title: 'Duration', info: 'Jun - Aug 2023 (3 months)'},
    {title: 'Team', info: 'App/UI Front-end Team'},
    {title: 'Tools', info: 'Figma, Typescript, Next.js, React Query, Storybook'},
    {title: 'Company', info: 'Bear Robotics'},
    {title: 'Location', info: 'Seoul, South Korea'}
]

const content = []

const opening = {
    title: 'Bear Robotics Internal Tool',
    subtitle: "A web tool for robotics engineers to efficiently test a robot's interactions with an elevator",
    stack: ['UI/UX Design', 'Front-end', 'Web', 'Industry'],
    // image_one: <img className="left" src="/assets/hyundai/h_laptop2.png"/>,
    // image_two: <img src="/assets/hyundai/h_laptop.png"/>,
    brief: <><p>
        As a software engineering intern at Bear Robotics, I worked on the front-end team that helped design tools and touchscreen UI for their latest robot, Servi Lift.
        Servi Lift is a robot that can navigate elevators and the robotics engineers at the office frequently test how the robot can interact with the elevators of different buildings.
        I designed a new, intuitive UI and developed the front-end that interacted with a Flask REST API so that engineers could see updates in real time. I worked with Servi Lift engineers for user feedback.
    </p>
    <p>Due to NDA restrictions, I cannot share the exact features, but I am happy to discuss my UI/UX process in more detail. You can <a href="mailto:amanda.g.tong@gmail.com">email me</a> if you'd like more details on the design and my exact solutions!</p>
    </>,
    // full_image: "/assets/progress_thumbnail.png"
}

export default function Bear() {
    
    return(
        <CaseStudy id="bear" facts={facts} content={content} opening={opening}/>
    )
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
      // Will be passed to the page component as props
    },
  }
}