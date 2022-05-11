import React from 'react'
import me from '../imgs/me.jpg'


export default function Bio() {
    return (
        <div className='me'>
            <img src={me} alt='Spencer Wood smiling'/>
            <div className='bio'>
                <h2>About Me</h2>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;I'm Spencer Wood, and my professional history is full of variety and taking advantage of the next better opportunity that would support my family. I learned many new and different things, and was quickly able to become skillful in each field. Among all the skills I've developed, one in particular stands out to me, and hopefully to others. That is that I'm a scholar at my core, and that my drive is aquiring knowledge and high levels of skill in what I love doing. My ambition is to be that guy you can always count on, that adds unquestionable value with skill and dependability to a team. I've gained a love for technology and I'm delving into a career in Software Development.</p>
                <br></br>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;I've graduated from BloomTech with a certification in Full-Stack Web Developing. I'm confident in the skills and knowledge I've gained, but I'm humbled and excited and eager to join the workforce, learn from mentors, and let my inner scholar take off.</p>
            </div>
        </div>
    )
}