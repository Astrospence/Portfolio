import React from 'react'
import ReactDom from 'react-dom'

export default function Modal1({ open, close }) {

    if (!open[1]) return null

    return ReactDom.createPortal(
        <>
            <div className='overlay'/>
            <div className='modal'>
                <button onClick={close} className='closeButton'>Close</button>
                <p>This website you're viewing is a personal project as well as a portfolio to house a more comprehensive view of my journey and my projects. I will continuously develop this site as I work to improve my code and implement best practices that I learn. I used <span style={{'fontWeight':'bold', 'color':'white'}}>React.js, CSS, HTML &#40;JSX&#41;, and JavaScript</span> to put it all together. In the interest of expansion and scaling, I implemented <span style={{'fontWeight':'bold', 'color':'white'}}>React Router</span> for client-side routing. If you'd like to take a look at my GitHub repo of this project, you can click <a href={'https://github.com/Astrospence/Portfolio'} target={'_blank'} rel={'noreferrer'}><span style={{'fontWeight':'bold','color':'lightgreen'}}>here</span></a>.</p>
            </div>
        </>,
        document.getElementById('portal')
    )
}