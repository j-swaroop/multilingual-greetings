import {Component} from 'react'
import LanguageButton from '../LanguageButton'
import './index.css'

class MultilingualGreetings extends Component {
  state = {
    activeLanguage: 'English',
  }

  renderGreetings = () => {
    const {languageGreetingsList} = this.props
    const {activeLanguage} = this.state

    const details = languageGreetingsList.find(
      eachItem => eachItem.buttonText === activeLanguage,
    )

    return (
      <img className="img" src={details.imageUrl} alt={details.imageAltText} />
    )
  }

  changeActiveLanguage = language => {
    this.setState({activeLanguage: language})
  }

  render() {
    const {languageGreetingsList} = this.props
    const {activeLanguage} = this.state

    return (
      <div className="bg-container">
        <div className="responsive-container">
          <h1 className="heading"> Multilingual Greetings </h1>
          <ul className="buttons-container">
            {languageGreetingsList.map(eachItem => (
              <LanguageButton
                changeActiveLanguage={this.changeActiveLanguage}
                key={eachItem.id}
                details={eachItem}
                activeBtn={activeLanguage === eachItem.buttonText}
              />
            ))}
          </ul>
          {this.renderGreetings()}
        </div>
      </div>
    )
  }
}

export default MultilingualGreetings
