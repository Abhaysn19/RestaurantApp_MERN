import React from 'react'
import {data} from "../Pages/restApi.json";
const Team = () => {
  return (
    <section className='team' id='team'>
<div className="container">
    <div className="heading-section">
        <h1>OurTeam</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequatur facere vero nulla natus itaque suscipit modi ratione optio, 
           sint recusandae praesentium necessitatibus eveniet at ab quisquam illum quod perferendis.</p>
    </div>
    <div className="team_container">
        {
            data[0].team.map(element => {
                return (
                    <div className="card" key={element.id}>
                        <img src={element.image} alt={element.name} />
                        <h1>{element.name}</h1>
                        <p>{element.designation}</p>
                    </div>
                )
            })
        }
    </div>
</div>
    </section>
  )
}

export default Team