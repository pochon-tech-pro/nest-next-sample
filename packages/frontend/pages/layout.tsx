import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";

type Props = {
    children?: React.ReactNode
    title?: string
    description?: string
}

const Layout: NextPage<Props> = ({children, title, description}) => {
    const pageTitle = title || 'Default Title'
    return (
        <div className={styles.container}>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description || 'default description'}/>
            </Head>

            <main className={styles.main}>
                { children }
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}

export default Layout
