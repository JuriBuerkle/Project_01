import {useState} from 'react'
import styles from './SpaceMissionForm.module.css';

export default function SpaceMissionForm() {
    const [AstronautName, setAstronautName] = useState("");
    const [PlanetName, setPlanetName] = useState("");
    
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>{AstronautName} is headed to {PlanetName}</h2>
         <h4>astronaut</h4>
          <select name="austronautName" id="austronautName" onChange={(e) => setAstronautName(e.target.value)}>  <option value="who">who`s flying</option>
              <option value="Ilon Musk">Ilon Musk</option>
              <option value="Юрий Гагарин">Юрий Гагарин</option>
              <option value="Neil Armstrong">Neil Armstrong</option>
              <option value="Aleksey Leonov">Aleksey Leonov</option>
              <option value="Valentina Vladimirovna">Valentina Vladimirovna</option>
            </select>
          {/* <input
            type="text"
            value={AstronautName}
            onChange={(e) => setAstronautName(e.target.value)}
            /> */}
          <div>
          <h4> destination </h4>
          <select name="planets" id="planets" onChange={(e) => setPlanetName(e.target.value)}>  <option value="where">where is it flying</option>
              <option value="Venus">Venus</option>
              <option value="Mars">Mars</option>
              <option value="Jupiter">Jupiter</option>
              <option value="Saturn">Saturn</option>
            </select>
            {/* <input
            type="text"
            value={PlanetName}
            onChange={(e) => setPlanetName(e.target.value)}
          /> */}
          </div>
    </div>
  )
}
