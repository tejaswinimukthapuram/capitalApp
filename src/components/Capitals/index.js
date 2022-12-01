import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeCountryId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCountryId: event.target.value})
  }

  render() {
    const {activeCountryId} = this.state

    const ccListItem = countryAndCapitalsList.find(
      each => each.id === activeCountryId,
    )

    return (
      <div className="app-container">
        <div className="card-container">
          <h1>Countries And Capitals</h1>
          <div className="input-el-container">
            <select id="input-element" onChange={this.onChangeCapital}>
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="input-element">is capital of which country?</label>
          </div>
          <h1>{ccListItem.country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
