import React, {useState, useEffect} from 'react'
import MonsterDetails from '../Components/MonsterDetails';
import MonstersList from '../Components/MonstersList';

const MonstersBox = () => {

    const [monsters, setMonsters] = useState([]);
    const [monsterClicked, setMonsterClicked] = useState('')

    
    useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/monsters')
        .then(response => response.json())
        .then(monsters => setMonsters(monsters.results))
    }, []);

    const onMonsterClicked = (monster) => {
        setMonsterClicked(monster)
    }



    return (
        <div>
    <MonstersList monsters={monsters} onMonsterClicked={onMonsterClicked}/>
    <MonsterDetails details={monsterClicked}/>

    </div>
    )


    
}
export default MonstersBox

