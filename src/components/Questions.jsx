import React,{ useState }  from 'react'
import QuestionBox from './QuestionBox'
import question from "./question";
import { Link } from "react-router-dom";


const Questions = ({answer, setAnswer}) => {

    const [number,setNumber] =useState(0)

    const handleAnswer=(id,ans)=>{
        let temp = [...answer];
        temp[id]=ans;
        setAnswer([...temp])


        function Reset() {
          let arr1 = question[id].background;
          arr1 = ["white", "white", "white", "white"];
          let arr2 = question[id].color;
          arr2 = ["black", "black", "black", "black"];
          question[id].background = arr1;
          question[id].color = arr2;
        }
        Reset();
        
        question[id].background[ans] = "green";
        question[id].color[ans] = "white";
    }
    const handleIncrement=()=>{
        if(number === 4) return;
        setNumber(number+1)
        
    }
  return (
    <section className='cover'>
       <Link to="/solution" style={{ all: "unset" }}>
        <button className="submit">Submit</button>
      </Link>
        <QuestionBox question={question[number]} handleAnswer={handleAnswer} />
        <div className="buttons">
        
        <button className='btnn' onClick={handleIncrement}>Next</button>
  
        </div>        
    </section>
  )
}

export default Questions