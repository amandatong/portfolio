import {BsEye, BsJoystick, BsGithub, BsWindow} from 'react-icons/bs'
import { FaFigma } from 'react-icons/fa'
import CaseStudy from '../../components/CaseStudy'

const links = [
    {
        title: 'Figma File',
        icon: <FaFigma/>,
        url: 'https://www.figma.com/file/O5HZecaM3NK8uYq1KRXaCw/Smart-Factory-Website-Design?node-id=39%3A378&t=uRlnDKFR80mcIQRH-1'
    },
    {
        title: 'Live Prototype',
        icon: <BsWindow/>,
        url: 'http://hmgicstech.vercel.app'
    },
    {
        title: 'Github',
        icon: <BsGithub/>,
        url: 'https://github.com/amandatong/exploretech'
    },
    
]

const facts = [
    {title: 'Duration', info: 'Jun - Aug 2022 (9 weeks)'},
    {title: 'Team', info: 'S Innovation Progress Team'},
    {title: 'Tools', info: 'Figma, React.js, Next.js, SASS/SCSS, Framer Motion'},
    {title: 'Company', info: 'Hyundai Motor Co.'},
    {title: 'Location', info: 'Seoul, South Korea'}
]

const content = [
    {
        subtitle: 'Context',
        title: 'Where did this all start?',
        body: <><p>The Hyundai Motor Group Innovation Center in Singapore (HMGICS) is Hyundai Motor Group’s upcoming smart factory and 
        innovation lab, focusing on leveraging up-and-coming technology and promising near-automation and customization of 
        the car manufacturing process. </p>
    
    <p>I worked on the S Innovation Progress team at Hyundai Motors, which is responsible for the strategy and research behind HMGICS. 
        When I was asked to propose my own independent project for the team, 
        I decided to tackle an area the team wasn’t focusing on: UI/UX and the customer-facing experience. </p>
    <p>In compliance with my NDA, research details and the process deck have been omitted.</p></>
    },
    {
        subtitle: 'Problem',
        title: 'Smart factories can be ambiguous',
        body: <><div className="content-wrap">
            <div>
            <p>The original HMGICS website was informative of the high-level vision Hyundai had for the 
                smart factory: promoting new technology, valuing customers, and collaborating. However, 
                terms quickly become confusing as they detail the use of artificial intelligence and digital 
                twin technology. </p>
                <p>To the average customer, 
                how much do those words really mean, and how do you know that these methods are any good? </p>
            </div>
            <div className="image-wrap">
                <img src="/assets/hyundai/h_ss.png" className="image"/>
                <span className="caption">Excerpt from the <a href="https://www.hyundai.com/sg/hmgics/about-us/vision-mission" target="_blank">HMGICS website</a></span>
            </div>
        </div>
            
            <div className="hmw">How might we assure customers that an HMGICS-made product was manufactured with care?</div>

        <div className="columns-wrap">
            <div className="goals">
                <h3>Goals</h3>
                <ul>
                    <li>Design a way to inform customers what these technologies are, and what they mean to a smart factory</li>
                    <li>Create a fun and engaging experience so doing research on the process does not feel like a chore</li>
                </ul>
            </div>
            <div className="impact">
                <h3>Impact</h3>
                <ul>
                    <li>Customers will trust the company more if they understand how their product was manufactured</li>
                    <li>Hyundai continues to promote a “customer-first” attitude while benefiting from more long-term relationships with their customers</li>
                </ul>
            </div>
        </div>    
            
        </>
    },
    {
        subtitle: 'Solution',
        title: 'An interactive microsite',
        body: <><img src="/assets/hyundai.jpg" className="img"/></>
    },
    {
        subtitle: 'Process',
        title: 'How did I approach this?',
        body: <><img src="/assets/hyundai/process.png" className="img"/></>
    },
    {
        subtitle: 'Research',
        title: 'Exploring existing content',
        body: <>
        <h3>Existing Material</h3>
        <p>Before I tackled anything, I read a lot of material on what Hyundai’s vision of a smart factory was, and found that a lot of the technology centered around newer, intangible concepts that were harder to visualize: artificial intelligence, the metaverse, and digital twin technology. Then, I looked for existing content about each topic, and found that the only available information were articles filled with lengthy paragraphs and lots of technical terms.</p>
        <h3>User Interview Insights</h3>
        <p>Next, I talked to a few different users, who were either not familiar with what a smart factory was, or agreed that there needed to be more accessible ways of learning about a smart factory.</p>
        <div className="columns-wrap">
            <div>
                <div align="center"><BsEye/></div>
                <h3>Interest</h3>
                <p>Current solutions to defining a smart factory and their technologies come in lengthy articles that can be difficult to parse or simply boring to sift through.</p>
            </div>
            <div>
                <div align="center"><BsJoystick/></div>
                
                <h3>Engagement</h3>
                <p>The solution should allow the customer to actively learn the material by interacting and visualizing the information, rather than just passively reading.</p>
            </div>
        </div>
        </>
    },
    {
        subtitle: 'Ideation',
        title: 'Brainstorming',
        body: <>
        <p>Although I brainstormed potential AR/XR solutions and mobile applications, 
            I quickly realized I wanted this product to be accessible to as many customers as possible, 
            meaning that it should not be restricted to someone’s phone — and therefore meant building a website. </p>
            <p>However, the website also wasn’t going to be tackling everything that HMGICS had to offer — I still 
            wanted to keep the original site available so people could browse the articles and commerce available there. 
            This meant that I ultimately decided on building a microsite.</p>
            <p>The microsite would be interactive with popups, micro-interactions, and unique animations on each page to engage the user to stay on the site and explore. </p>
            <div className="three-images"><img src="/assets/hyundai/sketch1.jpg"/><img src="/assets/hyundai/sketch2.jpg"/><img src="/assets/hyundai/sketch3.jpg"/></div>
            <span className="caption">Pictures of my brainstorming for content, navigation, and potential interactions.</span>
        </>
    },
    {
        subtitle: 'Site Map',
        title: 'Allowing the users to explore',
        body: <><p>The site is designed to guide a user through progressively more complex and technical topics, but also provides a navigation for flexibility, especially if they are only looking to learn about a specific topic.</p>
        <div className="wide-image"><img src="/assets/hyundai/sitemap.jpg"/></div></>
    },
    // {
    //     subtitle: 'Design',
    //     title: 'Style and interactions',
    //     body: <>
    //         <p>The color palette mainly uses bright cool-toned colors to provide a futuristic and technological feel. 
    //             The fonts are sans-serif for the same reasons, and I chose different fonts for English and Korean 
    //             as I knew I would be localizing the page in both languages. 
    //             Both fonts have different weights, which makes for good use in differentiating lots of content.</p>
    //     </>
    // },
    {
        subtitle: 'Wireframes',
        title: 'Building the skeleton',
        body: <p>I started with wireframes to plan out content structure and begin to iterate where menus and icons should be.</p>,
        after:  <>
        <div className="three-images">
                <img src="/assets/hyundai/wireframes5.png"/>
            <img src="/assets/hyundai/wireframes1.png"/>
            <img src="/assets/hyundai/wireframes2.png"/>
            <img src="/assets/hyundai/wireframes4.png"/>
        </div>
            <div className="three-images" style={{marginTop:0}}>
                <img src="/assets/hyundai/wireframes6.png"/>
                <img src="/assets/hyundai/wireframes7.png"/>
                <img src="/assets/hyundai/wireframes3.png"/>
            </div>
        </>
    },
    {
        subtitle: 'Mockups',
        title: 'Creating the graphics',
        body: <>
            <p>I started with some early sketches, and landed on the idea of using cubes as the motif for the site: the cubes
            gave a modern and sleek edge to the designs that complemented the site's mission.</p>
            <h3>Early animation ideas</h3>
            <div className="three-images four">
                <img src="/assets/hyundai/early1.png"/>
                <img src="/assets/hyundai/early2.png"/>
                <img src="/assets/hyundai/early3.png"/>
                <img src="/assets/hyundai/early4.png"/>
            </div>
            <h3>mockups</h3>
            <p>I decided on using mainly flat and lined graphics to keep a minimalist, futuristic style.</p>
        </>,
        after: 
        <img src="/assets/hyundai/mockups.jpg"/>
    },
    {
        subtitle: 'Prototype',
        title: 'Developing an interactive prototype',
        body: <><p>
            As the mockups were finalized, I was able to implement a live microsite prototype to showcase
            as part of the final presentation!    
        </p>
        <p>The prototype was built using Next.js (React) and SASS/SCSS, 
            with some components borrowed from AntDesign and LordIcons, and animations done with Framer Motion.</p></>,
        after: <><video controls>
        <source src="/assets/hyundai/final.mp4" type="video/mp4"/></video></>
    },
    {
        subtitle: 'Results',
        title: 'Evaluating success',
        body: <><p>
            While the prototype is not officially in production, I would look at how many people would
            visit the site, and for how long. If a user was able to navigate through the entirety of the site,
            then it would indicate engagement and interest, which were the ultimate goals of the project.
        </p>
        <p>Another success metric would be  if it ended up impacting HMGICS' sales via more informed customers.</p></>,
    },
    {
        subtitle: 'Takeaways',
        title: 'Reflecting on the project',
        body: <>
        <p>At the end of the internship, I presented the final live prototype with the rest of the team at Hyundai,
            including the vice president of the Innovation Division.</p>
        <p>Reflecting on the project, I think that many of the ideas for the project were not fully realized due to the timeline. One
            of the features was full mobile responsiveness.
        </p>
        <p>If I were to go back, I would not have tried building a front-end prototype, but rather I would have loved to try and do some more UI designs
            for potential playable sections, for real, interactive learning.
        </p>
        <p>Additionally, due to the timeline, I wasn't able to do more user testing after creating the prototypes.
            If I were to go back to this project or redo it, I would perform more user tests for feedback, especially
            outside my team's feedback that I garnered from meetings.
        </p>
        <h3>Acknowledgements</h3>
        <p>I would like to give many thanks to the whole S Innovation Progress team, who not only trusted me with this independent 
            project proposal, but also were very welcoming. Coming into the Korean workplace as a foreigner was initially intimidating,
            but the team greeted me with nothing but kindness, and made the entire experience rewarding!</p>
            <div className="two-images">
                <img src="/assets/hyundai/team1.jpeg"/>
                <img src="/assets/hyundai/team2.jpeg"/>
            </div>
        </>
    },
]

const opening = {
    title: 'Hyundai\'s Smart Factory Microsite',
    subtitle: 'Educate and build trust with customers via an interactive web experience',
    stack: ['UI/UX Design', 'Front-end', 'Web', 'Industry'],
    image_one: <img className="left" src="/assets/hyundai/h_laptop2.png"/>,
    image_two: <img src="/assets/hyundai/h_laptop.png"/>,
    brief: <p>
    During my internship with Hyundai, I proposed the design of a microsite that would enhance a customer’s experience 
    when researching how a smart factory works. The aim of the digital experience was to create an engaging, interactive 
    resource for customers to learn about some of the more ambiguous technologies surrounding the factory, allowing the 
    company to build trust with their consumers.
    </p>,
    full_image: "/assets/hyundai/hyundai_view.jpg"
}

export default function Hyundai() {
    
    return(
        <CaseStudy id="hyundai" facts={facts} content={content} opening={opening} links={links}/>
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