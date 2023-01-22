import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import './App.css'

function App() {

  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);
  const generateImage = async () => {  
   const response =   await openai.createImage({
    prompt: prompt,
    n: 1,
    size: "1024x1024"
  });
setResult(response.data.data[0].url);
}
  return (
    <div className="app-main">
    <h3>Generate an Image</h3>
    <input type="text" className="app-input" placeholder="Type something.." onChange={ (e) => {setPrompt(e.target.value)}}/>
<button className="app-submit" onClick={generateImage}>Generate Image</button>
{ result.length > 0 ?<img className='result-image' src={result || ""} alt="" /> : <></>}

    </div>
  )
}

export default App
