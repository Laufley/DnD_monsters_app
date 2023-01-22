import React, {useEffect, useRef, useState} from 'react'
import music from '../music.jpeg'


const Music = ({musicItem}) => {

    const [isPlaying, setIsPlaying] = useState(false)
    const song = useRef(new Audio(musicItem))

    const handleMusic = () => {
        setIsPlaying(!isPlaying)
    }
    
    useEffect(() => {

        if (isPlaying) {
            console.log('it tickles!')
            song.current.play()
        }
        else {
            console.log('finneee i\'ll stop')
            song.current.pause()
        }
        
    }, [isPlaying])
    


    return (
        <div>
            <img src={music} height='50px' width='50px' onClick={handleMusic} ></img>

        </div>
    )

}


export default Music