import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeersList from "../employeers-list/employeers-list";
import EmployersAddForm from "../employeers-add-form/employeers-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, id: 1, increase: false, rise: true},
        { name: "Vasya P.", salary: 3000, id: 2, increase: false, rise: false},
        { name: "Nazar L.", salary: 10000, id: 3, increase: true, rise: false},
      ],
      term: ''
    };

    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
        return {
            data: data.filter(item => item.id !== id)
        }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
        name, 
        salary,
        increase: false,
        rise: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
}

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id){
          return {...item, [prop]: !item[prop]}
        } 
        return item;
      })
    }))
  }

  searchEmp = (items, term) => {
    if (term.length === 0){
      return items
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  render() {
    const {data, term} = this.state
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.searchEmp(data, term)

    return (
      <div className="app">
        <AppInfo 
        employees = {employees}
        increased={increased}/>
        <div className="search-panel">
          <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
          <AppFilter />
          <EmployeersList
            data={visibleData}
            onDelete={this.deleteItem}
            onToggleProp = {this.onToggleProp}
          />
          <EmployersAddForm 
            onAdd={this.addItem}/>
        </div>
      </div>
    );
  }
}

export default App;
