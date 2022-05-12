import { useEffect, useState } from 'react'
import React from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import bootstrap from '../../assets/images/bootstrap_screen.PNG'
import anime from '../../assets/images/anime_js_screen.PNG'
import quote from '../../assets/images/quote_screen.PNG'
import users from '../../assets/images/random_users_screen.PNG'


const Work = () => {
    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 2000)
      }, [])


    return(
        <section className='portfolio' > 
        <h1>
            <AnimatedLetters
              letterClass = {letterClass}
              strArray={[ 'P', 'r', 'o', 'j', 'e', 'c', 't', 's', '', 'd', 'o', 'n', 'e', '', ':']}
              idx={50}
            /></h1>
            <div className=" portfolio_container "> 
                <article className="portfolio_section ">
                
                    <h3>Bootstrap Project</h3>
                         <img className='image' src={bootstrap} alt="..."/>
                         <div className="portfolio_item"> 
                    
                    <button className="github"><a href="https://github.com/AnassMoustaid/bootstrap_maquette"  target="blank">Github</a></button>
                    <button className="live_demo"><a href="https://anassmoustaid.github.io/bootstrap_maquette/"  target="blank">Live Demo</a></button>
                    </div>
                   
                    
                </article>
                <article className="portfolio_section">
                    
                    <h3>Quote Generator using an API:</h3>
                         <img src={quote} alt="..."/>
                         <div className="portfolio_item">
                    
                    <button className="github"><a href="https://github.com/AnassMoustaid/quote_generator"  target="blank">Github</a></button>
                    <button className="live_demo"><a href="https://anassmoustaid.github.io/quote_generator/"  target="blank">Live Demo</a></button>
                    </div>
                    
                    
                    
                </article>
                <article className="portfolio_section ">
                    
                    <h3>Using Anime JS Library</h3>
                         <img src={anime} alt="..."/>
                         <div className="portfolio_item">
                    
                    <button className="github"><a href="https://github.com/AnassMoustaid/Design_Anime_JS"  target="blank">Github</a></button>
                    <button className="live_demo"><a href="https://anassmoustaid.github.io/Design_Anime_JS/"  target="blank">Live Demo</a></button>
                    </div>
                    
                    
                    
                </article>
                <article className="portfolio_section ">
                    
                    <h3>Random users project using React</h3>
                         <img src={users} alt="..."/>
                         
                    <div className="portfolio_item">
                        
                        <button className="github"><a href="https://github.com/AnassMoustaid/random_users"  target="blank">Github</a></button>
                        <button className="live_demo"><a href=" https://anassmoustaid.github.io/random_users/"  target="blank">Live Demo</a></button>
                        </div>
                    
                    
                </article>
                </div>

                <Loader type="pacman" />
                </section>
    )
}

export default Work;