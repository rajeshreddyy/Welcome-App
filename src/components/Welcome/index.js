// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {btnText: 'Subscribe'}

  isClicked = () => {
    const {btnText} = this.state

    if (btnText === 'Subscribe') {
      this.setState({btnText: 'Subscribed'})
    } else if (btnText === 'Subscribed') {
      this.setState({btnText: 'Subscribe'})
    }
  }

  render() {
    const {btnText} = this.state
    console.log(btnText)
    return (
      <div className="bg-container">
        <h1>Welcome</h1>
        <p>Thank you! Happy learning</p>
        <button onClick={this.isClicked} type="submit">
          {btnText}
        </button>
      </div>
    )
  }
}
export default Welcome
