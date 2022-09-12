import React, { useState, useRef, useEffect } from 'react'
import { FaCommentAlt } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import { motion } from 'framer-motion'
import messageFlow from './MessageFlow'
import {initialOptions, features, stages, demo, flowEnd} from './Options'
import MessageReceive from './MessageReceive'
import MessageSend from './MessageSend'
import './ChatBot.css'

function ChatBot() {
    
    const [chat, setChat] = useState(false)
    const [animation, setAnimation] = useState(false)
    const [flow, setFlow] = useState()
    const [disableInput, setDisableInput] = useState(true)
    const [input, setInput] = useState()
    const [data, setData] = useState({
        name: '',
        email: '',
        option1: '',
        option2: '',
        option3: '',
        demo: ''
    })
    const [response, setResponse] = useState('')
    const [send, setSend] = useState()
    const [fork, setFork] = useState()
    const scrollEnd = useRef(null)

    useEffect(() => {
        scrollEnd.current?.scrollTo(0, scrollEnd.current?.scrollHeight);
    }, [flow])

    function handleClick() {
        setChat(true)
        setAnimation(true)
        setFlow(0)
        setTimeout(() => {
            setFlow(0.1)
            setTimeout(() => {
                setFlow(0.2)
                setTimeout(() => {
                    setFlow(0.3)
                }, 1100)
            }, 1100)
        },1100)
    }

    function closeClick() {
        setAnimation(false)
        setTimeout(() => {
            setChat(false)
            setFlow(0)
            setResponse('')
            setData(0)
        }, 200)
    }

    function initialSelect(e) {
        setSend(1)
        setData(pValue => {
            return{
                ...pValue,
                option1: e.target.innerText
            }
        })
        setFlow(0.9)
        setTimeout(() => {
            setFlow(1)
            setTimeout(() => {
                setFlow(1.1)
            },1100)
        }, 800)
        setDisableInput(false)
    }

    function featuresSelect(e) {
        setSend(3)
        setData(pValue => {
            return{
                ...pValue,
                option2: e.target.innerText
            }
        })
        setFlow(2.9)
        setTimeout(() => {
            setFlow(3)
            setTimeout(() => {
                setFlow(3.1)
            },1100)
        }, 800)
    }

    function stagesSelect(i) {
        setSend(4)
        setFlow(3.9)
        if(i===0) {
            setTimeout(() => {
                setFork(1)
                setFlow(4)
                setTimeout(() => {
                    setFlow(4.1)
                    setTimeout(() => {
                        setFlow(4.2)
                        setTimeout(() => {
                            setFlow(4.22)
                        },1100)
                    },1100)
                },1100)
            }, 800)
            setDisableInput(false)
            setData(pValue => {
                return{
                    ...pValue,
                    option3: 'Sales Forecasting',
                    demo: 'No'
                }
            })
        }
        if(i===1) {
            setTimeout(() => {
                setFork(2)
                setFlow(5)
                setTimeout(() => {
                    setFlow(5.1)
                },1100)
            }, 800)
            setData(pValue => {
                return{
                    ...pValue,
                    option3: 'Customer Segmentation'
                }
            })
        }
    }

    function demoSelect(e) {
        setSend(5)
        setData(pValue => {
            return{
                ...pValue,
                demo: e.target.innerText
            }
        })
        setFlow(4.9)
        setTimeout(() => {
            setFlow(5.2)
            setTimeout(() => {
                setFlow(5.3)
                setTimeout(() => {
                    setFlow(5.4)
                },1100)
            },1100)
        }, 800)
        setDisableInput(false)
    }

    function flowEndRedirect(i) {
        if(i===0) {
            window.open('https://www.sociometrik.org/solutions/')
        }
        if(i===1) {
            window.open('https://www.sociometrik.org/platform/')
        }
        setChat(false)
        setFlow(0)
        setResponse('')
        console.log(data);
        setSend(0)
    }

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(flow===1.1) {
            setData(pValue => {
                return{
                    ...pValue,
                    name: input
                }
            })
            setResponse(input)
            setFlow(1.9)
            setSend(2)
            setTimeout(() => {
                setFlow(2)
                setTimeout(() => {
                    setFlow(2.1)
                    setTimeout(() => {
                        setFlow(2.2)
                        setTimeout(() => {
                            setFlow(2.3)
                        }, 1100)
                    }, 1100)
                }, 1100)
            }, 800)
        }
        else if(flow>4) {
            setData(pValue => {
                return{
                    ...pValue,
                    email: input
                }
            })
            setResponse(input)
            setFlow(5.9)
            setTimeout(() => {
                setFlow(6)
                setTimeout(() => {
                    setFlow(6.1)
                }, 1100)
            }, 800)
        }
        setInput('')
        setDisableInput(true)
    }

    const chatAnim = {hidden: {width: '65px', height: '65px', borderRadius: '50%', transition: {duration: 0.2}},
    visible: {width: '376px', height: '462px', borderRadius: '10px', backgroundColor: '#FFFFFF', cursorPointer: 'none', transition: {duration: 0.2}}}

	const contentAnim = {hidden: {opacity: 0, transition: {duration: 0, delay: 0.1}}, visible: {opacity: 1, transition: {duration: 0.1, delay: 0.1}}}

    return (
        <>
            <motion.div style={{display: chat ? 'none' : 'flex'}} className='chatbot' onClick={handleClick}>
                <FaCommentAlt />
            </motion.div>
            {chat && <motion.div variants={chatAnim} animate={animation ? "visible" : "hidden"} className='chatbox'>
                <div style={{display: chat ? 'none' : 'inline-block'}}><FaCommentAlt /></div>
				<motion.div variants={contentAnim} initial={animation ? "hidden" : "visible"} animate={animation ? "visible" : "hidden"} className='chatbox-content'>
					<div className="chatbox-header">
						<div className='close-chat' onClick={closeClick}><GrClose /></div>
					</div>
					<div ref={scrollEnd} className='text-area'>
						{flow>=0 && <MessageReceive message={messageFlow[0]} />}
                        {flow>=0.1 && <MessageReceive message={messageFlow[1]} />}
                        {flow>=0.2 && <MessageReceive message={messageFlow[2]} />}
                        {flow===0.3 && 
                        <div className='options-list'>
                            {initialOptions.map((data, index) => {
                            return (
                                <div onClick={initialSelect} key={index} className='chat-options'>{data}</div>
                            )
                        })}   
                        </div>}
                        {send>=1 && <MessageSend message={data.option1} />}
                        {flow>=1 && <MessageReceive message={messageFlow[3]} />}
                        {send>=2 && <MessageSend message={data.name} />}
                        {flow>=2 && <MessageReceive message={`Howdy, ${data.name}! It's a pleasure to meet you.`} />}
                        {flow>=2.1 && <MessageReceive message={messageFlow[4]} />}
                        {flow>=2.2 && <MessageReceive message={messageFlow[5]} />}
                        {flow===2.3 && 
                        <div className='options-list'>
                            {features.map((data, index) => {
                                return (
                                    <div onClick={featuresSelect} key={index} className='chat-options'>{data}</div>
                                )
                            })}
                        </div>}
                        {send>=3 && <MessageSend message={data.option2} />}
                        {flow>=3 && <MessageReceive message={messageFlow[6]} />}
                        {flow===3.1 && 
                        <div className='options-list'>
                            {stages.map((data, index) => {
                                return (
                                    <div onClick={() => stagesSelect(index)} key={index} className='chat-options'>{data}</div>
                                )
                            })}
                        </div>}
                        {send>=4 && <MessageSend message={data.option3} />}
                        {flow>=4 && fork===1 ? <MessageReceive message={messageFlow[7]} /> : flow>=5 && <MessageReceive message={messageFlow[8]} />}
                        {flow>=4.1 && fork===1 && <MessageReceive message={messageFlow[9]} />}
                        {flow>=4.2 && fork===1 && <MessageReceive message={messageFlow[10]} />}
                        {flow===5.1 && fork===2 && 
                        <div className='options-list'>
                            {demo.map((data, index) => {
                                return (
                                    <div onClick={demoSelect} key={index} className='chat-options'>{data}</div>
                                )
                            })}
                        </div>}
                        {send>=5 && fork===2 && <MessageSend message={data.demo} />}
                        {flow>=5.2 && fork===2  && <MessageReceive message={messageFlow[9]} />}
                        {flow>=5.3 && fork===2 && <MessageReceive message={messageFlow[10]} />}
                        {response.includes('@') && <MessageSend message={data.email} />}
                        {flow>=6 && <MessageReceive message={messageFlow[11]} />}
                        {flow===6.1 && 
                        <div className='options-list'>
                            {flowEnd.map((data, index) => {
                                return (
                                    <div onClick={() => flowEndRedirect(index)} key={index} className='chat-options'>{data}</div>
                                )
                            })}
                        </div>}
                        {/* <div className='auto-scroll' ref={scrollEnd} /> */}
					</div>
                    <form onSubmit={handleSubmit} action="">
                        <input type={flow===1.1 ? "text" : flow>1.1 && "email"} value={input} onChange={handleChange} placeholder={disableInput ? 'Select Option' : 'Type'} disabled={disableInput ? true : false} required />
                        <button></button>
                    </form>
				</motion.div>
            </motion.div>}
        </>
    )
}

export default ChatBot