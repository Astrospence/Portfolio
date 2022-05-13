import React from 'react'

export default function Projects() {
    return (
        <div className='projects'>
            <h2>My Projects</h2>
            <div className='project1'>
                <div id='photoOfMe' className='projectImg'></div>
                <div className='description'>
                    <h3>My Portfolio - Front End</h3>
                    <p>This website you're viewing is a personal project as well as a portfolio to house a more comprehensive view of my journey and my projects. I used React.js, CSS, HTML, and JavaScript to put it all together. In the interest of expansion and scaling, I implemented React Router for possible client-side routing. If you'd like to take a look at my GitHub repo of this project, you can click <a href={'https://github.com/Astrospence/Portfolio/tree/main/portfolio'} target={'_blank'} rel={'noreferrer'}><span style={{'fontWeight':'bold','color':'lightgreen','textDecoration':'none'}}>here</span></a>.</p>
                </div>
            </div>
            <div className='project2'>
                <div id='underdogDevs' className='projectImg'></div>
                <div className='description'>
                    <h3>Underdog Devs - Back End</h3>
                    <p>Underdog Devs is a non-profit organization that provides physical and mentorship resources to people of disadvantaged backgrounds to help them enter a career in developing. My unique opportunity here was facilitated by BloomTech. During my final unit of school I was placed on a developing team that worked to improve this product. My role was Back End Engineer and I worked with UI/UX Engineers, Front End Engineers, a Project Manager, a Release Manager, and a Stakeholder to add meaningful contributions. My tech stack included Node.js, Express, JavaScript, Knex, and PostgreSQL. You can view my contributions to the project <a href={'https://github.com/BloomTech-Labs/underdog-devs-be-a/pulls?q=is%3Apr+is%3Aclosed+assignee%3AAstrospence'} target={'_blank'} rel={'noreferrer'}><span style={{'fontWeight':'bold','color':'lightgreen','textDecoration':'none'}}>here</span></a>.</p>
                </div>
            </div>
            <div className='project3'>
                <div id='nerfTag' className='projectImg'></div>
                <div className='description'>
                    <h3>Nerf Tag Battle Game - Full Stack</h3>
                    <p>This is what it sounds like- Laser Tag but with nerf guns! This is a personal project headed by a friend and is still in the development phase. As a Full Stack Web Developer, my responsibilities include building a server that will consume positioning and event data, run the game logic, respond with data accordingly, and serve up a local site to visualize the game from an admin panel. My tech stack for this project includes HTML, CSS, JavaScript, Node.js, and Express.</p>
                </div>
            </div>
            <div className='project4'>
                <div id='generic' className='projectImg'></div>
                <div className='description'>
                    <h3>Authentication/Testing - Back End</h3>
                    <p>A small project showcasing server-side authentication using JSON Web Tokens. I used middleware to modularize authentication and verification of client requests. I also created unit tests and integration tests using Jest to ensure proper functionality. You can view this project <a href={'https://github.com/Astrospence/web-sprint-challenge-authentication-and-testing'} target={'_blank'} rel={'noreferrer'}><span style={{'fontWeight':'bold','color':'lightgreen','textDecoration':'none'}}>here</span></a>.</p>
                </div>
            </div>
            <div className='project5'>
                <div id='generic' className='projectImg'></div>
                <div className='description'>
                    <h3>Server Build - Back End</h3>
                    <p>A small project showcasing a full CRUD API which handles client requests and interracts with a database using SQL queries. I configured the SQL database using Knex migration and seed files. Node.js and Express were used to create the server. You can view this project <a href={'https://github.com/Astrospence/web-sprint-challenge-adding-data-persistence'} target={'_blank'} rel={'noreferrer'}><span style={{'fontWeight':'bold','color':'lightgreen','textDecoration':'none'}}>here</span></a>.</p>
                </div>
            </div>
            <div className='project6'>
                <div id='pokeball' className='projectImg'></div>
                <div className='description'>
                    <h3>Pokemon Comparison App - Front End</h3>
                    <p>This small React.js project showcases my use of Async Redux as an application state management system. I use Axios in middleware to retrieve data from a Pokemon API and state manipulation displays responsive Pokemon character data within components. You can view this project <a href={'https://github.com/Astrospence/web-module-project-async-redux'} target={'_blank'} rel={'noreferrer'}><span style={{'fontWeight':'bold','color':'lightgreen','textDecoration':'none'}}>here</span></a>.</p>
                </div>
            </div>

        </div>
    )
}