import CaseStudy from '../../components/CaseStudy'

const facts = [
    {title: 'Duration', info: 'Jan - Aug 2021 (8 months)'},
    {title: 'Team', info: 'Personal Robots Group'},
    {title: 'Tools', info: 'React.js, Flask, Firebase'},
    {title: 'Company', info: 'MIT Media Lab'},
    {title: 'Location', info: 'Remote'}
]

const content = []

const opening = {
    title: 'Student Progress Dashboard',
    subtitle: 'A web app for teachers and parents who need to view progress on students\' literacy skills',
    stack: ['UI/UX Design', 'Front-end', 'Web', 'Research'],
    // image_one: <img className="left" src="/assets/hyundai/h_laptop2.png"/>,
    // image_two: <img src="/assets/hyundai/h_laptop.png"/>,
    brief: <><p>
    I was an undergraduate researcher at the MIT Media Lab, aiding the Personal Robots Group with updating the design of their web dashboard. 
    The web dashboard was not only for other researchers to view data, but also for teachers and parents to track progress as the student learned
    more literacy skills. I refreshed designs, coded new features, and incorporated user feedback to enhance the overall user experience.
    </p>
    <p>I am not sure if I can share the project publicly, but you can <a href="mailto:amanda.g.tong@gmail.com">email me</a> if you'd like more details on the design and my exact solutions!</p>
    </>,
    full_image: "/assets/progress_thumbnail.png"
}

export default function Progress() {
    
    return(
        <CaseStudy id="progress" facts={facts} content={content} opening={opening}/>
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