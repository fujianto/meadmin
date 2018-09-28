import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from 'app/store/'
import MasterPage from 'app/containers/master_page'
import HomePage from 'app/containers/home_page'
import NestedFragmentPage from 'app/containers/nested_fragment_page'
import ListPage from 'app/containers/list_page'

import style from 'app/root.css'

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Route exact path='/' render={() => <MasterPage><HomePage /></MasterPage>} />
          <Route exact path='/nested-fragment' render={() => <MasterPage><NestedFragmentPage /></MasterPage>} />
          <Route exact path='/list' render={() => <MasterPage><ListPage /></MasterPage>} />
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default Root;