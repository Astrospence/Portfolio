import React from 'react'
import ReactDom from 'react-dom'

export default function Modal6({ open, close }) {

    if (!open[6]) return null

    return ReactDom.createPortal(
        <>
            <div className='overlay'/>
            <div className='modal'>
                <button onClick={close} className='closeButton'>Close</button>
                <p>This small <span style={{'fontWeight':'bold', 'color':'white'}}>React.js</span> project showcases my use of <span style={{'fontWeight':'bold', 'color':'white'}}>Async Redux</span> as an application state management system. I use <span style={{'fontWeight':'bold', 'color':'white'}}>Axios</span> inside <span style={{'fontWeight':'bold', 'color':'white'}}>middleware functions</span> to retrieve data from a <span style={{'fontWeight':'bold', 'color':'white'}}>Pokemon API</span> and to handle errors for edge cases. The results then manipulate state for the display of responsive Pokemon character data within components. You can view this project <a href={'https://github.com/Astrospence/web-module-project-async-redux'} target={'_blank'} rel={'noreferrer'}><span style={{'fontWeight':'bold','color':'lightgreen'}}>here</span></a>.</p>
            </div>
        </>,
        document.getElementById('portal')
    )
}