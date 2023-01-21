import React from 'react'

const MonsterItem = ({monster, onMonsterClicked}) => {

    const handleClick = () => {
        fetch('https://www.dnd5eapi.co' + monster.url)
        .then(response => response.json())
        .then(data => onMonsterClicked(data))
    }
    return (
        <ul>
            <li onClick={handleClick}>{monster.name}</li>
        </ul>
    )
}

export default MonsterItem



