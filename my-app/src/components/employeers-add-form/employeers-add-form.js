import { Component } from "react";

import "./employeers-add-form.css";

class EmployersAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = (e) => {
      e.preventDefault();
      this.props.onAdd(this.state.name, this.state.salary);
      this.setState({
          name: '',
          salary: ''
      })
  }

  render() {

      const {name, salary} = this.state;
      return (
      <div className="app-add-form"
        onSubmit = {this.onSubmit}>
        <h3>Add new employer</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Name"
            onChange={this.onValueChange}
            name="name"
            value={name}/>

          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Salary"
            onChange={this.onValueChange}
            name="salary"
            value={salary}/>

          <button 
          type="submit" 
          className="btn btn-outline-light" >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployersAddForm;
