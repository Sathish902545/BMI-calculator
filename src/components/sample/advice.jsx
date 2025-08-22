import react,{useEffect, useState} from "react";
import './advice.css';

export const AdviceApp = () => {

    const [advice,setAdvice] = useState('pleace click button to get advice')
    const [count,setCount] = useState(0)

  async  function getAdvice () {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json();
    setAdvice(data.slip.advice)
    setCount((curr)=>curr+1)
    }

    useEffect(function(){
        getAdvice();
    },[])

    return(
        <div>
            <h1>{advice}</h1>
            <button onClick={getAdvice}>Get Advice</button>
            <Counter count={count}/>
            {/* <p>You have read <b>{count}</b> pieces of advice</p> */}
        </div>

    );
};

export const Counter = (props) => {
    return(
        <p>You have read <b>{props.count}</b> pieces of advice</p>
    )
}