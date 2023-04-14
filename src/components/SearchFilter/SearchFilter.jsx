import searchLogo from "../../assets/images/search-logo.jpg"
import "./SearchFilter.scss"

const SearchFilter = (props) => {

    const {handleInput} = props

    return(
        <div className="search">
            <input className="search__input" type="text" id="search-bar" onInput={handleInput} placeholder="Find your closest bench..."/>
            <label htmlFor="search-bar">
                <img className="search__logo" src={searchLogo} alt="" />
            </label>
        </div>
    )
}

export default SearchFilter