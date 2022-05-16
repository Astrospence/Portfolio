import React from 'react'

export default function BannerLinkedin() {

    const onClick = () => {
        window.open('https://www.linkedin.com/in/spencerwooddev/')
    }

    return (
        <div className='banner'>
            <h2>Connect with me on</h2>
                <div className='linkedin' onClick={onClick}></div>
        </div>
    )
}