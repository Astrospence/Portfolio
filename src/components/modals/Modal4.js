import React from 'react'
import ReactDom from 'react-dom'

export default function Modal4({ open, close }) {

    if (!open[4]) return null

    return ReactDom.createPortal(
        <>
            <div className='overlay'/>
            <div className='modal'>
                <button onClick={close} className='closeButton'>Close</button>
                <p>A small project showcasing server-side <span style={{'fontWeight':'bold', 'color':'white'}}>authentication</span> using <span style={{'fontWeight':'bold', 'color':'white'}}>JSON Web Tokens</span>. I used <span style={{'fontWeight':'bold', 'color':'white'}}>middleware</span> to modularize authentication and verification of client requests. I also created <span style={{'fontWeight':'bold', 'color':'white'}}>unit and integration tests</span> using <span style={{'fontWeight':'bold', 'color':'white'}}>Jest</span> to ensure proper functionality. You can view this project <a href={'https://github.com/Astrospence/web-sprint-challenge-authentication-and-testing'} target={'_blank'} rel={'noreferrer'}><span style={{'fontWeight':'bold','color':'lightgreen'}}>here</span></a>.</p>
            </div>
        </>,
        document.getElementById('portal')
    )
}