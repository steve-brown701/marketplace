import React from 'react'

const Household = (props) => {
  const members = props.householdData.map((member, index) => {
    return (  
      <div key={index} className="container">
        <h3><b>{member.name}</b></h3> 
        <p><b>Description: </b>{member.desc}</p> 
        <p><b>Favorite fruit: </b>{member.fruit}</p>
        <button className="house-button" onClick={() => props.editMember(index)}>Edit</button>
        <button className="house-button" onClick={() => props.removeMember(index)}>Delete</button>
      </div>
    )
  })

  return <div className="card">{members}</div> 
}

export default Household