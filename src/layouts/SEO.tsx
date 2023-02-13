import Head from 'next/head'
import React from 'react'

interface SEOProps {
    title: string;
    siteTitle?: string;
    description?: string;
}
const SEO = (props: SEOProps) => {
    const { title, siteTitle, description } = props
    const readyTitle = title.length ? `${title} | ${siteTitle}` : siteTitle;

    return (
        <Head>
            <title>{readyTitle}</title>
            <meta name='description' content={description} />
        </Head>
    )
}

export default SEO