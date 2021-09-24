import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';
 
export class HTMLEditor extends Component {
  state = {
    value: this.props.initialState.length != 0? this.props.initialState : RichTextEditor.createEmptyValue()
  }

  readOnly = this.props.readOnly
  setFormat = this.props.setFormat
 
  onChange = (value) => {
    this.setState({value});
    this.setFormat(false, value.toString('html'))
    this.setFormat(true, value)
  };
 
  render () {

    console.log(this.state.value)

    const toolbarSettings = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    };

    return (
      <RichTextEditor
        className="text-editor"
        readOnly={this.readOnly}
        toolbarSettings={toolbarSettings} 
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}