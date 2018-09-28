import { connect } from 'react-redux'
import { fetchArticles } from 'app/actions/dashboard'
import React, { PureComponent } from 'react'

import NavTab from 'app/components/nav_tab';
import TabContent from 'app/components/tab_content';

import Style from './nested_fragment_page.css'


class NestedFragment extends PureComponent {
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
  }

  render() {
    return (
      <div className="nested-wrap">
        <h2 className="page-title">Content from Service B</h2>

        <NavTab items={["B-1 Tab", "B-2 Tab"]} onTabClick={ (pos) => this.handleTabClick(pos) }/>

        <div className="tab-content">
          {
            this.state.currentTab === 0 ? 
              <TabContent> 
                <p>Hi</p>
                <h3 className="name-title"> { this.props.name } </h3>
                <p>this is service B-1 calling your name</p>
              </TabContent> 
              : 
              <TabContent> 
                <p>Hi</p>
                <h3 className="name-title"> { this.props.name } </h3>
                <p>this is service B-2 calling your name</p>
              </TabContent> 
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.Dashboard.name
  }
}

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NestedFragment)
export  { NestedFragment };