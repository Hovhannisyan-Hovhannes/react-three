import React, {useState} from "react";

const SumNumbers = ({numbers})=>{
    const[sum,setSum] = useState(null);

    const calculateSum = () => {
        const total = numbers.reduce((acc,num) => acc + num, 0) 
        setSum(total);
    };
    return(
        <div>
             {sum !== null &&(<p>Թվերի գումարը հետևյալն է.  {sum}</p>)}
            <button onClick={calculateSum}>Հաշվել գումարը</button>
            <hr />
            
        </div>
    )
}
export default SumNumbers;