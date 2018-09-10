import React from 'react'

export default props => {
  const handleClick = e => {
    e.persist()
    setTimeout(props.onDelayedClick, props.delay , e)
  }
  return <button onClick={handleClick}>
    Delayed Button
  </button>
}