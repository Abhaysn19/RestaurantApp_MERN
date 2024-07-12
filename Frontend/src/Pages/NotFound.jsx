import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
<section className='notFound'>
  <div className="container">
    <img src="/notFound.svg" alt="NotFound" />
    <h1>Looks like youre lost</h1>\
    <p>We cant seem to find you the page you are looking for</p>
    <Link to={'/'}>Back to Home {" "} <span><HiOutlineArrowNarrowRight/></span></Link> 
  </div>
</section>  )
}

export default NotFound