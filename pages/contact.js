
import { BsLinkedin, BsGithub, BsEnvelope, BsBehance } from 'react-icons/bs';
import Tilt from 'react-parallax-tilt'
export default function Contact() {
  return (
    <div id="contact">
        <div className="card-container">
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={1500} tiltReverse={true}
                            trackOnWindow={true} transitionSpeed={1000} >
                <div className="card" id="contact-card">
                    <h2>Contact</h2>
                    <div className="contact-stamp">
                        affix postage here
                    </div>
                    <div className="card-content">
                        <div className="left"><img src="/assets/undraw_mailbox.svg"/></div>
                        <div className="right">
                            Interested in my work, or just want to have a chat?
                            <h3>Email</h3>
                            <a href="mailto:amanda.g.tong@gmail.com" target="_blank"><BsEnvelope/> amanda.g.tong@gmail.com</a>
                            <h3>Socials</h3>
                            <a href="http://github.com/amandatong" target="_blank"><BsGithub/> amandatong</a>
                            <a href="http://linkedin.com/in/amanda-tong" target="_blank"><BsLinkedin/> amanda-tong</a>
                            <a href="http://behance.net/amanda_tong" target="_blank"><BsBehance/> amanda_tong</a>
                        </div>
                    </div>
                </div>
            </Tilt>
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