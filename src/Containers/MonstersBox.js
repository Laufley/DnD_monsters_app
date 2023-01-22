import React, {useState, useEffect} from 'react'
import MonsterDetails from '../Components/MonsterDetails';
import MonstersList from '../Components/MonstersList';
import Music from '../Components/Music';
import music from '../music.jpeg'

const MonstersBox = () => {

    const [monsters, setMonsters] = useState([]);
    const [monsterClicked, setMonsterClicked] = useState('')
    const [searchValue, setSearchValue] = useState("")


    const [currentPage, setCurrentPage] = useState(1)  // for pagination
    const monstersPerPage = 20



    const postsIndex = (currentPage * monstersPerPage) - monstersPerPage // this indext will tell the next function the number posts we want to load on the next page. first time i run, this result is 0. On the second run, the pageNumber is 2 which makes the restult catch the next 20 items
    const paginatedMonsters = monsters.slice(postsIndex, monstersPerPage + postsIndex)// this grabs the posts to show per page. It starts at the index, and then moves up to 20 posts which is the postsPerPage. Splice returns a list
                                                                                        // had to use slice instead of splice because splice modifies the original and slice creates a copy of the original array. using splice gave 2 of errors!
                                                                                        // 1. Return button triggered the NEXT ITEMS button instead. Reasoning: with splice, it removes the selected items. SO the items were removed from the original list and that's why the return button didnt work and only moved the list forward.
                                                                                        // 2. Clicking on any monster triggered Onclick details AND also next page button. Reasoning: When clicked on next button which uses splice, the date in splice has been removed from the original array(it's been modified). So. when the DOM is reloaded, the content it's trying to pull doesnt exist from the original array anymore and the first items are the ones that have not been removed yet. That's why it has the same effect as the Next button click.
    useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/monsters')
        .then(response => response.json())
        .then(monsters => setMonsters(monsters.results))
    }, []);

    const onMonsterClicked = (monster) => {
        console.log("It tickles!")
        setMonsterClicked(monster)
    }

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1)
            
    }

    const handlePreviousPage = () => {
        if (currentPage === 1) {
            return
        }
        else {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleForm = (evt) => {
        setSearchValue(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const filteredMonsters = monsters.filter((monster) => searchValue.toLowerCase() == monster.name.toLowerCase())      
        if(filteredMonsters.length > 0){
        fetch('https://www.dnd5eapi.co' + filteredMonsters[0].url)
        .then(response => response.json())
        .then(data => setMonsterClicked(data))
    }
    }

    return (
        <>
        <div className='header'>
            <h1>🔥 D&D Monster archives</h1>
            <Music></Music>
        </div>
        
        <div className='main-container'>

            <form className='search-by-name' onSubmit={handleSubmit}>
                <label>Search by Name </label>
                <input className='input' type="text" onChange={handleForm} value={searchValue}></input>
                <button className='button-search' type='submit'>Search</button>
            </form>

            <MonstersList monsters={paginatedMonsters} onMonsterClicked={onMonsterClicked}/>
            
            <div className='.button-container '>
            <button className='button-previous' onClick={handlePreviousPage}> « Previous page</button>
            <button className='button-next' onClick={handleNextPage}>Next Page »</button>
            </div>

            <MonsterDetails details={monsterClicked}/>
        </div>

        <div className='footer'> project: API fetching D&D samples for REACT app</div>
        </>
    )    
}
export default MonstersBox



  //PAGINATION//
    //need button handle previous: needs current page & condictional logic to reduce
    //need button handle next: needs current page & conditional logic to increase
    //determina how many posts per page
    //determine how many posts next page will start loading from and stop loading from (splice)
    //connect the posts to the retrieved API data (monsters)
