import React from "react";
import './suggestionBox.css'
// The Dropdown Box
class SuggestionBox extends React.Component {

  constructor(props) {
    super(props)
    // Ref to the ul, so as to close the dropdown, when clicked outside
    this.dropdownRef = React.createRef()
  }

  componentDidMount() {
    // Registering the mousedown event listener
    document.addEventListener('mousedown', (e) => this.handleClick(e))
  }

  componentWillUnmount() {
    // Removing the mousedown event listener
    document.removeEventListener('mousedown', (e) => this.handleClick(e))
  }

  handleClick = (e) => {
    // Get all the mouse click event
    if (this.dropdownRef.current.contains(e.target)) {
      return
    }
    // Close the dropdown 
    this.props.closeDropdown()
  }

  render() {
    const { suggestions } = this.props;
    const showDropdown = suggestions.length > 0;

    return (
      <ul
        className={`dropdown-menu dropdown-menu-end ${showDropdown ? 'show' : 'hide'}`}
        ref={this.dropdownRef}
      >
        {suggestions.map((suggestion, index) => (
          <li
            className={`dropdown-item ${this.props.highlightIndex === index && 'highlight'}`}
            key={suggestion}
            onClick={() => this.props.suggestionSelected(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    )
  }
}

export default SuggestionBox
