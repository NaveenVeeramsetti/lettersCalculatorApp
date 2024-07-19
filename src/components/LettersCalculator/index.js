// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    const {value} = event.target
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="calculator-phrase-container">
              <label className="input-label" htmlFor="labelId">
                Enter the phrase
              </label>
              <input
                type="text"
                id="labelId"
                className="input-element"
                placeholder="Enter the phrase"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <p className="letters-count">No.of letters: {searchInput.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
