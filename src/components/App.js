import React, { Component } from 'react';
import './App.css';
import FormEmail from './FormEmail';
import FormFullName from './FormFullName';
import ThankYou from './ThankYou';

class App extends Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
    checked: true,
    step: 1,
  };

  //Handle change for text/ email inputs
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  //Handle change for checkbox
  handleCheck = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  //Upon click, increment the step for each state to move to the next
  nextStep = () => {
    const { step } = this.state;
      this.setState({
        step: step + 1,
      });
  };

  render() {
    const { email, firstName, lastName, step, checked } = this.state;
    console.log('email:', email, 'First Name:', firstName, 'Last Name:', lastName);

    switch (step) {
      case 1:
        return (
          <FormEmail email={email} onChange={this.handleChange} onCheck={this.handleCheck} nextStep={this.nextStep} checked={checked}/>
        );
      case 2:
        return (
          <FormFullName firstName={firstName} lastName={lastName} onChange={this.handleChange} nextStep={this.nextStep}/>
        );
      case 3:
          return <ThankYou email={email} firstName={firstName} lastName={lastName}/>
      default:
          return <h1>Sign-Up Form</h1>
    };
  }
}

export default App;
