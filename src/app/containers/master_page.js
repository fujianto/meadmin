import React from 'react';
import Header from 'app/components/header' 
import Sidebar from 'app/components/sidebar' 

const MasterPage = (props) => {
  return (
    <div className="main-wrap">      
      <Header />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-xs-12 left-sidebar">
            <Sidebar />
          </div>

          <div className="col-md-9 col-xs-12 main-content">
            { props.children }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MasterPage;