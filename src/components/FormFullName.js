import React, {Component} from 'react';

export class FormFullName extends Component {
  state = {
    fullNameError: ''
  }

  //Check if first name and last name fields are valid
  validate = () => {
    let isError = false;
    const errors = {
      fullNameError: ''
    };

    if(this.props.firstName.length === 0 || this.props.lastName.length === 0) {
      isError = true;
      errors.fullNameError = 'Please enter full name.';
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  }

  //Move on if no errors in current state
  continue = e => {
    e.preventDefault();
    const err = this.validate();

    if (!err) {
      this.props.nextStep();
    }
  };

  render () {
    const {onChange, firstName, lastName} = this.props
    return (
      <div className='footer'>
        <div className='content'>
          <div className='header'><h3 className='long'>almost done! please enter your first and last name.</h3></div>
          <div className='form'>
            <input id='firstName' type='text' name='firstName' placeholder='First Name' onChange={onChange} value={firstName}></input>
            <input id='firstName' type='text' name='lastName' placeholder='Last Name' onChange={onChange} value={lastName}></input>
            <button type='submit' onClick={this.continue}>Sign Up</button>
            <p className='error'>{this.state.fullNameError}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default FormFullName;





