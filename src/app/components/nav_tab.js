import React, { PureComponent } from 'react'
import Style from './nav_tab.css'

export default class NavTab extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0
    }
  }

  handleTabClick(pos) {
    this.setState({
      currentTab: pos
    })

    this.props.onTabClick(pos);
  }

  render() {
    return (
      <div className="tab-section">
        {
          this.props.items !== null && typeof this.props.items !== 'undefined' ? 
            <ul>
              {
                this.props.items.map((tab, index) => {
                  return (
                    <li key={index} className={this.state.currentTab === index ? "active" : null } 
                      onClick={() => this.handleTabClick(index)}>
                      <span>{tab}</span>
                    </li>
                  )
                })
              }
            </ul> : null
        }
      </div>
    )
  }
}
