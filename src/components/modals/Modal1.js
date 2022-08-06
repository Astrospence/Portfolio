import React from 'react'
import ReactDom from 'react-dom'

export default function Modal1({ open, close }) {

    if (!open[1]) return null

    return ReactDom.createPortal(
        <>
            <div className='overlay'/>
            <div className='modal'>
                <button onClick={close}>Close</button>
                Stuff
            </div>
        </>,
        document.getElementById('portal')
    )
}