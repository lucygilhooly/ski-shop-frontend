import './DropDown.scss'
const DropDown = ({ options, onChange }) => {



    return (
      <div >
        <select className="dropDown" onChange={onChange}>
        <option value="">All Product Types</option>
          {options.map(option => (
            <option key={option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default DropDown;