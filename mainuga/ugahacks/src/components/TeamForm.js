import React, { Component } from 'react';
class TeamForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: 'Lakers'};
    this.myRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleChange2(event) {
    this.setState({value2: event.target.value2});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({value: event.target.value});
     fetch('http://localhost:9000', {
     method: 'POST',
     mode: 'cors',
     headers: {
       'Content-Type': 'json',
     },
     body: JSON.stringify({'team': event.target.value}),
   })


};


  render() {
    return (
      <div ref = {this.myRef}>
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Hawks">Hawks</option>
            <option value="Heat">Heat</option>
            <option value="Lakers">Lakers</option>
            <option value="Hornets">Hornets</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
} export default TeamForm;
