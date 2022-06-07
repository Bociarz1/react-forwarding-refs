import React, {Component} from 'react'
import ForwardRefInput from './ForwardRefInput';

class ForwardRefParentInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef()
  }

  handleClick = () =>   {
    this.inputRef.current.focus()
    console.log(this.inputRef)
  }

  render() { 
    return ( 
      <>
        <ForwardRefInput ref={this.inputRef}/>
        <button onClick={this.handleClick}>Click to focus</button>
      </>
     );
  }
}
 
export default ForwardRefParentInput;