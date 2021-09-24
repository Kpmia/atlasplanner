import React, { useState } from "react";
import { Button } from "reactstrap";
import { HTMLEditor } from '../../../components/HTMLEditor'


export const StepThree = ({
    handleDetails, 
    getNextStep,
    ...restProps
}) => {
    const [emailFormat, setFormat] = useState("")

    const submitEmail = () => {
        getNextStep();
        
    };
    
    return (
        <div>
            <div className="outline-html">
                <HTMLEditor setFormat={setFormat} />
            </div>
            <br></br>
                <Button onClick={submitEmail} style={{background: 'black', color: 'white'}} className="email-preview-btn"> Next </Button>
                <Button style={{color: 'black', background: 'none', marginRight: '10px', border: '1px solid black'}} className="email-preview-btn"> Preview </Button>
        </div>
    )
}