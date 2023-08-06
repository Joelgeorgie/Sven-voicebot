import React, { useState } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Contact from './Contact';
import Navbar from './Navbar';
import About from './About';




const Home = () => {
  const [output, setOutput] = useState(null);
  const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

 

  


  async function generateText() {
    const options={
      method:'POST',
      
      body: JSON.stringify({
          
          messages: [{role: "user",content: transcript}],
         
      }),
      headers: {
        "Content-Type": "application/json"
    } 
    }
    
    try {
      const response= await fetch("http://localhost:8000/completions",options);
      const data= await response.json()
      setOutput(data.choices[0].message.content)
      console.log(data.choices[0].message.content);

    } catch (error) {
      console.error("Error generating text:", error.message);
    }
  }

 
  

  
 const  startlistening = () => {
    SpeechRecognition.startListening({ language: 'en-IN' });
    
   
  };

  if (!browserSupportsSpeechRecognition) {
    return <div>Speech recognition is not supported by your browser.</div>;
  }

  return (
    <div>
      <Navbar/>
      <div className='h-[screen] w-[60%] mx-auto text-white flex flex-col justify-between'>
        <div className={`w-1/6 mx-auto mt-20  ${listening ? 'border-4 border-[#2685bd] border-dashed p-10 border-spacing-5 ease-in-out duration-1500' : 'p-4'} rounded-full ease-in-out duration-300 `}>
          <FaMicrophone
            size={65}
            color={listening ? '#3274a1' : '#2685bd'}
            className='w-full h-[50%] cursor-pointer'
            onClick={listening ? SpeechRecognition.stopListening : startlistening}
          />
        </div>
        <div className='text-center mx-auto text-xl w-full h-20 m-10'>{ transcript}</div>

        <button className='w-[40%] h-[50px] text-white mx-auto text-xl bg-[#2685bd] cursor-pointer rounded-md border-gray-200 m-10' onClick={generateText}>EXTRACT</button>

        <div className='text-justify text-xl w-full h-1/2  m-5 border border-gray-600 p-10'>
          {output}
        </div>
      </div>
     <About/>
    <Contact/>
    </div>
  );
};

export default Home;