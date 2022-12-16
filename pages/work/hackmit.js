import CaseStudy from '../../components/CaseStudy'

const facts = [
    {title: 'Duration', info: 'Sep - Oct 2022 (3 weeks)'},
    {title: 'Team', info: 'Development Team'},
    {title: 'Tools', info: 'HTML, SCSS/SASS, Vanilla JS'},
    {title: 'Company', info: 'HackMIT'},
    {title: 'Location', info: 'Cambridge, MA'}
]

const content = []

const opening = {
    title: 'HackMIT Event Guide',
    subtitle: 'A website for hackathon participants to view schedules, challenges, prizes, and more',
    stack: ['Experience Design', 'Front-end', 'Web', 'Research'],
    // image_one: <img className="left" src="/assets/hyundai/h_laptop2.png"/>,
    // image_two: <img src="/assets/hyundai/h_laptop.png"/>,
    brief: <><p>
    I was the head of the Development Team for HackMIT 2022, where I was a project manager and lead developer on HackMIT&#34;s event guide, DayOf.
    </p>
    <p>I oversaw the execution of turning mockups into web development, and polished the site with user experience enhancements such as responsiveness, info pop-ups on the Schedule page, a "Jump To" button on the Challenges page, and more.</p>
    <p>You can view the site at <a href="http://dayof.hackmit.org/" target="_blank" rel="noreferrer">dayof.hackmit.org</a></p>
    </>,
    full_image: "/assets/hackmit_thumbnail.png"
}

export default function Progress() {
    
    return(
        <CaseStudy id="hackmit" facts={facts} content={content} opening={opening}/>
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