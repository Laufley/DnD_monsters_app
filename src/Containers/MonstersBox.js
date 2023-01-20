import React, {useState, useEffect} from 'react'

const MonstersBox = () => {

    const [monsters, setMonsters] = useState([]);

    
    useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/monsters')
        .then(response => response.json())
        .then(monsters => setMonsters(monsters))
    }, []);

    console.log("i fetched the monsters!")
}
export default MonstersBox

