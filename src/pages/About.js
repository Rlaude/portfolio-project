import React from 'react';
import Beach from '../assets/beach.jpg';
import '../styles/About.css';

const About = () => {
  return (
    <div className='about'>
        <div className='aboutTop'
        style={{ backgroundImage: `url(${Beach})`}}
        ></div>
        <div className='aboutBottom'>
            <h1> About Us</h1>
            <p>Lorem ipsum dolor sit amet, laudem suscipit ea ius, ea per offendit efficiantur, an pri laudem eripuit. Pri no vocent malorum patrioque. Sit eius ullum fabulas ea. Nam adipisci delicatissimi ad, nam ex scripta accusata. Mel ad corpora phaedrum, sed patrioque expetendis definitiones cu, eum an utinam melius oportere.</p>
        </div>
    </div>
  )
}

export default About