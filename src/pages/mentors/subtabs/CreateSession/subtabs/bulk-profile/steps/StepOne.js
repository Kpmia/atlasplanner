import { LinearProgress } from "@material-ui/core";
import React, { useState } from "react";
import { Button, Table } from "reactstrap";
import { FaqAccordion } from "../../../components/FaqAccordion";
import { StyledDropzone } from "../../../components/FileDropZone";


export const StepOne = ({
    details,
    handleDetails, 
    getNextStep,
    ...restProps
}) => {

    const [files, setFiles] = useState(details.file_pond)
    const [loading, isLoading] = useState(false)

    const addFiles = (files) => {
        setFiles(files)
    };

    const submitFile = async() => {
        isLoading(true)
        const file = new FormData()

        setTimeout(() => {
            isLoading(false)
            // file.append('file', files[0])
            handleDetails('files', files[0])
            handleDetails('file_pond', files)
            getNextStep(2)
        }, 3000)
    };

    return (
        <div>
        {
            loading ? 
                <div>
                    <LinearProgress style={{color: '#f50057'}} color="secondary" />
                    <br></br>
                </div>
            :
                <div>
                    <div style={{borderBottom: '1px solid rgb(29 27 27 / 17%) '}}>
                        <p className="formStep" style={{marginBottom: 10}}> Bulk Upload Profiles </p>
                    </div>
                    <br></br>
                    <FaqAccordion />
                    <br></br>
                    <StyledDropzone files={files} addFiles={addFiles} />
                <Button style={{background: 'black'}} disabled={files.length == 0 ? true : false} onClick={submitFile} className="float-right profile-creation-btn"> Next </Button>
            </div>
            }
        </div>
    )
}