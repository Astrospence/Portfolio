import React, { useState } from 'react'

const Contact = () => {
    const [ clicked, setClicked ] = useState(false)

    const emailHandler = e => {
        clicked ? setClicked(false) : setClicked(true)
    }

    const linkedinHandler = () => {
        window.open('https://www.linkedin.com/in/spencerwooddev/')
    }

    const gitHubHandler = () => {
        window.open('https://github.com/Astrospence')
    }

    return (
        <div className='contact-body'>
            <h1>Let's Chat!</h1>
            <div className='email-tile' onClick={emailHandler}>
                {clicked ? <h3>spencer.wood711@gmail.com</h3> : <h3>Email</h3>}
            </div>
            <div className='linkedin-tile' onClick={linkedinHandler}>
                <h3>LinkedIn</h3>
            </div>
            <div className='github-tile' onClick={gitHubHandler}>
                <h3>GitHub</h3>
            </div>
        </div>
    )
}

export default Contact