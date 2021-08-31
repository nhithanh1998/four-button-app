import {useEffect, useState} from 'react'
import {COLOR_ENUM, TYPE_ENUM} from './enums'
import {Button} from './components/Button/Button'
import {fetchCurrentColor, goNext, resetColor} from './apis'

export const App = () => {
  const [selectedColor, setSelectedColor] = useState(COLOR_ENUM.BLUE)

  useEffect(() => {
    fetchCurrentColor().then(rs => {
      setSelectedColor(rs.color)
    })
  }, [])

  const handleClickCircleButton = async (color) => {
      const data = await goNext({color: color})
      if(data.color) {
        setSelectedColor(color)
      } else {
        alert(data.message)
      }
  }

  const handleClickResetButton = async () => {
    const {color} = await resetColor()
    setSelectedColor(color)
  }
  return (
  <div class="flex flex-row">
    <div class="flex-col mx-7 py-10 place-self-center">
      <Button 
        name= {COLOR_ENUM.BLUE} 
        type={TYPE_ENUM.CIRCLE}
        isActive = {selectedColor === COLOR_ENUM.BLUE ? true : false}
        handleClick={handleClickCircleButton}
      />
    </div>
    <div div class="flex-col mx-7">
      <div className="mb-10">    
        <Button 
          name={COLOR_ENUM.GREEN} 
          type={TYPE_ENUM.CIRCLE}
          isActive = {selectedColor === COLOR_ENUM.GREEN ? true : false}
          handleClick={handleClickCircleButton}

          />
    </div>
    <Button 
    name={COLOR_ENUM.YELLOW} 
    type={TYPE_ENUM.CIRCLE}
    isActive = {selectedColor === COLOR_ENUM.YELLOW ? true : false}
    handleClick={handleClickCircleButton}
    />
    </div>
    <div class="flex-col mx-7 py-10 place-self-center border-2 border-black">
      <Button name="Reset"
        handleClick ={handleClickResetButton} 
        type={TYPE_ENUM.RECTANGEL}/>
  </div>
  </div>)

}