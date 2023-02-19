import React from 'react'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

function SubLayout({ children }) {
    return (
        <React.Fragment>
            <Sidebar />
            <div className='content bg-light'>
                <Navbar />
                {children}
            </div>
        </React.Fragment>
    )
}

export default SubLayout;