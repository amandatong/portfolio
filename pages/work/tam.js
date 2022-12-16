import CaseStudy from '../../components/CaseStudy'
import { BsCalendarWeek, BsDiagram3, BsBrightnessAltHigh, BsEasel,
    BsSuitHeart, BsBell, BsPeople, BsEmojiSmile, BsPhone } from 'react-icons/bs'
import { FaFigma } from 'react-icons/fa'
import { motion } from 'framer-motion'
import TamProcess from '../../components/TamProcess'
import Link from 'next/link'

const links = [
    {
        title: 'Figma File',
        icon: <FaFigma/>,
        url: 'https://www.figma.com/file/W1kkyUTXS91yQowi4nZpDM/App-V2?node-id=0%3A1&t=Cl8x6dAHBqRtEc39-1'
    },
    {
        title: 'Figma Prototype',
        icon: <BsPhone/>,
        url: 'http://tiny.cc/tamapp'
    },
    {
        title: 'Process Deck',
        icon: <BsEasel/>,
        url: 'https://docs.google.com/presentation/d/1tf0RLz_cawI4qHJL6s_QtfZmU3IykbH4mwyCxWTZl9Y/edit?usp=sharing'
    },
    
]

const facts = [
    {title: 'Duration', info: 'Sep - Oct 2022 (6 weeks)'},
    {title: 'Team', info: <>Ruofan Li<br/>Christine Tang</>},
    {title: 'Tools', info: 'Miro, Figma'},
    {title: 'Class', info: 'Human-Centered Design'},
    {title: 'Location', info: 'Cambridge, MA'}
]

const opening = {
    title: 'TAM: Take A Minute',
    subtitle: 'A mobile app to remind student-athletes to take care of themselves amidst a busy schedule, with personalized recommendations',
    stack: ['UX Research','UI/UX Design', 'Wireframing', 'Mobile', 'University Project'],
    image_one: <img className="left" src="/assets/tam/tam11.png"/>,
    image_two: <img className="right" src="/assets/tam/tam22.png"/>,
    brief: <><p>
    TAM: Take a Minute is a mobile app idea conceived as part of the 6-week intensive Human-Centered Design class I took with MIT&#34;s Integrated Design &amp; Management department. 
    TAM focuses on alleviating the busy schedules of student-athletes, using AI to find the best gaps in their schedule to remind the user to &quot;take a minute&quot; and practice a chosen 
    self-care method. 
    </p><p>My primary role was facilitating our brainstorming process, refining the UI design, and creating the information architecture.</p></>,
    full_image: "/assets/tam/tamm.jpg"
}

