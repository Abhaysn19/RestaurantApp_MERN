import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
const About = () => {
  return (
    <section className='about' id="about">
<div className="container">
    <div className="banner">
        <div className="top">
            <h1 className="heading">About Us</h1>
            <p> only thing we are serious about is food.</p>
        </div>
        <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, et sapiente dolorem ea consequatur maxime ullam soluta aspernatur, explicabo blanditiis quos voluptatem. 
            Esse ipsa aperiam provident saepe praesentium facere quas explicabo quia in repudiandae tempora inventore repellat natus voluptatibus eaque fuga reprehenderit ipsum beatae, 
            modi enim sint ea maiores quam.
        </p>
        <Link to = {"/"}>Explore Menu{" "} 
            <span>
                <HiOutlineArrowNarrowRight/>
            </span>
        </Link>
    </div>
    <div className="banner">
        <img src="/about.png" alt="about" />
    </div>
</div>
    </section>
  )
}

export default About