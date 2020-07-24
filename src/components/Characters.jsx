import React, {useState, useEffect} from 'react'
import Modal from './Modal'
import './Characters.css'

export default function Characters (){
    const [characters, setCharacters] = useState({
        data: [],
        filterByName: [],
        modal: null
      })

    useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => setCharacters({...characters, data: data.results}))
        .catch(err => console.log('fetch error: ', err))
    }, [])

    const filterByName = (e) => {
        const filter = characters.data.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setCharacters({
            ...characters,
            filterByName: filter
        })
        console.log('El filter ->', characters.filterByName)
    }

    return (

        <div className="characters">
            <div className="characters-settings">
                <div className="settings-search">
                    <input type="text" placeholder="Search character..." onChange={filterByName}/>
                </div>
                <div className="settings-filter">
                    <p>Filter By: </p>
                    <select name="filter">
                        <option value="none"></option>
                        <option value="status">Status</option>
                        <option value="species">Species</option>
                        <option value="gender">Gender</option>
                        <option value="origin">Origin</option>
                    </select>
                </div>
            </div>
            <div className="characters-component">
                {
                    characters.filterByName.length > 0 ? characters.filterByName.map((item, index) => {
                        return (
                            <div className="character-img" key={index} onClick={() => {
                                setCharacters({
                                    ...characters,
                                    modal: characters.filterByName.findIndex(element => element.id === item.id)
                                })
                            }}>
                                <img src={item.image} alt="[Image_character]" ></img>
                            </div>
                        )
                    })
                    :
                    characters.data.map((item, index) => {
                        return (
                            <div className="character-img" key={index} onClick={() => {
                                setCharacters({
                                    ...characters,
                                    modal: characters.data.findIndex(element => element.id === item.id)
                                })
                            }}>
                                <img src={item.image} alt="[Image_character]" ></img>
                            </div>
                        )
                    })
                }
            </div>
            {
                characters.modal !== null &&
                    <Modal
                        characters={
                            characters.filterByName.length > 0 ? characters.filterByName
                            : characters.data
                        }
                        positionInital={characters.modal}
                        onClose={() => setCharacters({...characters, modal: null})}
                    />
            }
        </div>
    )
}
