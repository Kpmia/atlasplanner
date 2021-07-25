import React from "react";
import { StepFive } from "../StepFive";
import { StepFour } from "../StepFour";
import { StepOne } from "../StepOne";
import { StepSix } from "../StepSix";
import { StepThree } from "../StepThree";
import { StepTwo } from "../StepTwo";


export function StepManager(stepNum, sessionInfo, memberInfo, handleChange, stepChange) {
    switch (stepNum) {
        case 1:
            return <StepOne 
                        sessionInfo={sessionInfo}
                        memberInfo={memberInfo}
                        handleChange={handleChange} 
                        stepChange={stepChange} 
                    />
        case 2:
            return <StepTwo
                        sessionInfo={sessionInfo}
                        memberInfo={memberInfo}
                        handleChange={handleChange} 
                        stepChange={stepChange} 
                    />
        case 3:
            return <StepThree
                        sessionInfo={sessionInfo}
                        memberInfo={memberInfo}
                        handleChange={handleChange} 
                        stepChange={stepChange} 
                    />
        case 4: 
            return <StepFour
                        sessionInfo={sessionInfo}
                        memberInfo={memberInfo}
                        handleChange={handleChange} 
                        stepChange={stepChange} 
                    />
        case 5:
            return <StepFive
                        sessionInfo={sessionInfo}
                        memberInfo={memberInfo}
                        handleChange={handleChange} 
                        stepChange={stepChange} 
                    />
        case 6:
            return <StepSix
                        sessionInfo={sessionInfo}
                        memberInfo={memberInfo}
                        handleChange={handleChange} 
                        stepChange={stepChange} 
                    />
    }
}