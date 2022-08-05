import React from 'react'

export default function Projects() {

    const onClickPortfolio = () => {
        window.open('https://github.com/Astrospence/Portfolio')
    }

    const onClickUnderdog = () => {
        window.open('https://github.com/BloomTech-Labs/underdog-devs-be-a/pulls?q=is%3Apr+is%3Aclosed+assignee%3AAstrospence')
    }

    const onClickAuth = () => {
        window.open('https://github.com/Astrospence/web-sprint-challenge-authentication-and-testing')
    }

    const onClickServer = () => {
        window.open('https://github.com/Astrospence/web-sprint-challenge-adding-data-persistence')
    }

    const onClickPokemon = () => {
        window.open('https://github.com/Astrospence/web-module-project-async-redux')
    }

    return (
        <div className='container' id='four'>
            <div className='projects'>
                <h2>My Projects</h2>
                <div className='project1'>
                    <div id='growing' className='projectImg' onClick={onClickPortfolio}></div>
                    <div className='description'>
                        <h3>My Portfolio - Front End</h3>
                        <p>This website you're viewing is a personal project as well as a portfolio to house a more comprehensive view of my journey and my projects. I will continuously develop this site as I work to improve my code and implement best practices that I learn. I used <span style={{'fontWeight':'bold', 'color':'white'}}>React.js, CSS, HTML &#40;JSX&#41;, and JavaScript</span> to put it all together. In the interest of expansion and scaling, I implemented <span style={{'fontWeight':'bold', 'color':'white'}}>React Router</span> for client-side routing. If you'd like to take a look at my GitHub repo of this project, you can click <a href={'https://github.com/Astrospence/Portfolio/tree/main/portfolio'} target={'_blank'} rel={'noreferrer'}><span style={{'fontWeight':'bold','color':'lightgreen'}}>here</span></a>.</p>
                    </div>
                </div>
                <div className='project2'>
                    <div id='underdogDevs' className='projectImg' onClick={onClickUnderdog}></div>
                    <div className='description'>
                        <h3>Underdog Devs - Back End</h3>
                        <p>Underdog Devs is a non-profit organization that provides physical and mentorship resources to people of disadvantaged backgrounds to help them enter a career in developing. My unique opportunity here was facilitated by BloomTech. During my final unit of school I was placed on a developing team that worked to improve this product. My role was Back End Engineer and I worked with UI/UX Engineers, Front End Engineers, a Project Manager, a Release Manager, and a Stakeholder to add meaningful contributions. My tech stack included <span style={{'fontWeight':'bold', 'color':'white'}}>Node.js, Express, JavaScript, Knex, and PostgreSQL.</span> Using <span style={{'fontWeight':'bold', 'color':'white'}}>Trello</span> as a ticket management system, I designed, improved, and resolved issues with back end components to facilitate front end workflow. You can view my contributions to the project <a href={'https://github.com/BloomTech-Labs/underdog-devs-be-a/pulls?q=is%3Apr+is%3Aclosed+assignee%3AAstrospence'} target={'_blank'} rel={'noreferrer'}><span style={{'fontWeight':'bold','color':'lightgreen'}}>here</span></a>.</p>
                    </div>
                </div>
                <div className='project3'>
                    <div id='nerfTag' className='projectImg'></div>
                    <div className='description'>
                        <h3>Nerf Tag Battle Game - Full Stack</h3>
                        <p>This is what it sounds like- Laser Tag but with nerf guns! This is a personal project headed by a friend and is still in the development phase. As a Full Stack Web Developer, my responsibilities include building a <span style={{'fontWeight':'bold', 'color':'white'}}>server</span> that will <span style={{'fontWeight':'bold', 'color':'white'}}>consume positioning and event data,</span> run the <span style={{'fontWeight':'bold', 'color':'white'}}>game logic, respond with data</span> accordingly, and <span style={{'fontWeight':'bold', 'color':'white'}}>serve up a local site</span> to visualize the game from an admin panel. My tech stack for this project includes <span style={{'fontWeight':'bold', 'color':'white'}}>HTML, CSS, JavaScript, Node.js, and Express.</span></p>
                    </div>
                </div>
                <div className='project4'>
                    <div className='projectImg generic' onClick={onClickAuth}></div>
                    <div className='description'>
                        <h3>Authentication/Testing - Back End</h3>
                        <p>A small project showcasing server-side <span style={{'fontWeight':'bold', 'color':'white'}}>authentication</span> using <span style={{'fontWeight':'bold', 'color':'white'}}>JSON Web Tokens</span>. I used <span style={{'fontWeight':'bold', 'color':'white'}}>middleware</span> to modularize authentication and verification of client requests. I also created <span style={{'fontWeight':'bold', 'color':'white'}}>unit and integration tests</span> using <span style={{'fontWeight':'bold', 'color':'white'}}>Jest</span> to ensure proper functionality. You can view this project <a href={'https://github.com/Astrospence/web-sprint-challenge-authentication-and-testing'} target={'_blank'} rel={'noreferrer'}><span style={{'fontWeight':'bold','color':'lightgreen'}}>here</span></a>.</p>
                    </div>
                </div>
                <div className='project5'>
                    <div className='projectImg generic' onClick={onClickServer}></div>
                    <div className='description'>
                        <h3>Server Build - Back End</h3>
                        <p>A small project showcasing a <span style={{'fontWeight':'bold', 'color':'white'}}>full CRUD API</span> which handles client requests and interracts with a database using <span style={{'fontWeight':'bold', 'color':'white'}}>SQL queries</span>. I configured the <span style={{'fontWeight':'bold', 'color':'white'}}>SQL database</span> using <span style={{'fontWeight':'bold', 'color':'white'}}>Knex migration and seed files. Node.js and Express</span> were used to create the server. You can view this project <a href={'https://github.com/Astrospence/web-sprint-challenge-adding-data-persistence'} target={'_blank'} rel={'noreferrer'}><span style={{'fontWeight':'bold','color':'lightgreen'}}>here</span></a>.</p>
                    </div>
                </div>
                <div className='project6'>
                    <div id='pokeball' className='projectImg' onClick={onClickPokemon}></div>
                    <div className='description'>
                        <h3>Pokemon Comparison App - Front End</h3>
                        <p>This small <span style={{'fontWeight':'bold', 'color':'white'}}>React.js</span> project showcases my use of <span style={{'fontWeight':'bold', 'color':'white'}}>Async Redux</span> as an application state management system. I use <span style={{'fontWeight':'bold', 'color':'white'}}>Axios</span> inside <span style={{'fontWeight':'bold', 'color':'white'}}>middleware functions</span> to retrieve data from a <span style={{'fontWeight':'bold', 'color':'white'}}>Pokemon API</span> and to handle errors for edge cases. The results then manipulate state for the display of responsive Pokemon character data within components. You can view this project <a href={'https://github.com/Astrospence/web-module-project-async-redux'} target={'_blank'} rel={'noreferrer'}><span style={{'fontWeight':'bold','color':'lightgreen'}}>here</span></a>.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}