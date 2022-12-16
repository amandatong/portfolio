import { useRef, useState } from 'react'
import {BsChevronUp } from 'react-icons/bs'
import { motion, useScroll } from "framer-motion"
import Scrollspy from 'react-scrollspy-highlight'
import WorkNav from './WorkNav'
export default function CaseStudy({id, facts, content, opening, links}) {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({container: scrollRef});
    const [show, setShow] = useState(false);

    const subtitles = content.map(({subtitle}) => subtitle.toLowerCase())
    

    const doShow =() => { 
        setShow(true);
    }
    const dontShow =() => { 
        setShow(false)
    }
    const handleScroll = (e) => {
        const midpoint = e.target.scrollTop >= e.target.clientHeight;
        if (midpoint) { 
            doShow();
        } else {
            if(show){
                dontShow();
            }
        }
    }
    return(
        <div id={id} className="study" ref={scrollRef} onScroll={handleScroll}>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <div className={`inner-nav ${show ? "show" : "hide"}`}>
                <Scrollspy items={ subtitles } currentClassName="is-current" scrolledPastClassName="in-past" 
                    rootEl={`#${id}`}
                    highlightAllItemsInView={true}
                >
                    {subtitles.map((subtitle, i) => {
                        return(
                            <div key={i}><a href={`#${subtitle}`}>{subtitle}</a></div>
                        )
                    })}
                </Scrollspy>
            </div>
            <motion.div className="scroll-to-top" style={{ opacity: scrollYProgress }}>
                <BsChevronUp  onClick={() =>{
                    scrollRef.current.scrollTo({
                    top: 0, 
                    behavior: 'smooth'
                    })
                }}/>
            </motion.div>
            <div className="opening">
                <div className="image">{opening.image_one}</div>
                <div className="title">
                    <h1>{opening.title}</h1>
                    <h3>{opening.subtitle}</h3>
                        <div className="stack">
                            {opening.stack.map(s => {
                                return(
                                    <div key={s}>{s}</div>
                                )
                            })}
                        </div>
                    <div className="case-links">
                        {links && links.map(({title, icon, url}, i) => {
                            return(
                                <div key={i}><a href={url} target="_blank"><span style={{display:'none'}}>{title}</span>{icon}</a></div>
                            )
                        })}
                    </div>
                </div>
                <div className="image">{opening.image_two}</div>
            </div>
            
            <div className="quick-facts">
                {facts.map(({title, info}, index) => {
                    return(
                        <div className="fact" key={index}>
                            <div className="fact-title">{title}</div>
                            {info}
                        </div>
                    )
                })}
            </div>
            <section>
                <h3>At-A-Glance</h3>
                {opening.brief}
            </section>
            <img src={opening.full_image}/>
            {content.map(({subtitle, title, body, after}, index) => {
                return(
                    <div  key={index}>
                        <section key={index} id={`${subtitle.toLowerCase()}`} >
                            <div className="subtitle"><span>{index < 9 ? `0${index+1}` : index+1} </span><span>{subtitle}</span></div>
                            <div className="section-title">{title}</div>
                            {body}
                        </section>
                        {after}
                    </div>
                )
            })}

            <WorkNav active={id}/>
        
        </div>
    )
}