import React, { useState, useEffect } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

const CustomScrollbars = ({children, ...props}) => {
  return (
    <Scrollbars style={props.style}>
      { children }
    </Scrollbars>
  )
}

export default CustomScrollbars
