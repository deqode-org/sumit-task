import React from "react";
import KEYS_MAPPING from "../../constants";
import getSuggestions from "../../Api";
import SuggestionBox from "../SuggestionBox";
import { debounce } from "lodash";

class AutoSuggestInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      suggestions: [],
      highlightIndex: 0,
    };

    // Creating the ref to input for the focus
    this.inputRef = React.createRef();
    this.debouncedInputChange = debounce(this.getSuggestedOptions, 500);
  }

  getSuggestedOptions = (textToSearch) => {
    getSuggestions(textToSearch)
      .then((data) => {
        this.setState({
          suggestions: data,
          highlightIndex: 0,
        });
      })
      .catch((error) => {
        console.log("Got error in getting data");
      });
  }

  onInputChange = (event) => {
    const lastText = this.state.text.split(" ").slice(-1)[0];
    const textToSearch = event.target.value.split(" ").slice(-1)[0];

    this.setState({ text: event.target.value });

    // Checking if the last text is empty or the last word has changes
    if (!!textToSearch && lastText !== textToSearch) {
      this.debouncedInputChange(textToSearch)
    } else {
      this.resetSuggestions();
    }
  }

  // Append the selected suggested word to the text
  suggestionSelected = (suggestion) => {
    const text = this.state.text.split(" ").slice(0, -1).join(" ");

    this.setState({ text: `${text} ${suggestion} ` });
    this.resetSuggestions();
    this.inputRef.current.focus();
  }

  onKeyPressed = (e) => {
    const { suggestions, highlightIndex } = this.state;

    if (suggestions.length === 0) {
      return;
    }

    const keyPressed = e.which;

    if (keyPressed === KEYS_MAPPING.UP_ARROW) {
      // Logic to move up
      this.setState({
        highlightIndex: highlightIndex === 0 ? suggestions.length - 1 : highlightIndex - 1,
      });
    } else if (keyPressed === KEYS_MAPPING.DOWN_ARROW) {
      // Logic to move down
      this.setState({
        highlightIndex: highlightIndex === suggestions.length - 1 ? 0 : highlightIndex + 1,
      });
    } else if (keyPressed === KEYS_MAPPING.ENTER) {
      // Logic to add the suggestion to text
      this.suggestionSelected(suggestions[highlightIndex]);
    }
  }

  resetSuggestions = () => {
    this.setState({
      suggestions: [],
      highlightIndex: 0,
    });
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            value={this.state.text}
            onChange={(e) => this.onInputChange(e)}
            onKeyDown={(e) => this.onKeyPressed(e)}
            ref={this.inputRef}
          />
          <SuggestionBox
            suggestions={this.state.suggestions}
            highlightIndex={this.state.highlightIndex}
            closeDropdown={() => this.resetSuggestions()}
            suggestionSelected={(suggestion) => this.suggestionSelected(suggestion)}
          />
        </div>
      </div>
    );
  }
}

export default AutoSuggestInput;
