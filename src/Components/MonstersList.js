import React from 'react'
import MonsterItem from './MonsterItem'

const MonstersList = ({monsters, onMonsterClicked}) => {

    const listOfMonsters = monsters.map((monster, index) => {

    return <MonsterItem key={index} monster={monster} onMonsterClicked={onMonsterClicked}></MonsterItem>

    })

    return (
        <div className='monster-list'>
            <ul>
            {listOfMonsters}
            </ul>
        </div>
    )
}

export default MonstersList

