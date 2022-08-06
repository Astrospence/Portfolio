import React from 'react'
import ReactDom from 'react-dom'

export default function Modal2({ open, close }) {

    if (!open[2]) return null

    return ReactDom.createPortal(
        <>
            <div className='overlay'/>
            <div className='modal'>
                <button onClick={close} className='closeButton'>Close</button>
                <p>Underdog Devs is a non-profit organization that provides physical and mentorship resources to people of disadvantaged backgrounds to help them enter a career in developing. During my last unit of BloomTech, I was placed on a team of developers to work on this project. My role was Back End Engineer and I worked with UI/UX Engineers, Front End Engineers, a Project Manager, a Release Manager, and a Stakeholder to add meaningful contributions. My tech stack included <span style={{'fontWeight':'bold', 'color':'white'}}>Node.js, Express, JavaScript, Knex, and PostgreSQL.</span> Using <span style={{'fontWeight':'bold', 'color':'white'}}>Trello</span> as a ticket management system, I designed, improved, and resolved issues with back end components to facilitate front end workflow. You can view my contributions to the project <a href={'https://github.com/BloomTech-Labs/underdog-devs-be-a/pulls?q=is%3Apr+is%3Aclosed+assignee%3AAstrospence'} target={'_blank'} rel={'noreferrer'}><span style={{'fontWeight':'bold','color':'lightgreen'}}>here</span></a>.</p>
            </div>
        </>,
        document.getElementById('portal')
    )
}