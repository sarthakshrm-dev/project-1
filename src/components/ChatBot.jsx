import React from 'react'
import { useState } from 'react'
import { FaCommentAlt } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import { motion } from 'framer-motion'
import $, {jQuery} from 'jquery'
import './jquery.convform'
import './jquery-1.12.3.min.js'
import './jquery.convform.min'
import './jquery.convform.css'
import '../styles/ChatBot.css'

function ChatBot() {
    
    const [chat, setChat] = useState(false)
    const [animation, setAnimation] = useState(false)

    function handleClick() {
        setChat(true)
        setAnimation(true)
    }

    function closeClick() {
        setAnimation(false)
        setTimeout(() => {
            setChat(false)
        }, 200)
    }

	function google(stateWrapper, ready) {
		window.open("https://www.sociometrik.org/solutions/");
		ready();
	}
	function bing(stateWrapper, ready) {
		window.open("https://www.sociometrik.org/platform/");
		ready();
	}
	var rollbackTo = false;
	var originalState = false;
	function storeState(stateWrapper, ready) {
		rollbackTo = stateWrapper.current;
		console.log("storeState called: ",rollbackTo);
		ready();
	}
	function rollback(stateWrapper, ready) {
		console.log("rollback called: ", rollbackTo, originalState);
		console.log("answers at the time of user input: ", stateWrapper.answers);
		if(rollbackTo!=false) {
			if(originalState==false) {
				originalState = stateWrapper.current.next;
					console.log('stored original state');
			}
			stateWrapper.current.next = rollbackTo;
			console.log('changed current.next to rollbackTo');
		}
		ready();
	}
	function restore(stateWrapper, ready) {
		if(originalState != false) {
			stateWrapper.current.next = originalState;
			console.log('changed current.next to originalState');
		}
		ready();
	}

	jQuery(function($){
		const convForm = $('#chat').convform({selectInputStyle: 'disable'});
		console.log(convForm);
	});

    const chatAnim = {hidden: {width: '65px', height: '65px', borderRadius: '50%', transition: {duration: 0.2}},
    visible: {width: '350px', height: '400px', borderRadius: '10px', backgroundColor: '#FFFFFF', cursorPointer: 'none', transition: {duration: 0.2}}}

    return (
        <>
            <motion.div style={{display: chat ? 'none' : 'flex'}} className='chatbot' onClick={handleClick}>
                <FaCommentAlt />
            </motion.div>
            {chat && <motion.div variants={chatAnim} animate={animation ? "visible" : "hidden"} className='chatbox'>
                <div style={{display: chat ? 'none' : 'inline-block'}}><FaCommentAlt /></div>
                <div className='close-chat' onClick={closeClick}><GrClose /></div>
                <div class="card no-border">
	                        <div id="chat" class="conv-form-wrapper">
	                            <form action="" method="GET" class="hidden">
	                                <select data-conv-question="Hello there! 👋 Welcome to Sociometrik<br><br>Sociometrik is a geospatial data intelligence start-up based out of New Delhi, India - founded in 2019 with the mission of redefining data-backed executive decision making. We measure and quantify physical earth, built structures and human activity using multi-channel data sources like satellite imagery, smartphone mobility, web records and administrative data to power alternative data-based decision support<br>systems for our clients.<br><br>I'm here to help you find your way.<br>What would you like to do?" name="first-question">
	                                    <option value="yes">Learn about our LI platform</option>
	                                    <option value="sure">Checkout our solutions</option>
										<option value="sure">Additional queries</option>
	                                </select>
	                                <input type="text" name="name" data-conv-question="Alright! First, tell me your full name, please.|Okay! Please, tell me your name first." />
	                                <input type="text" data-conv-question="Howdy, {name}:0! It's a pleasure to meet you. (note that this question doesn't expect any answer)" data-no-answer="true" />
	                                <input type="text" data-conv-question="I'm here to help you find your way." data-no-answer="true" />
	                                <select name="multi[]" data-conv-question="What would you like to do?" multiple>
	                                    <option value="Geospatial_Analysis">Geospatial Analysis</option>
	                                    <option value="Socio_Economic_Dataset">Socio Economic Dataset</option>
	                                    <option value="Location_Intelligence">Location Intelligence</option>
	                                    <option value="Big_Data">Big Data</option>
	                                </select>
	                                <select name="programmer" data-callback="storeState" data-conv-question="Sociometrik helps brands solve for many stages of market planning in a single platform.? (this question will fork the conversation based on your answer)">
	                                    <option value="sales">Sales Forcasting</option>
	                                    <option value="customer">Customer Segmentation</option>
	                                </select>
	                                <div data-conv-fork="programmer">
	                                    <div data-conv-case="sales">
	                                        <input type="text" data-conv-question="We know the urgency of identifying a site’s revenue potential.
											Which is why you get instant sales forecasts in Sociometrik.
											Learn how Sociometriks’ sales forecasting can help: https://www.sociometrik.org/" data-no-answer="true" />
	                                    </div>
	                                    <div data-conv-case="customer">
		                                    <select name="thought" data-conv-question="Understanding your customers is important!
											So we’ve built a solution for just that!
											Learn how Sociometriks’ customer dashboard can help: https://www.sociometrik.org/
											Would you like to have a look">
		                                    	<option value="yes">Yes</option>
		                                    	<option value="no">No..</option>
		                                    </select>
	                                    </div>
	                                </div>
	                                <input type="text" data-conv-question="Thanks for your interest. Our team will reach you soon" data-no-answer="true" />
	                                <input data-conv-question="Type in your e-mail" data-pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" id="email" type="email" name="email" required placeholder="What's your e-mail?" />
									<select data-conv-question="Would you like to explore more, try one of these:">
											<option value="google" data-callback="google">Our Solutions</option>
											<option value="bing" data-callback="bing">Our Platforms</option>
									</select>
	                            </form>
	                        </div>
	                    </div>
            </motion.div>}
        </>
    )
}

export default ChatBot