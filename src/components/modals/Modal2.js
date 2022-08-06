import React from 'react'
import ReactDom from 'react-dom'

export default function Modal2({ open, close }) {

    if (!open[2]) return null

    return ReactDom.createPortal(
        <>
            <div className='overlay'/>
            <div className='modal'>
                <button onClick={close}>Close</button>
                More Stuff
            </div>
        </>,
        document.getElementById('portal')
    )
}