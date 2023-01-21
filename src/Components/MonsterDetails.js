import React from 'react'

const MonsterDetails = ({details}) => {

    const imgLink = `https://www.dnd5eapi.co${details.image}`


    return (
        <div>
            <p>MonsterDetails: {details.name}</p>
            <p>Type:{details.type} - {details.alignment} - {details.size}  </p>
            <p>Stats: {details.strength}`, Dexterity: {details.dexterity}, Constitution: {details.constitution}, Intelligence: {details.intelligence}, Wisdom: {details.wisdom}, Charisma: {details.charisma}</p>
            <img src={imgLink}  height="300px" width="300px"/>
        </div>
    )
    
    
}

export default MonsterDetails