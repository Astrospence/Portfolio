import React from 'react'
import me from '../imgs/me.jpg'
import pokeball from '../imgs/Pokeball2.jpg'

export default function Projects() {
    return (
        <div className='projects'>
            <h2>My Projects</h2>
            <div className='project1'>
                <img src={me} alt='Spencer Wood smiling'/>
                <div className='description'>
                    <h3>My Portfolio - Front End</h3>
                    <p>This website is a personal project as well as a job-hunting tool. I used React.js, CSS, HTML, and JavaScript to put it all together. In the interest of expansion and scaling, I implemented React Router for possible client-side routing. If you'd like to take a look at my GitHub repo of this project, you can click <a href={'https://github.com/Astrospence/Portfolio/tree/main/portfolio'} target={'_blank'} rel={'noreferrer'}><span style={{'fontWeight':'bold','color':'lightgreen','textDecoration':'none'}}>here</span></a>.</p>
                </div>
            </div>
            <div className='project2'>
                <img src={pokeball} alt='Pokeball art by Spencer Wood'/>
                <div>
                    <h3>Pokemon Comparison App - Front End</h3>
                    <p>This React.js project is meant to showcase Async Redux as an application state management system. It uses Axios to retrieve data from a Pokemon API to display responsive Pokemon character data. </p>
                </div>
            </div>
            <div className='project3'>

            </div>
        </div>
    )
}