import React from 'react'
import ReactDom from 'react-dom'

export default function Modal5({ open, close }) {

    if (!open[5]) return null

    return ReactDom.createPortal(
        <>
            <div className='overlay'/>
            <div className='modal'>
                <button onClick={close} className='closeButton'>Close</button>
                <p>A small project showcasing a <span style={{'fontWeight':'bold', 'color':'white'}}>full CRUD API</span> which handles client requests and interracts with a database using <span style={{'fontWeight':'bold', 'color':'white'}}>SQL queries</span>. I configured the <span style={{'fontWeight':'bold', 'color':'white'}}>SQL database</span> using <span style={{'fontWeight':'bold', 'color':'white'}}>Knex migration and seed files. Node.js and Express</span> were used to create the server. You can view this project <a href={'https://github.com/Astrospence/web-sprint-challenge-adding-data-persistence'} target={'_blank'} rel={'noreferrer'}><span style={{'fontWeight':'bold','color':'lightgreen'}}>here</span></a>.</p>
            </div>
        </>,
        document.getElementById('portal')
    )
}