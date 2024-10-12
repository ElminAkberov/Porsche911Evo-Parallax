import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'

const Layout = ({ children }) => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    if (windowSize.width < 1000) {
        return (
            <div className='h-[100vh] bg-black text-white flex items-center justify-center'>
                <p className='text-xl'>Zəhmət olmasa NoteBook və ya PC dən istifadə edin</p>
            </div>
        )
    }
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default Layout