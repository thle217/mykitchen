import React from 'react'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

function MainLayout({ children }) {
    return (
        <React.Fragment>
            <Sidebar />
            <div className='content bg-light'>
                <Navbar isMainLayout={true}/>
                {children}
            </div>
        </React.Fragment>
    )
}

export default MainLayout;