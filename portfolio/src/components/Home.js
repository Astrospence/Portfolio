import React from 'react'

const Home = () => {
    return (
        <div className='home-main'>
            <div className='home-left'>
                <h2 className='lang-h2'>Languages:</h2>
                <div className='lang-body'>
                    <div className='javascript-tile'>
                        <p>JavaScript</p>
                        <div className='javascript-icon'></div>
                    </div>
                    <div className='html-tile'>
                        <p>HTML</p>
                        <div className='html-icon'></div>
                    </div>
                    <div className='css-tile'>
                        <p>CSS</p>
                        <div className='css-icon'></div>
                    </div>
                    <div className='node-tile'>
                        <div className='node-icon'></div>
                    </div>
                    <div className='sql-tile'>
                        <div className='sql-icon'></div>
                    </div>
                </div>
            </div>
            <div className='home-body'>
                <h1>Projects</h1>
                <div className='home-tile'>
                    <h3>Project Here</h3>
                </div>
                <div className='home-tile'>
                    <h3>Project Here</h3>
                </div>
                <div className='home-tile'>
                    <h3>Project Here</h3>
                </div>
                <div className='home-tile'>
                    <h3>Project Here</h3>
                </div>
            </div>
            <div className='home-right'>
                <h2 className='tools-h2'>Tools/Libraries:</h2>
                <div className='tools-body'>
                    <div className='vscode-tile'>
                        <p>VSCode</p>
                        <div className='vscode-icon'></div>
                    </div>
                    <div className='git-tile'>
                        <p>Git CLI</p>
                        <div className='git-icon'></div>
                    </div>
                    <div className='jest-tile'>
                        <p>Jest</p>
                        <div className='jest-icon'></div>
                    </div>
                    <div className='cypress-tile'>
                        <div className='cypress-icon'></div>
                    </div>
                    <div className='sqlite-tile'>
                        <div className='sqlite-icon'></div>
                    </div>
                    <div className='postgresql-tile'>
                        <div className='postgresql-icon'></div>
                    </div>
                    <div className='heroku-tile'>
                        <div className='heroku-icon'></div>
                    </div>
                    <div className='netlify-tile'>
                        <div className='netlify-icon'></div>
                    </div>
                    <div className='react-tile'>
                        <p>React</p>
                        <div className='react-icon'></div>
                    </div>
                    <div className='redux-tile'>
                        <p>Redux</p>
                        <div className='redux-icon'></div>
                    </div>
                    <div className='axios-tile'>
                        <div className='axios-icon'></div>
                    </div>
                    <div className='express-tile'>
                        <div className='express-icon'></div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home