import React from 'react'

const MonsterDetails = ({details = {}}) => {  // setting it to an empty object so that the Details section renders empty

    const imgLink = `https://www.dnd5eapi.co${details.image}`


    return ( 
        <div className='monster-details'> 
            {details && details.name &&  // had to add 2 logical conditions (because just for null and undefined wasn't enough))
            <>
                <div className='details'>
                    <ul className='stats'>
                        <li><strong>Name:</strong> {details.name} </li>
                        <li><strong>Type: </strong>{details.type}</li>
                        <li><strong>Alignment: </strong>{details.alignment}  </li>
                        <li><strong>Size: </strong>{details.size} </li>
                        <li><strong>Stats:</strong>  
                            <ul>
                                <li><strong>Strength:</strong>{details.strength}</li>
                                <li><strong>Dexterity:</strong>{details.dexterity}</li>
                                <li><strong>Constitution:</strong>{details.constitution}</li>
                                <li><strong>Intelligence:</strong>{details.intelligence}</li>
                                <li><strong>Wisdom: </strong>{details.wisdom}</li>
                                <li><strong>Charisma:</strong>{details.charisma}</li>
                            </ul>
                        </li>
                    </ul>
                    <img className='image' src={imgLink}  height="300px" width="300px"/>
                </div>
                
            </>
        }
        </div>
        
    )
    
    
}

export default MonsterDetails