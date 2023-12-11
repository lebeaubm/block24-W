import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'
import './test.css'

function App() {

  const [puppies, setPuppies] = useState(puppyList)  //puppylist from data.js
  //saved in puppies. We can use puppies as our puppyList
  //console.log(puppies) 
  //an arry of puppies

  const [featPupId, setFeatPupId] = useState(null)




  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup)
  //Returns pup that matches ID



  //Goes through list of puppies.
  //When a puppy is clicked
  return (
    <>
      <div className="App">
        {
          puppies.map((puppy) => {
            return (
              <p key={puppy.id} onClick={() => { setFeatPupId(puppy.id) }}>{puppy.name} </p>
            )
          })
        }

        {featPupId && (
          <div className="info-box">
            <h2>{featuredPup.name}</h2>
            <ul >
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}

      </div>

    </>
  )
}

export default App
