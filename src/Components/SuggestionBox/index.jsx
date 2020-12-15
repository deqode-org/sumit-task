import React from "react";
import OnOutsiceClick from "react-outclick";
import "./suggestionBox.css";

// The Dropdown Box
class SuggestionBox extends React.Component {
  render() {
    const { suggestions } = this.props;
    const showDropdown = suggestions.length > 0;

    return (
      <OnOutsiceClick
        onOutsideClick={() => {
          this.props.closeDropdown();
        }}
      >
        <ul
          className={`dropdown-menu dropdown-menu-end ${showDropdown ? "show" : "hide"}`}
        >
          {suggestions.map((suggestion, index) => (
            <li
              className={`dropdown-item ${this.props.highlightIndex === index && "highlight"}`}
              key={suggestion}
              onClick={() => this.props.suggestionSelected(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      </OnOutsiceClick>
    );
  }
}

export default SuggestionBox;
