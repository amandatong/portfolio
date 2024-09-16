import CaseStudy from '../../components/CaseStudy'

const facts = [
    { title: 'Duration', info: 'Jun - Aug 2024 (3 months)' },
    { title: 'Team', info: 'Future Production Capabilities Team' },
    { title: 'Tools', info: 'Typescript, Angular.js, AG-Grid' },
    { title: 'Company', info: 'Boeing Korea' },
    { title: 'Location', info: 'Seoul, South Korea' }
]

const content = []

const opening = {
    title: 'Interactive Gantt Chart Tool',
    subtitle: "An interactive chart for Boeing employees to efficiently edit and sync manufacturing data",
    stack: ['Front-end', 'Web', 'Industry'],
    brief: <><p>
        As a front-end engineering intern at Boeing, I worked on the Future Production Capabilities (FPC) team that helped design web tools to improve the aerospace manufacturing process.
        My primary task was to create a new, interactive chart similar to a Gantt chart, such that workers could view and edit production data more efficiently, as part of a larger web application project.
        I worked directly with end users, a UI/UX designer, and fellow developers.
    </p>
        <p>Due to NDA restrictions, I cannot share the exact features nor kinds of data, but I am happy to discuss my responsibilities process further.
            You can <a href="mailto:amanda.g.tong@gmail.com">email me</a> if you'd like more details on the design and my exact solutions!</p>
    </>,
}

export default function Boeing() {

    return (
        <CaseStudy id="boeing" facts={facts} content={content} opening={opening} />
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