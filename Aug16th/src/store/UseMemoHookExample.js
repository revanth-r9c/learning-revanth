import {useState, useMemo} from "react";
const UseMemoHookExample = ()=>{
    const [increment, setIncrement] = useState(0);
    const [initialVal, setInitialVal]=useState(1);
    console.log("component function called again");

    const complexCalculation = (mul = 1)=>{
        console.log(`initial sum value ${mul}`);
        for(let i = 1;i<4;i++){
            mul=mul*i;
        }
        console.log("mul calculated again = ",mul);
        return mul;
    };
    const increase=()=>{
        setIncrement(increment+1);
    };
    const increaseInitialVal=()=>{
        setInitialVal(initialVal+1);
    }
    const optimizedComplexCalculation = useMemo(()=>complexCalculation(initialVal),[initialVal]);

    return (
        <div>
            <button onClick={increase}>Increase</button>
            <div>{increment}</div><br/>
            <button onClick={increaseInitialVal}>increase initial val</button>
            <div>initial val={initialVal}</div>
            <p>value={optimizedComplexCalculation}</p>
        </div>
    );
}

export default UseMemoHookExample;