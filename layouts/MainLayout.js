import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer/>
        </div>
    )
}

export default MainLayout