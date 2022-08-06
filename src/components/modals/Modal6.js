import React from 'react'
import ReactDom from 'react-dom'

export default function Modal6({ open, close }) {

    if (!open[6]) return null

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