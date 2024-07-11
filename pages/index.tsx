import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import dynamic from 'next/dynamic'

const HomePage = dynamic(() => import('../src/HomePage'))

const Home: NextPage = () => {

    return (
        <div className={styles.container}>
            <Head>
            <title>CSS Test</title>
            <meta name="description" content="CSS Test" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <HomePage />
            </main>
        </div>
    )
}

export default Home;