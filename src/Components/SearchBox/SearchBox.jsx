import './SearchBox.scss'

const SearchBox = ({getSearchBoxValue}) => {

  return (
      <input
        type="text"
        onChange={getSearchBoxValue}
        placeholder="   🔍 Search "
        className="search-box__input"
      />
  )
}

export default SearchBox