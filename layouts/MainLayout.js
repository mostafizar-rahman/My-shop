import React from 'react'
import Footer from '@/components/sections/footer'
import Header from '@/components/sections/header/header'

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