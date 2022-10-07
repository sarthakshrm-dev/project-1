import React from 'react'
import { motion } from 'framer-motion'

function MessageSend(props) {

  const msgAnim = {hidden: {opacity: 0, position: 'relative', bottom: '-6px'}, visible: {opacity: 1, position: 'relative', bottom: '0px', transition: {duration: 0.4, delay: 0.1}}}

  return (
    <motion.div variants={msgAnim} initial='hidden' animate='visible' className='message-send'>{props.message}</motion.div>
  )
}

export default MessageSend