import React, { useState, useRef, useEffect } from 'react'
import { useSpring, useSprings, animated } from '@react-spring/web'
import { useGesture } from '@use-gesture/react'
import Link from 'next/link'
import Tilt from 'react-parallax-tilt'
import { BsFillLockFill } from 'react-icons/bs'
import { ImArrowRight2 } from 'react-icons/im'

let cards = [
    {
        id: 'postcard', 
        body: <>
            <div id="greetings">Greetings from</div>
            <img src="/assets/name2.svg" id="name"/>
            <div id="subtitle">designer <br/>&amp; developer <div>drag or scroll to explore!</div></div>
            <div id="wall"></div>
            <img src="/assets/desk2.svg" id="desk"/>
            <img src="/assets/laptop.svg" id="laptop"/>
            <div id="surname">Tong</div>
        </>
    },
    { 
        id: 'featured_1',
        body: <>
            <h3>Featured Work</h3>
            <div className="split-container">
                <div className="left">
                    <img src="/assets/hyundai_thumbnail.jpg"/>
                </div>
                <div className="right">
                    <div className="stamp">
                        <Link href="/work">see <br/>all<br/> work</Link>
                    </div>
                    <h4>JUN - AUG 2022</h4>
                    <h2>Hyundai's Smart Factory Microsite</h2>
                    <div className="desc">
                        <span>
                        Educate and build trust with customers via an interactive web experience
                        </span>
                    </div>
                    <div className="stack">
                        {['UI/UX Design', 'Front-end', 'Web', 'Industry'].map(s => {
                            return(
                                <div key={s}>{s}</div>
                            )
                        })}
                    </div>
                    <Link href="/work/hyundai">
                        <div className="read-more">
                            read the case study<ImArrowRight2/>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    },
    { 
        id: 'featured_2',
        body: <>
        <h3>Featured Work</h3>
        <div className="split-container">
            <div className="left">
                    <img src="/assets/tam/tam3.jpg"/>
            </div>
            <div className="right">
                <div className="stamp">
                        <Link href="/work">see <br/>all<br/> work</Link>
                </div>
                <h4>SEP - OCT 2022</h4>
                <h2>TAM: Take A Minute</h2>
                <div className="desc">
                <span>A mobile app to remind student-athletes to take care of themselves amidst a busy schedule, with personalized recommendations</span>
                </div>
                    <div className="stack">
                        {['UX Research', 'UI/UX Design', 'Mobile', 'University'].map(s => {
                            return(
                                <div key={s}>{s}</div>
                            )
                        })}
                    </div>
                <Link href="/work/tam">
                    <div className="read-more">
                        read the case study<ImArrowRight2/>
                    </div>
                </Link>
            </div>
        </div>
    </>
    },
    { 
        id: 'featured_3',
        body: <>
        <h3>Featured Work</h3>
        <div className="split-container">
            <div className="left">
                    <img src="/assets/progress.jpg"/>
            </div>
            <div className="right">
                <div className="stamp">
                        <Link href="/work">see <br/>all<br/> work</Link>
                </div>
                <h4>JAN - AUG 2021</h4>
                <h2>Student Progress Dashboard</h2>
                <div className="desc">
                <span>A web app for teachers and parents who need to view progress on students' literacy skills</span>
                </div>
                    <div className="stack">
                        {['UI/UX Design', 'Front-end', 'Web', 'Research'].map(s => {
                            return(
                                <div key={s}>{s}</div>
                            )
                        })}
                    </div>
                <Link href="/work/progress">
                    <div className="read-more">
                        read more<ImArrowRight2/>
                    </div>
                </Link>
            </div>
        </div>
    </>
    },
    // { 
    //     id: 'fourth',
    //     body: 'who am i?'
    // }
]

// function randomInt(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

const angles = [0, 1, -2, 2, -3, -1];
const baseZ = 100;
const to = i => ({ x: 0, y: 0, rotateZ: i === 0 ? 0 : angles[i], friction: 14, tension: 120, scale: 1, opacity:1});

export default function Home() {

    const [current, setCurrent] = useState(0);
    function cycleIndex(index) {
        if (index === current) return baseZ;
        if (current == 0 || current == cards.length-1) return -index;
        if (current == 1) return index === 0 ? -cards.length : -index;
        return index < current ? -(index + cards.length) : -index;
    }
    // const [count, setCount] = useState(0);
    const [springs, api] = useSprings(cards.length, i => (to(i)));

    function goAway(ogIndex, down, mx, my, vx, vy, dirx, diry){
        // Set the drag hook and define component movement based on gesture data
        api.start( (index) => {
                if (index !== ogIndex || index !== current) return;
                let trigger = (vx > 0.25 || vy > 0.2);
                if(down) {
                    return({ x: mx, y:  my, rotateZ: 0, scale:0.95, opacity:0.95})
                }
                else if(!down && trigger) {
                    let next = index + 1;
                    setCurrent(next === cards.length ? 0 : next);
                    return([{ 
                            x: down ? mx : dirx * (100 + window.innerWidth), 
                            y: down ? my : diry * (100 + window.innerHeight),
                            rotateZ: 0, 
                            zIndex: baseZ
                        }, {...to(index), delay: 1000, zIndex: baseZ}])
                } else {
                    return({ x: down ? mx : 0, y: down ? my : 0, rotateZ: 0, scale:1,opacity:1})
                }
            },
            {
                from: ({args: [ogIndex]}) => [ springs[ogIndex].x.get(), springs[ogIndex].y.get(), springs[ogIndex].rotateZ.get() ],
            }
        )
    }

    function comeBack(ogIndex,down,mx,my){
        setTimeout(() => {
            api.start((index) => {
                let prev_index = current - 1 < 0 ? cards.length-1 : current - 1;
                if(!down) {
                    if (index !== prev_index) return;
                    // if (i !== ogIndex) return;
                    if (!down) {
                        setCurrent(current - 1 < 0 ? cards.length-1 : current - 1);
                        return([{ 
                                y: 100,
                                opacity:0.5,
                            }, {x: 0, y: 0, opacity: 1,delay:500}])

                    }
                } else {
                    return({ x: down ? mx : 0, y: down ? my : 0});
                }
            },
            {
                from: ({args: [ogIndex]}) => [ springs[ogIndex].x.get(), springs[ogIndex].y.get(), springs[ogIndex].rotateZ.get() ],
            })
        }, 200)
    }

    const bind = useGesture(
        {
            onDrag: ({ args: [ogIndex], down,  movement: [mx, my], velocity:[vx,vy], direction:[dirx,diry] }) => {
                return goAway(ogIndex, down, mx, my, vx, vy, dirx, diry);
            },
            onWheel: ({ args: [ogIndex], down,  movement: [mx, my], velocity:[vx,vy], direction:[dirx,diry] }) => {
                if(dirx > 0 || diry > 0) return goAway(ogIndex, down, mx, my, vx, vy, dirx, diry);
                if(diry < 0 && vy > 0) return comeBack(ogIndex,down,mx,my);
            }
        }
    )
        
  return (
    <div id="home">
        {springs.map((styles, i) => {
            let {id, body} = cards[i]
            return(
                
                    <animated.div {...bind(i)} key={i} className="card-container"
                    style={{...styles, zIndex: cycleIndex(i)}}>
                    <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={1500} tiltReverse={true}
                        trackOnWindow={true} transitionSpeed={1000} tiltEnable={current === i}>
                        <div className={`card ${id.includes('featured') ? "featured" : null}`} id={id}>
                            <div className="padding">
                                {body}
                            </div>
                        </div>
                    </Tilt>
                    </animated.div>
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