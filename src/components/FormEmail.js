import React, {Component} from 'react';

export class FormEmail extends Component {
  state = {
    emailError: '',
    termsError: ''
  }

  //Check if email address is valid and terms have been checked off
  validate = () => {
    let isError = false;
    const errors = {
      emailError: '',
      termsError: ''
    };

    if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g.test(this.props.email)) {
      isError = true;
      errors.emailError = 'Please provide valid email adress.';
    }

    if (this.props.checked !== true) {
      isError = true;
      errors.termsError = 'Please agree to terms.';
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
    const { email, onChange, checked, onCheck} = this.props
    return (
      <div className='footer'>
        <div className='content'>
          <div className='header'><h3>sign up for the tlc newsletter.</h3></div>
          <div className='form'>
            <input id='email' type='email'name='email' placeholder='enter email address' onChange={onChange} value={email}/>
            <button type='submit' onClick={this.continue}>Next</button>
            <p className='terms'><span id='checkbox'><input name='checked' type='checkbox' checked={checked} onChange={onCheck} /></span><label>I agree to receive information from Discovery Communications in accordance with the following <a href='https://www.lipsum.com/'>Privacy Policy</a></label></p>
            <p className='error'>{this.state.emailError} {this.state.termsError}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default FormEmail;




