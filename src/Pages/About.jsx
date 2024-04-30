import React from 'react'
import './CSS/About.css'
import banner4 from '../Components/Assets/banner1.png'
import banner5 from '../Components/Assets/a6.jpg'
import video from '../Components/Assets/video.mp4'
import Feature from '../Components/Features/Feature'

const About = () => {
  return (
    <div className='about'>
         <div className='about-header'>
        <h2>#AboutUs</h2>
    <p>All imformation about our website and App  </p>
    </div>
    <div className='about-image'>
        <img src={banner4} alt="" />
    </div>
    <div className='section-p1'>
    <img src={banner5} alt="" />
    <div>
        <h2>who We Are</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis vitae, et voluptates libero architecto porro placeat, officia perferendis vero in quas voluptate repellat voluptatem ipsum pariatur nulla aspernatur, doloribus eaque laboriosam unde. Accusantium aperiam voluptatem possimus adipisci architecto, atque similique rem vel asperiores dolorum et temporibus, maiores necessitatibus velit. ad sunt deserunt error dolorem excepturi consectetur neque quia, assumenda odio fugit.</p>
    <abbr title="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem laudantium accusantium tenetur dicta, esse ipsam vitae quod no</abbr>
     
     
       <marquee  loop="-1" scrollamout="5" width="100%" bgcolour="#000">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum hic amet ab non? Enim, voluptatibus nisi, incidunt assumenda reiciendis unde architecto maxime esse quis in magni consequatur doloremque dolorem temporibus.</marquee>
</div>
    </div>
    <div className='about-app'>
    <h1>Download Our <a href=""> App</a></h1>
    <div class="video">
    <video src={video} loop autoPlay muted  ></video>  
    </div>
    <Feature/>
    </div>


    

    </div>
  )
}

export default About