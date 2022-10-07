import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function MessageReceive(props) {

  const [typing, setTyping] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setTyping(false)
    }, 1000)
  })

  return (
    <>
      {typing ?<div className="typing">
        <div className="typing__dot"></div>
        <div className="typing__dot"></div>
        <div className="typing__dot"></div>
      </div> : <div className='message-receive'>{props.message}</div>}
    </>
  )
}

export default MessageReceive