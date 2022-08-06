import React, { useState } from 'react'
import Modal1 from './modals/Modal1'
import Modal2 from './modals/Modal2'
import Modal3 from './modals/Modal3'
import Modal4 from './modals/Modal4'
import Modal5 from './modals/Modal5'
import Modal6 from './modals/Modal6'

export default function Projects() {
    const [ open, setOpen ] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false
    })


    const onClickPortfolio = () => {
        setOpen({ ...open, 1: true })
        //window.open('https://github.com/Astrospence/Portfolio')
    }

    const onClickUnderdog = () => {
        setOpen({ ...open, 2: true })
        //window.open('https://github.com/BloomTech-Labs/underdog-devs-be-a/pulls?q=is%3Apr+is%3Aclosed+assignee%3AAstrospence')
    }

    const onClickNerfTag = () => {
        setOpen({ ...open, 3: true })
    }

    const onClickAuth = () => {
        setOpen({ ...open, 4: true })
        //window.open('https://github.com/Astrospence/web-sprint-challenge-authentication-and-testing')
    }

    const onClickServer = () => {
        setOpen({ ...open, 5: true })
        //window.open('https://github.com/Astrospence/web-sprint-challenge-adding-data-persistence')
    }

    const onClickPokemon = () => {
        setOpen({ ...open, 6: true })
        //window.open('https://github.com/Astrospence/web-module-project-async-redux')
    }

    const onClose = () => {
        setOpen({
            ...open,
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
            6: false
        })
    }

    return (
        <div className='container' id='four'>
            <Modal1 open={open} close={onClose}/>
            <Modal2 open={open} close={onClose}/>
            <Modal3 open={open} close={onClose}/>
            <Modal4 open={open} close={onClose}/>
            <Modal5 open={open} close={onClose}/>
            <Modal6 open={open} close={onClose}/>
            <div className='projects'>
                <h2>My Projects</h2>
                <div className='projectTileContainer' id='growing'>  
                    <div className='projectTile' onClick={onClickPortfolio}>
                        <h3>My Portfolio<br></br> - Front End</h3>
                    </div>
                    <div className='projectTile' onClick={onClickUnderdog}>
                        <h3>Underdog Devs<br></br> - Back End</h3>
                    </div>
                    <div className='projectTile' onClick={onClickNerfTag}>
                        <h3>Nerf Tag Battle Game<br></br> - Full Stack</h3>
                    </div>
                    <div className='projectTile' onClick={onClickAuth}>
                        <h3>Authentication/Testing<br></br> - Back End</h3>
                    </div>
                    <div className='projectTile' onClick={onClickServer}>
                        <h3>Server Build<br></br> - Back End</h3>
                    </div>
                    <div className='projectTile' onClick={onClickPokemon}>
                        <h3>Pokemon Comparison App<br></br> - Front End</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}