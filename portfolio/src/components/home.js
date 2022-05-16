import React, { useState, useEffect } from 'react'
import BannerLinkedin from './banner_linkedin'
import BannerGitHub from './banner_github'
import Bio from './bio'
import Qualities from './qualities'
import Projects from './projects'
import TechStack from './techStack'

export default function Home() {
    const [ mode, setMode ] = useState(true)

    useEffect(() => {
        setInterval(() => {
            setMode(!mode)
        }, 10000)
    }, [mode])

    return (
        <div className='main'>
            {mode ? <BannerLinkedin /> : <BannerGitHub />}
            <Bio />
            <Qualities />
            <Projects />
            <TechStack />
        </div>
    )
}