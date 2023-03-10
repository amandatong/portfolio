import '../styles/styles.scss';
import React from 'react';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import Cursor from '../components/Cursor';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BasicCursor from '../components/BasicCursor';
import Script from 'next/script'

// const base_targets = ['.menu','#lang div', '#links a', '#nav-menu a', '#right-bar a']
// const home_targets = ['.read-more', '.stamp', '.featured', '#postcard', ]
// const work_targets = ['#work a.linkable', '.case-links a','.work-nav a', '.scroll-to-top', '.button-link']

// const targets = base_targets.concat(home_targets, work_targets)

function App({ Component, pageProps, router }) {
  return (
    <>
        <Head>
            <title>Amanda Tong</title>
            <meta name="description" content="Hi! I'm Amanda Tong, a designer and developer." />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
        </Head>
        {/* <Cursor targets={targets}/> */}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-T24N3Y39C4"/>
            <Script id="google-analytics">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-T24N3Y39C4');
                `}
            </Script>
        <Layout router={router}>
            <Component {...pageProps} />
        </Layout>
    </>
  )
}

export default appWithTranslation(App);