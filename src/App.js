import React, { Component } from 'react';

// Components
import EditToggle from './Components/EditToggle';
import ColorChanger from './Components/ColorChanger';
import SizeChanger from './Components/SizeChanger';
import FamilyChanger from './Components/FamilyChanger';
import TextContainer from './Components/TextContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'MonoSpace',
      allowEdit: 'true'
    }
  }

  updateColor = (color) => {
    console.log(color)
    this.setState({
      fontColor: color
    })
  }

  updateSize = (size) => {
    this.setState({
      fontSize: size
    })
  }

  updateFont = (font) => {
    console.log(font)
    this.setState({
      fontFamily: font
    })
  }

  updateEditStatus = (status) => {
    this.setState({
      allowEdit: status
    })
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={this.updateEditStatus}/>
          <ColorChanger update={this.updateColor} allowEdit={this.state.allowEdit}/>
          <SizeChanger update={this.updateSize} allowEdit={this.state.allowEdit}/>
          <FamilyChanger update={this.updateFont} allowEdit={this.state.allowEdit} />
        </div>
        <div className="textArea">
          <TextContainer fontColor={this.state.fontColor} fontSize={this.state.fontSize} fontFamily={this.state.fontFamily}/>
        </div>
      </div>
    )
  }
}

export default App;
