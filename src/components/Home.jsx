import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const handlebtn=()=>{
        navigate('/questions')
    }
  return (
    <div className='cover'>
      <div className="round"><h1 className='quiz'>Quiz</h1></div>
      <button onClick={handlebtn} className='btn'>Start</button>
    </div>
  )
}

export default Home
