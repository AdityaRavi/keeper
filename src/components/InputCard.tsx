import React from 'react'


const InputCard = ({value, onChange, onSubmit}) => {
  const handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void = (e) => {
    if (e.keyCode === 13){
      onSubmit(e)
    }
  }
  return <div>
    <input type="text" value={value} onChange={onChange} onKeyDown={handleKeyDown}/>
  </div>
}

export {
  InputCard
}