import { useState } from "react";


const quizData = [

  {
      question: 'who are the Queen & Queen of the castle? ',
      a: 'Trinity and Nader',
      b: 'Kiara and Kero',
      c: 'Goon and Malik',
      d: 'Eyad and 3aneed',
      correct: 'c'
  },
  {
      question: 'how many fifis do we have?',
      a: '2',
      b: '3',
      c: '4',
      d: '5',
      correct: 'd'
  },
  {
      question: "Who is my baby? ",
      a: 'Trinity is my baby',
      b: 'Malik is my baby',
      c: 'Katana is my baby',
      d: 'Goon is my baby',
      correct: 'a'
  },
  {
      question: 'will you marry me? ',
      a: 'yes',
      b: 'yes',
      c: 'yes',
      d: 'yes',
      correct: 'a' & 'b' & 'c' & 'd'
  }
];



function App() {
  
  const [index, setIndex]=useState(0)
  const [selected, setSelected]=useState('')
  const [score, setScore]=useState(0)
  const [show, setShow]=useState(false)

  const submit= ()=>{
   //check the answer 
   const answer = quizData[index].correct
   
   if(answer == selected){
      setScore(score+1)
   }


   if (index == 3 ){
     setShow(true)
   }else{
    setIndex(index+1)

   }

  }

  return (
   <div className="bg-green-900 h-screen flex items-center justify-center">
     <div className="w-[400px] h-[400px] bg-gray-500 rounded-lg shadow-lg p-10 " >
       {show == true? 
       <div>
        <h1>your score is {score}</h1>
       </div>
       : 
       <>
       <h1 className="text-center">{quizData[index].question}</h1>
       <ul className="p-10 flex flex-col gap-5">

        <li className="flex  gap-3 items-center">
          <input type="radio" name="q" onChange={ (e) => {
             if(e.target.checked) setSelected('a')
          }}/> 
          <label htmlFor="a">{quizData[index].a}</label>
        </li>

        <li className="flex  gap-3 items-center">
          <input type="radio" name="q" onChange={ (e) => {
             if(e.target.checked) setSelected('b')
          }}/> 
          <label htmlFor="b">{quizData[index].b}</label>
        </li>

        <li className="flex  gap-3 items-center">
          <input type="radio" name="q" onChange={ (e) => {
             if(e.target.checked) setSelected('c')
          }}/> 
          <label htmlFor="c">{quizData[index].c}</label>
        </li>

        <li className="flex  gap-3 items-center">
          <input type="radio" name="q" onChange={ (e) => {
             if(e.target.checked) setSelected('d')
          }}/> 
          <label htmlFor="d">{quizData[index].d}</label>
        </li>
       </ul>

       <button className="bg-red-800 text-white w-full py-2 rounded-md hover:opacity-80 transition-all" onClick={submit}>submit</button>

        </>}


     </div>
   </div>
  );
}

export default App;