const content = [
    {
        subtitle: 'Context',
        title: 'Where did this idea come from?',
        body: <p>We started with the theme &quot;On the Move&quot; and told to identify our own problem space and user group. As no one in our group were student athletes, 
            we chose to interview the student athletes on campus to discover their unmet needs and pain points.  </p>
    },
    {
        subtitle: 'Problem',
        title: 'Student athletes have normalized undue stress',
        body: <><p>From our interviews, we found that student-athletes frequently struggled with juggling both academics and their sport, resulting in many stressful overlaps. 
            However, despite this stress, while some recognized this struggle, many did not prioritize themselves or self-care as a result. </p>
            <div className="hmw">How might we encourage student athletes to prioritize their wellbeing?</div>
            <h3>unmet needs</h3>
            <div className="columns-wrap" style={{textAlign:'center'}}>
                <div>
                    <BsDiagram3/>
                    <h3>Organization</h3>
                    <p>Stay on top of responsibilities</p>
                </div>
                <div>
                    <BsBrightnessAltHigh/>
                    <h3>Peace</h3>
                    <p>Escape from a busy schedule</p>
                </div>
                <div>
                    <BsCalendarWeek/>
                    <h3>Flexibility</h3>
                    <p>Minimize time conflicts</p>
                </div>
                <div>
                    <BsSuitHeart/>
                    <h3>Self-care</h3>
                    <p>Prioritize well-being</p>
                </div>
            </div>
            </>
    },
    {
        subtitle: 'Solution',
        title: 'Introducing TAM',
        body: <img src="/assets/tam/tam.jpg" className="img"/>
    },
    {
        subtitle: 'Process',
        title: 'Human-centered design',
        body: <>
        <p>We followed MIT IDM&#34;s Human-centered Design Process, while also incorporating Agile design methods to ensure we would have an MVP at the end of the class.</p>
        <div className="process-wrap">
                <TamProcess/>
                {['User Research', 'Research Analysis', 'Concept Generation', 'Digital Prototyping', 'Testing', 'Iteration & Refinement', 'Storytelling'].map((name, i) => {
                    return(
                        <motion.div whileInView={{opacity:1}} initial={{opacity:0}} transition={{delay:(3 + i*0.4)}} key={i} className={`step step${i+1}`}
                        viewport={{ once: true }}>{name}</motion.div>
                    )
                })}
            </div></>
    },
    {
        subtitle: 'Research',
        title: 'Talking with student-athletes',
        body: <>
            <p>We anonymously surveyed MIT students via Google Form, and conducted 15-30 minute individual interviews with both MIT and non-MIT students.</p>
            <h3>Interview demographics</h3>
            <div className="columns-wrap long-cards">
                <div>
                    <div className="num">29</div>
                    <h3>survey respondents</h3>
                </div>
                <div>
                    <div className="num">12</div>
                    <h3>in-depth interviews</h3>
                </div>
                <div>
                    <div className="num">15</div>
                    <h3>sports represented</h3>
                </div>
            </div>
            <br/>
            <h3>Interview results</h3>
            {/* <div className="image-wrap" style={{float:'right', width:'35%'}}><img src="/assets/tam/miro.png" style={{width:'auto',height: '10rem'}}/></div> */}
            <p>We reviewed our results and organized all our notes into a Miro board, finding five common themes
                across both survey answers and interviews: <b>time management, physical health, mental health, community,</b> and <b>priorities</b>.
            </p>
            <img src="/assets/tam/miro.png" className="img"/><br/><br/>
            <h3>Key Quotes</h3>
            <div className="quote">&quot;Exams around the corner, practices... everything jumps on you at one time&quot; <br/><span>- Sophomore, basketball player</span></div>
            <div className="quote">&quot;With homework, work, and soccer, I don't have time... Instead, I just sit on my phone.&quot; <br/><span>- Junior, soccer player</span></div> 
        </>
    },
    {
        subtitle: 'Analysis',
        title: 'What their answers indicate',
        body: <>
        <h3>Insights</h3>
            <p>We discovered that student athletes&#39; primary needs were <b>organization, peace, 
                flexibility, </b> and <b>self-care</b>, and initially brainstormed three How Might We statements:</p>
            <div className="quote long">
            How might we...<br/><br/>
            <li>encourage student athletes to prioritize their wellbeing?</li>
            <li>minimize student athletes' stress?</li>
            <li>help student athletes manage their responsibilities?</li>
            </div>
            <p>We decided to focus on the <b>first one</b>. We wanted to focus on a matter that seemed more urgent. Student athletes commonly
                cited busy, stressful schedules yet were more disinclined to admit a lack of proactivity towards self-care. Common responses 
                were often &quot;I don't have time&quot; or &quot;My sport is my self-care.&quot;</p><p>We hoped to find a solution that could help them find that time to relax in a separate environment that did not simulatenously act as their stressor. </p>
        <h3>Personas</h3>
        <div className="columns-wrap personas">
            <div>
                <div className="num"><img src="/assets/tam/sally.png"/></div>
                <h3>Sally (Primary User)</h3>
                <p><i>Junior, Biology Major, Soccer Player</i></p>
                Cares About...
                <div className="inset">Excelling in her sport, academics, physical therapy job</div> 
                <br/>Needs...
                <div className="inset">Time management, more awareness of self-care strategies</div> 
            </div>
            <div>
                <div className="num"><img src="/assets/tam/charlie.png"/></div>
                <h3>Charlie (Secondary User)</h3>
                <p><i>Freshman, Undecided, Hockey Player</i></p>
                Cares About...
                <div className="inset">Team community, life balance, productivity</div> 
                <br/>Needs...
                <div className="inset">Higher productivity in the off-season, connection outside of sports</div> 
            </div>
        </div>
        {/* <h3>User Journey</h3> */}
        </>
    },
    {
        subtitle: 'Ideation',
        title: 'Finding the right answer',
        body: <><h3>Brainstorming</h3>
                    <p>Reflecting on the personas and overall user research insights, we began to ideate with a focus on self-care solutions for student-athletes. 
                        We charted a How-Why diagram and also facilitated a 10-minute brainstorming session. Based on our ideas, we also
                        did a brief market analysis to see alternative self-care apps already available.</p>
                    <div className="two-images">
                        <img src="/assets/tam/howwhy.png"/>
                        <img src="/assets/tam/ideation.png"/>
                    </div>
                    <div className="caption">Left: How-Why diagram, starting with the prompt &quot;Athletes are stressed.&quot; / Right: Results of brainstorming session and market analysis.</div>
                <h3>Our first approach</h3>
                    <p>We initially settled on wanting to connect teammates and coaches to provide a social, community-based aspect to self-care reminders.</p>
                    <div className="columns-wrap center long-cards">
                        <div><BsEmojiSmile/><h3>Mood and energy level checker</h3></div>
                        <div><BsBell/><h3>Daily reminders for self-care</h3></div>
                        <div><BsPeople/><h3>Communication with coach/team</h3></div>
                    </div>
                    <div className="three-images">
                        <img src="/assets/tam/initialwires1.png"/>
                        <img src="/assets/tam/initialwires2.png"/>
                        <img src="/assets/tam/initialwires3.png"/>
                    </div>
                        <div className="caption">Initial wireframes for login and register flow, mood checker, and team surveys on mental health.</div>
                        <br/>
                    However, after initial user tests, we discovered common concerns:
                    <div className="quote">&quot;How will teams know to use this? What if they don't want to talk to their team or coaches?&quot;</div>
                    <div className="quote">&quot;What if people are too busy to answer all these questions?&quot;</div>
                <h3>Back to the drawing board</h3>
                <p>We realized that we had tried to address too many needs at once. After looking back at our ideation on Miro, 
                    we went back and focused on just one need: <b>daily reminders for self-care</b>.
                </p>
                    <div className="columns-wrap center long-cards">
                        <div style={{opacity:0.2}}><BsEmojiSmile/><h3>Mood and energy level checker</h3></div>
                        <div className="primary"><BsBell/><h3>Daily reminders for self-care</h3></div>
                        <div style={{opacity:0.2}}><BsPeople/><h3>Communication with coach/team</h3></div>
                    </div>
                    <br/>
                    <div className="image-wrap right" style={{width:'15%'}}><img src="/assets/tam/schedule.jpeg"/> <span>Interviewee&#34;s schedule.</span></div>
                <p>With a new goal in mind, we also decided to address the feedback: student-athletes <i>are</i> so busy, that we decided that
                 these reminders should be for <b>short</b> self-care breaks that fit into their schedule.</p>
                 <p>One interviewee had given us a screenshot of their schedule, packed with academics, sports, and a part-time job. We noticed that
                     there were small gaps in their schedule that they could use for those short breaks.</p>
                    <p>We wanted our new solution
                     to be able to find those specific small gaps to send reminders, for when it would be convenient for the user.
                 </p>
                 
            </>
    },
    {
        subtitle: 'User Flow',
        title: 'Guiding a user to take a break',
        body: <><p>
            Based on this new idea, we developed a simplified user flow.
        </p>
        <img src="/assets/tam/userflow.png" className="img"/>
        </>
    },
    {
        subtitle: 'Wireframes',
        title: 'Sketching the idea',
        after: <><div className="three-images">
            <img src="/assets/tam/wireframes3.png"/>
        </div><div className="three-images ">
            <img src="/assets/tam/wireframes1.png"/>
            <img src="/assets/tam/wireframes4.png"/>
        </div></>
    },
    {
        subtitle: 'Mockups',
        title: 'Final design',
        body: <>
        <div className="mockup">
            <div className="example"><img src="/assets/tam/final1.gif"/></div>
            <div className="desc">
                <span className="tag">Organization</span>
                <h3>Get reminders at the right time</h3>
                
                <ul><li>Sync your calendar with the app, only getting
                    reminders when you have a break in your schedule.
                    </li></ul>
            </div>
        </div>
        <div className="mockup">
            <div className="example"><img src="/assets/tam/final2.gif"/></div>
            <div className="desc">
                <span className="tag">Flexibility</span>
                <h3>Choose when you get reminders</h3>
                <ul>
                    <li>Set when to receive reminders</li>
                    <li>Indicate self-care activities you like to do</li>
                    <li>Manually log or skip breaks if necessary.</li>
                </ul>
            </div>
        </div>
        <div className="mockup">
            <div className="example"><img src="/assets/tam/final3.gif"/></div>
            <div className="desc">
                <span className="tag">Peace</span>
                <h3>Get notifications based on your preferences</h3>
                <ul>
                    <li>Choose what you're doing for a break and how long</li>
                    <li>Smaller number of choices based on preferences</li>
                    <li>Simple interface to encourage you to take time away from your phone</li>
                </ul>
            </div>
        </div>
        <div className="mockup">
            <div className="example"><img src="/assets/tam/final4.gif"/></div>
            <div className="desc">
                <span className="tag">Self-care</span>
                <h3>See past activity, streaks, and change preferences</h3>
                <ul>
                    <li>See activity and streak calendar to encourage you to maintain self-care habits</li>
                    <li>Change self-care preferences at any time, with laid-out choices to reduce cognitive load</li>
                </ul>
            </div>
        </div>
        </>
    },
    {
        subtitle: 'Testing',
        title: 'User feedback',
        body: <>
            <p>We returned to three interviewees to get feedback on our new prototype, resulting in the following quotes:</p>
            <div className="quote">
            &quot;I can see myself using it towards later time of the day&quot;
            </div>
            <div className="quote">
            &quot;I don&#34;t think it&#34;s stressful. It&#34;s an option you can take, not like forcing you to do something.&quot;
            </div>
        </>
    },
    {
        subtitle: 'Results',
        title: 'What happened in the end?',
        body: <><p>At the end of the 6 weeks, after practicing Agile and human-centered design methods, 
            we presented our final high-fidelity prototype to professors and industry leaders.</p>
            <div className="button-wrap">
            <a href="https://docs.google.com/presentation/d/1tf0RLz_cawI4qHJL6s_QtfZmU3IykbH4mwyCxWTZl9Y/edit?usp=sharing" target="_blank" rel="noreferrer"><div className="button-link">View the Process Deck</div></a>
            </div></>
    },
    {
        subtitle: 'Takeaways',
        title: 'Reflecting on TAM',
        body: <><p>Our group went through a lot of ideation and constant problem-solving, resulting in some
            rushed sections of the project. In particular, I think we could have used <b>more user testing</b>. 
        </p>
        <p>We also talked among our group of adding more incentives to pursue self-care, such as on-campus or local
            coupons after completing a certain amount of breaks, or logging a certain streak.
        </p>
        <h3>Acknowledgements</h3>
        <p>A huge thank you to my teammates, Ruofan Li and Christine Tang, who I collaborated with in all aspects of the project!
        We worked well in making sure all our opinions were voiced, heard, and incorporated.</p>
        <p>I also have to thank the course staff from the IDM department, who were always open in giving advice and constructive
            criticism that helped us create TAM.
        </p>
        
        </>
    },

]

export default function Tam() {
    return(
        <CaseStudy id="tam" facts={facts} content={content} opening={opening} links={links}/>
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