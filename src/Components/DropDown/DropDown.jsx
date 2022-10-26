const DropDown = ({ options, onChange }) => {
    return (
      <>
        <select onChange={onChange}>
        <option value="">All Product Types</option>
          {options.map(option => (
            <option key={option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </>
    );
  };
  
  export default DropDown;