import React from 'react'

const MonsterDetails = ({details = {}}) => {  // setting it to an empty object so that the Details section renders empty

    const imgLink = `https://www.dnd5eapi.co${details.image}`


    return ( 
        <div> 
            {details && details.name &&  // had to add 2 logical conditions (because just for null and undefined wasn't enough))
            <>
                <p>MonsterDetails: {details.name}</p>
                <p>Type:{details.type} - {details.alignment} - {details.size}  </p>
                <p>Stats: {details.strength}`, Dexterity: {details.dexterity}, Constitution: {details.constitution}, Intelligence: {details.intelligence}, Wisdom: {details.wisdom}, Charisma: {details.charisma}</p>
                <img src={imgLink}  height="300px" width="300px"/>
            </>
        }
        </div>
        
    )
    
    
}

export default MonsterDetails