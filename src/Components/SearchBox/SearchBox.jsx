import './SearchBox.scss'

const SearchBox = ({getSearchBoxValue}) => {

  return (
    <div className='box'>
      <input
        type="text"
        onChange={getSearchBoxValue}
        placeholder="   🔍 Search "
        className="search-box__input"
      />
      </div>
  )
}

export default SearchBox