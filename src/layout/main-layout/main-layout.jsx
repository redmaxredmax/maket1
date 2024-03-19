import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './header'
import { Footer } from './footer'
export const MainLayout = () => {
    return (
        <div className='h-screen flex flex-col justify-between'>
            <div>
                <header>
                    <Header />
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
