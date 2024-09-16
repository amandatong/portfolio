import Link from 'next/link'
export const WORK_LIST = [
    {
        id: 'hyundai',
        title: 'Smart Factory Microsite',
        company: 'Hyundai Motor Group',
        stack: ['UI/UX Design', 'Front-end', 'Web', 'Industry']
    },
    {
        id: 'tam',
        title: 'TAM: Take A Minute',
        company: 'MIT Human-Centered Design',
        stack: ['UX Research', 'UI/UX Design', 'Wireframing', 'Mobile']
    },
    {
        id: 'progress',
        title: 'Progress Dashboard',
        company: 'MIT Media Lab',
        stack: ['UI/UX Design', 'Front-end', 'Web', 'Research']
    },
    {
        id: 'hackmit',
        title: 'HackMIT Event Guide',
        company: 'HackMIT 2022',
        stack: ['Experience Design', 'Front-end', 'Web']
    },
]

const COMPANY_PROJECTS = [
    {
        id: 'boeing',
        title: 'Interactive Gantt Chart Tool',
        company: 'Boeing Korea',
        stack: ['Front-end', 'Web', 'Industry']
    },
    {
        id: 'bear',
        title: 'Bear Robotics Internal Tool',
        company: 'Bear Robotics',
        stack: ['UI/UX Design', 'Front-end', 'Web', 'Industry']
    },
]

export default function Work() {
    return (
        <div id="work">
            <h1>Featured Work</h1>
            {WORK_LIST.map(({ id, title, company, stack, url }, i) => {
                return (
                    <Link href={`/work/${id}`} key={i} className="linkable">
                        <div className="project-wrap">
                            <img src={`/assets/${id}_thumbnail.png`} />
                            <div className="project-desc">
                                <div className="desc-wrap">
                                    <div className="work-title">{title}</div>
                                    <div className="company">{company}</div>
                                    <div className="skill-wrap">
                                        {stack && stack.map((skill, i) => {
                                            return (
                                                <div key={i} className="skill">{skill}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })}
            <h1>Internships</h1>
            {COMPANY_PROJECTS.map(({ id, title, company, stack }, i) => {

                return (
                    <a key={i}>
                        <div className="project-wrap">
                            <img src={`/assets/${id}_thumbnail.png`} />
                            <div className="project-desc">
                                <div className="desc-wrap">
                                    <div className="work-title">{title}</div>
                                    <div className="company">{company}</div>
                                    <div className="skill-wrap">
                                        {stack && stack.map((skill, i) => {
                                            return (
                                                <div key={i} className="skill">{skill}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                )
            })}
        </div>
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