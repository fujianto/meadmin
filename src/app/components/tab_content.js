import React from 'react'

const TabContent = (props) => {
  return (
    <div className='tab-item'>
      { props.children }
    </div>
  )
}

export default TabContent;