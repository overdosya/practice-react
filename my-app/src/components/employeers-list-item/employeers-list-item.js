import "./employeers-list-item.css";

const EmployeersListItem = (props) => {
  const {name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise} = props;
  
  // increase = () => {
  //     this.setState(({increase}) => ({
  //         increase: !increase
  //     }))
  // }
  
  // rise = () => {
  //     this.setState(({rise}) => ({
  //         rise: !rise
  //     }))
  // }
  let classNames = "list-group-item d-flex justify content-between";
  if (increase) {
    classNames += " increase";
  };
  if (rise) {
    classNames += " like";
  };
  
    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={onToggleRise}>{name}</span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue="1000$"
          value={salary + "$"}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn-cookie btn-sm" onClick={onToggleIncrease}>
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button" className="btn-trash btn-sm"
            onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
}

export default EmployeersListItem;

