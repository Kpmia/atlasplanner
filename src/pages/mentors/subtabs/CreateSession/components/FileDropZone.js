import React, {Component, useMemo} from 'react';
import 'filepond/dist/filepond.min.css'
import { FilePond, File, registerPlugin } from 'react-filepond'


export class StyledDropzone extends Component {
    constructor(props) {
      super(props);
      this.state = {
        files: this.props.files 
      };
    }

    addFiles = this.props.addFiles
  
    handleInit() {
      console.log("FilePond instance has initialised", this.pond);
    }
  
    render() {
      console.log(this.state.files)
      return (
        <div className="App">
          <FilePond
            ref={ref => (this.pond = ref)}
            files={this.state.files}
            allowMultiple={true}
            allowReorder={true}
            
            maxFiles={1}
            name="files" 
            oninit={() => this.handleInit()}
            onupdatefiles={fileItems => {
              this.addFiles(fileItems.map(fileItem => fileItem.file));
              this.setState({
                files: fileItems.map(fileItem => fileItem.file)
              });
            }}
          />
        </div>
      );
    }
  }