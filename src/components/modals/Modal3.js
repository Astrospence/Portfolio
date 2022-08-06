import React from 'react'
import ReactDom from 'react-dom'

export default function Modal3({ open, close }) {

    if (!open[3]) return null

    return ReactDom.createPortal(
        <>
            <div className='overlay'/>
            <div className='modal'>
                <button onClick={close} className='closeButton'>Close</button>
                <p>This is what it sounds like- Laser Tag but with nerf guns! This is a personal project headed by a friend and is still in the development phase. As a Full Stack Web Developer, my responsibilities included building a <span style={{'fontWeight':'bold', 'color':'white'}}>server</span> that consumes positioning and event data, runs the <span style={{'fontWeight':'bold', 'color':'white'}}>game logic and game loop</span>, responds with data accordingly, and serves up a local site to visualize the game from an admin panel. I wrote <span style={{'fontWeight':'bold', 'color':'white'}}>algorithms</span> for hit events and shooter recognition, which also involved creating an <span style={{'fontWeight':'bold', 'color':'white'}}>API</span> to interact with a <span style={{'fontWeight':'bold', 'color':'white'}}>database</span> to access player stats and event logs. My tech stack for this project included <span style={{'fontWeight':'bold', 'color':'white'}}>HTML, CSS, JavaScript, Node.js with Express, and PostgreSQL.</span></p>
            </div>
        </>,
        document.getElementById('portal')
    )
}