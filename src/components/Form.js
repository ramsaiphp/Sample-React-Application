import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);

    this.initialState = {
      name: '',
      job: ''
    }

    this.state=this.initialState;
  }
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
        [name] : value
    });
  }
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }
  render() {
    const {name, job} = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        onChange={this.handleChange}
        value={name}
         />
      <label>Job</label>
      <input
        type="text"
        name="job"
        onChange={this.handleChange}
        value={job}/>
       <button type="submit">Submit</button>
    </form>


    );
  }
}

export default Form;