import React, { PureComponent } from 'react'
import styles from './home_page.css';
import { connect } from 'react-redux';
import { setName } from 'app/actions/dashboard';

class HomePage extends PureComponent {
  constructor(props) {
    super(props)
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.props.setName(e.target.value)
  }

  render() {
    return (
      <div className="wrapper">
       <h2 className="page-title">Welcome</h2>
       <h3 className="name-title">{ this.props.name }</h3>

       <p>This is your Homepage served by Service A.</p>
       <div className="form-group"> 
        <label htmlFor="name">Name</label>
        <input onChange={ (e) => this.handleNameChange(e) } className="form-control" type="text" name="name" id="name" value={ this.props.name }/>
       </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.Dashboard.name,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => dispatch(setName(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
export { HomePage };