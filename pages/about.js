import { motion, useScroll } from "framer-motion"
import { SiAdobexd, SiAdobeillustrator, SiAdobeindesign, SiAdobephotoshop, SiFigma, SiSketch, SiInvision, SiTrello, SiNotion, SiMiro } from 'react-icons/si'

const scroll = "scroll down for more".split(/(?!$)/u)


const variants = {
    hidden: { opacity: 0, transition: {duration: 0.8} },
    shown: { opacity: 1, transition: {duration: 0.8} }
}

export default function About() {
  return (
    <div id="about">
        <div className="opening-wrap">
            <motion.div className="intro-wrap" variants={variants} initial="hidden" animate="shown">
                <div className="circle">
                    {scroll.map((letter, i) => {
                        return(
                            <span key={i} style={{transform:`rotate(${i * (360/22)}deg)`}}>{letter}</span>
                        )
                    })}
                </div>
                <div className="image-wrap">
                    <img src="/assets/about/me.jpeg"/>
                    <div className="caption">
                    Busan, South Korea (2022)
                    </div>
                </div>
                <div className="text-wrap">
                <span className="about-me">about</span>
                <h1>I'm Amanda, a designer and developer studying at MIT. I love creating products that are user-first, and thrive off innovation
                    and collaboration.
                </h1>
            
                </div>
            </motion.div>
        </div>
        <motion.div className="section" >
            <motion.p variants={variants} initial="hidden" whileInView="shown">
                I'm in my third year at MIT studying computer science and cognitive science, with a minor in design and concentration in Korean. 
                I’m currently designing and developing a web application for historians with 
                <a href="https://cmsw.mit.edu/profile/kurt-fendt/" target="_blank">Prof. Kurt Fendt</a>. This January, I’m also working 
                with the <a href="https://usnwc.edu/college-of-maritime-operational-warfare/Humanitarian-Response-Program#:~:text=We%20partner%20with%20leading%20universities,committed%20to%20improving%20humanitarian%20response." target="_blank">USNWC’s Humanitarian Response department</a> 
                to reimagine their archive for educational materials. 
            </motion.p>
            <motion.p variants={variants} initial="hidden" whileInView="shown">
                This past summer, I wrapped up an internship with <a href="https://www.hyundai.com/worldwide/ko/" target="_blank">Hyundai Motors</a>, where I worked 
                in Seoul, South Korea on interactive web design and development. I’ve also done work with the <a href="https://www.media.mit.edu/groups/personal-robots/overview/">MIT Media Lab</a> and Wells Fargo, as well as led the 
                development team at <a href="http://hackmit.org/">HackMIT</a>.</motion.p>
            <motion.p variants={variants} initial="hidden" whileInView="shown">When I’m not designing or coding, I’m a team captain for <a href="http://mitmocktrial.weebly.com/">MIT Mock Trial</a> and a programming tutor. I love travelling, learning new languages, and photography.</motion.p>
        </motion.div>
        <div className="section skills">
            {[
                {
                    title: "Development", 
                    content: <>React.js, Next.js, Node.js, Express.js, Flask, React Native<br/>
                PostgreSQL, MongoDB, Firebase, Heroku, AWS, Git<br/>
                HTML/CSS/Javascript, SASS/SCSS, Bootstrap, Material, AntDesign</>
                },
                {
                    title: "UI & UX",
                    content: "User research, interviewing, journey mapping, personas, wireframing, prototyping, usability testing, interaction design"
                },
                {
                    title: "Software",
                    content: <div className="software-wrap">
                        <div className="icon-wrap"><SiFigma/>Figma</div> <div className="icon-wrap"><SiAdobexd/>Adobe XD</div> <div className="icon-wrap"><SiSketch/>Sketch</div>
                        <div className="icon-wrap"><SiAdobeillustrator/>Adobe Illustrator</div> <div className="icon-wrap"><SiAdobephotoshop/>Adobe Photoshop</div> 
                        <div className="icon-wrap"><SiAdobeindesign/>Adobe InDesign</div>
                        <div className="icon-wrap"><SiMiro/>Miro</div> <div className="icon-wrap"><SiInvision/>InVision</div> 
                        <div className="icon-wrap"><SiNotion/>Notion</div>
                        <div className="icon-wrap"><SiTrello/>Trello</div>
                    
                    </div>,
                },
                {
                    title: "Languages",
                    content: <div className="language-wrap">
                        English
                        <div className="language-bar-wrap"><div className="language-bar" style={{width:'100%'}}/></div>
                         Korean
                        <div className="language-bar-wrap"><div className="language-bar" style={{width:'65%'}}/></div>
                    </div>
                }
            ].map(({title, content}, i) => {
                return(
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