import React from 'react'
import Banner from './banner'
import Bio from './bio'
import Qualities from './qualities'
import Projects from './projects'
import TechStack from './techStack'

export default function Home() {
    return (
        <div>
            <Banner />
            <Bio />
            <Qualities />
            <Projects />
            <TechStack />
        </div>
    )
}