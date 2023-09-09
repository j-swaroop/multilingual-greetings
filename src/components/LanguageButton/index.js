import './index.css'

const LanguageButton = props => {
  const {details, activeBtn, changeActiveLanguage} = props

  const activeBtnClassName = activeBtn ? 'active-btn' : ''

  const onClickBtn = () => {
    changeActiveLanguage(details.buttonText)
  }

  return (
    <li className="btn-item">
      <button
        type="button"
        onClick={onClickBtn}
        className={`btn ${activeBtnClassName}`}
      >
        {' '}
        {details.buttonText}
      </button>
    </li>
  )
}

export default LanguageButton
