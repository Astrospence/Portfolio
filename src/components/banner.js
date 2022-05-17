import React from 'react'

export default function Banner() {

    const onClickLinkedin = () => {
        window.open('https://www.linkedin.com/in/spencerwooddev/')
    }

    const onClickGitHub = () => {
        window.open('https://github.com/Astrospence')
    }

    return (
        <div className='banner'>
            <h2>Click to Connect with me on</h2>
            <div className='buttons'>
                <div className='linkedin' onClick={onClickLinkedin}></div>
                <div className='github' onClick={onClickGitHub}></div>
            </div>
        </div>
    )
}