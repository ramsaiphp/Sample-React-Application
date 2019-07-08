import React, {Component} from 'react';
import Table from './components/Table/Table';
import Form from './components/Form';

class App extends Component  {
  state = {
    characters : []
  }
  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }
  render(){
    return (
      <div className="container">
        <h1>Simple React Application</h1>
        <p>Add name and job to table</p>
        <Table characterData={this.state.characters}/>
        <h1>Add New Employee</h1>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
