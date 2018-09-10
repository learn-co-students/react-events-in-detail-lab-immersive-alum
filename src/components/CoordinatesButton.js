import React from 'react'

export default props => {
  const handleClick = e => {
    e.persist()
    props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  return <button onClick={handleClick}>Button</button>
}
