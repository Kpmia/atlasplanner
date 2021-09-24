import React from "react";
import { StepFour } from "./StepFour";
import { StepOne } from "./StepOne";
import { StepThree } from "./StepThree";
import { StepTwo } from "./StepTwo";


export function TabManager(step, orgId, eventId, details, handleDetails, getNextStep) {
    switch (step) {
        case 1:
           return <StepOne
                        details={details}
                        handleDetails={handleDetails}
                        getNextStep={getNextStep}
                    />
        case 2:
            return <StepTwo
                        orgId={orgId}
                        eventId={eventId}
                        details={details}
                        handleDetails={handleDetails}
                        getNextStep={getNextStep}
                    />
        case 3:
            return <StepThree
                        orgId={orgId}
                        eventId={eventId}
                        details={details}
                        handleDetails={handleDetails}
                        getNextStep={getNextStep}
                    />
        case 4:
            return <StepFour
                        orgId={orgId}
                        eventId={eventId}
             />
        default:
            return;
    }
}