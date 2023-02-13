import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

interface BaseLayoutProps {
    children: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
    return (
        <>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </>
    )
}

export default BaseLayout