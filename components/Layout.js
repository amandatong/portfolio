import React, { useState } from 'react';
import Link from 'next/link';

import { BsLinkedin, BsGithub, BsEnvelope } from 'react-icons/bs';
import Logo from '../public/assets/logo.svg';
import { useTranslation } from 'next-i18next';
import GradientBG from './GradientBG';
import BasicCursor from './BasicCursor';

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const base_targets = ['.menu','#lang div', '#links a', '#nav-menu a', '#right-bar a']
const home_targets = ['.read-more', '.stamp', '.featured', '#postcard', ]
const work_targets = ['#work a.linkable', '.case-links a','.work-nav a', '.scroll-to-top', '.button-link']

const targets = base_targets.concat(home_targets, work_targets)

export default function Layout({children, router}) {
    const { t, i18n } = useTranslation('common');
    const [open, setOpen] = useState(false);

    const nav_titles = [t('home'), t('work'), t('about'), t('contact')]

    return(
        <AnimatePresence mode='wait'>
          <LayoutGroup>
          <>
        <GradientBG/>
        <motion.div key={router.asPath}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
        <BasicCursor targets={targets}/>
            <div className={`border-bar ${open ? "opened" : ""}`} id="left-bar">
                <button className={`menu ${open ? "opened" : ""}`} onClick={() => setOpen(!open)} aria-label="Main Menu">
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                        <path className="line line2" d="M 20,50 H 80" />
                        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
                </button>
                <div id="credit">
                    amanda&nbsp;tong
                </div>

                <div id="links">
                    <Link href="/work">work</Link>
                    <Link href="/about">about</Link>
                    <Link href="/resume.pdf" target="_blank" rel="noreferrer">resume</Link>
                </div>

                {/* <div id="lang">
                    {["en", "ko"].map(lang => {
                        return(
                            <div key={lang}><Link href="" locale={lang}><span className={i18n.language === lang ? "active" : ''}>{lang === "en" ? "ENG" : "KOR"}</span></Link></div>
                        )
                    })}
                </div> */}
            </div>

            {children}

            <div className={`border-bar ${open ? "opened" : ""}`} id="right-bar">
                <div id="logo"  onClick={() => setOpen(false)}>
                    <Link href="/"><Logo/></Link>
                </div>
                <div id="credit">
                    amanda&nbsp;tong
                </div>
                <div id="external">
                    <a href="http://github.com/amandatong" target="_blank" rel="noreferrer"><span>github</span> <BsGithub/></a>
                    <a href="http://linkedin.com/in/amanda-tong" target="_blank" rel="noreferrer"><span>linkedin</span> <BsLinkedin/></a>
                    <a href="mailto:amanda.g.tong@gmail.com"><span>email</span> <BsEnvelope/></a>
                </div>
            </div>
            
            <div id="nav-menu" className={open ? "opened" : ""}>
                <div className="nav-wrap">
                {['home','work','about', 'contact'].map((pg, index) => {
                    return(
                        <div className="link" key={pg} onClick={() => setOpen(false)} >
                            <Link href={`/${pg === 'home' ? '' : pg.toLowerCase()}`}>
                                {/* {nav_titles[index]} */}
                                {pg}
                            </Link>
                        </div>
                    )
                })}
                <div className="credit-text">website designed &amp; developed by amanda tong, from scratch</div>
                </div>
            </div>
        </motion.div>
     </>
     </LayoutGroup>
     </AnimatePresence>
    )
}