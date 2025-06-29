import './app-filter.css'

const AppFilter = (props) => {
  const buttonsData = [
      {name: 'all', label: "All employees", colored: false},
      {name: 'rise', label: "Promotion", colored: false},
      {name: 'salary', label: "Salary more than 1000$", colored: true}
    ]

  const buttons = buttonsData.map(({name, label, colored}) => {
    const active = props.filter  === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
          <button 
          className={`btn ${clazz}`}
          key={name}
          type="button"
          onClick={() => props.onFilterSelect(name)}
          style={colored ? {color:  'red'} : null}>
          {label}
          </button> 
    )
  })
  

    return (
        <div className="btn-group">
          {buttons}
        </div>
        
    )
}

export default AppFilter;