import { motion, useScroll } from "framer-motion"
import { SiAdobexd, SiAdobeillustrator, SiAdobeindesign, SiAdobephotoshop, SiFigma, SiSketch, SiInvision, SiTrello, SiNotion, SiMiro } from 'react-icons/si'
import { FaJira, FaConfluence } from 'react-icons/fa'

const scroll = "scroll down for more".split(/(?!$)/u)


const variants = {
    hidden: { opacity: 0, transition: { duration: 0.8 } },
    shown: { opacity: 1, transition: { duration: 0.8 } }
}

export default function About() {
    return (
        <div id="about">
            <div className="opening-wrap">
                <motion.div className="intro-wrap" variants={variants} initial="hidden" animate="shown">
                    <div className="circle">
                        {scroll.map((letter, i) => {
                            return (
                                <span key={i} style={{ transform: `rotate(${i * (360 / 22)}deg)` }}>{letter}</span>
                            )
                        })}
                    </div>
                    <div className="image-wrap">
                        <img src="/assets/about/me.jpeg" />
                        <div className="caption">
                            Busan, South Korea (2022)
                        </div>
                    </div>
                    <div className="text-wrap">
                        <span className="about-me">about</span>
                        <h1>I'm Amanda, a designer and developer who recently graduated from MIT. I love creating products that are user-first, and thrive off innovation
                            and collaboration.
                        </h1>

                    </div>
                </motion.div>
            </div>
            <motion.div className="section" >
                <motion.p variants={variants} initial="hidden" whileInView="shown">
                    I graduated from MIT with a bachelor's in computer science and cognitive science, and  a concentration in Korean.
                    Most recently, I finished a 3-month front-end engineering internship with <a href="https://www.boeing.com" target="_blank" rel="noreferrer">Boeing Korea</a>, in Seoul, South Korea,
                    working on web applications to improve aerospace manufacturing.
                </motion.p>
                <motion.p variants={variants} initial="hidden" whileInView="shown">
                    In the past, I've done an internship with <a href="https://www.bearrobotics.ai" target="_blank" rel="noreferrer">Bear Robotics</a> in Seoul, South Korea,
                    where I worked as a front-end engineer for their latest robot, Servi Lift, and its touchscreen.  I've helped research and design a web application for historians with
                    <a href="https://cmsw.mit.edu/profile/kurt-fendt/" target="_blank" rel="noreferrer">Prof. Kurt Fendt</a>.
                    In 2022, I completed a summer internship with <a href="https://www.hyundai.com/worldwide/ko/" target="_blank" rel="noreferrer">Hyundai Motors</a>, where I worked
                    on interactive web design and development at their Seoul HQ. I’ve also done work with the <a href="https://www.media.mit.edu/groups/personal-robots/overview/">MIT Media Lab</a> and Wells Fargo, as well as led the
                    development team at <a href="http://hackmit.org/">HackMIT</a>.</motion.p>
                <motion.p variants={variants} initial="hidden" whileInView="shown">When I’m not designing or coding, I love travelling, learning new languages, and photography.</motion.p>
            </motion.div>
            <div className="section skills">
                {[
                    {
                        title: "Development",
                        content: <>Typescript, React.js, Angular, Next.js, Node.js, Express.js, Flask, React Native<br />
                            PostgreSQL, MongoDB, Firebase, Heroku, AWS, Git, Docker<br />
                            HTML/CSS/Javascript, SASS/SCSS, Bootstrap, Material, AntDesign, MobX, Storybook</>
                    },
                    {
                        title: "UI & UX",
                        content: "User research, interviewing, journey mapping, personas, wireframing, prototyping, usability testing, interaction design"
                    },
                    {
                        title: "Software",
                        content: <div className="software-wrap">
                            <div className="icon-wrap"><SiFigma />Figma</div> <div className="icon-wrap"><SiAdobexd />Adobe XD</div> <div className="icon-wrap"><SiSketch />Sketch</div>
                            <div className="icon-wrap"><SiAdobeillustrator />Adobe Illustrator</div>
                            <div className="icon-wrap"><SiAdobephotoshop />Adobe Photoshop</div>
                            <div className="icon-wrap"><SiAdobeindesign />Adobe InDesign</div>
                            <div className="icon-wrap"><SiMiro />Miro</div> <div className="icon-wrap"><SiInvision />InVision</div>
                            <div className="icon-wrap"><SiTrello />Trello</div>
                            <div className="icon-wrap"><FaJira />Jira</div>

                        </div>,
                    },
                    {
                        title: "Languages",
                        content: <div className="language-wrap">
                            English
                            <div className="language-bar-wrap"><div className="language-bar" style={{ width: '100%' }} /></div>
                            Korean
                            <div className="language-bar-wrap"><div className="language-bar" style={{ width: '75%' }} /></div>
                        </div>
                    }
                ].map(({ title, content }, i) => {
                    return (
                        <motion.div key={i} className="column" variants={variants} initial="hidden" whileInView="shown">
                            <h3>{title}</h3>
                            {content}
                        </motion.div>
                    )
                })}
            </div>
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