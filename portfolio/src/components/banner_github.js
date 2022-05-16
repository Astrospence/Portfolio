import React from 'react'

export default function BannerGitHub() {

    const onClick = () => {
        window.open('https://www.linkedin.com/in/spencerwooddev/')
    }

    return (
        <div className='banner'>
            <h2>Connect with me on</h2>
            <div className='github' onClick={onClick}></div>
        </div>
    )
}