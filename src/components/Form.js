import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Form.css';
import { init } from '@emailjs/browser';
import Flip from 'react-reveal/Flip';

init('user_5X5P1w0oFFpuJVZVuwoOD');

const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [emailSent, setEmailSent] = useState(false);

	const isValidEmail = (email) => {
		const regex =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(String(email).toLowerCase());
	};
	const submit = () => {
		if (name && isValidEmail(email) && message) {
			const serviceId = 'service_jkhno1g';
			const templateId = 'template_w7z5dfm';
			const userId = 'user_5X5P1w0oFFpuJVZVuwoOD';
			const templateParams = {
				name,
				email,
				message,
			};

			emailjs
				.send(serviceId, templateId, templateParams, userId)
				.then((response) => console.log(response))
				.then((error) => console.log(error));

			setName('');
			setEmail('');
			setMessage('');
			setEmailSent(true);
		} else {
			alert(
				'Please fill in all the fields or check to make sure your email is entered correctly'
			);
		}
	};

	const handleChangeName = (e) => {
		setName(e.target.value);
	};

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const handleChangeMessage = (e) => {
		setMessage(e.target.value);
	};
	return (
		<div className="Contact-Form" id="contact">
			<Flip top>
				<div className="Form-Container">
					<div className="Form">
						<div className="Contact-Me">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="svg"
							>
								<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
							</svg>
							<h1>Contact Me</h1>
						</div>

						<input
							type="text"
							placeholder="Your Name"
							className="Text"
							value={name}
							onChange={handleChangeName}
						/>
						<input
							type="email"
							placeholder="Your email address"
							className="Text"
							value={email}
							onChange={handleChangeEmail}
							isValidEmail={isValidEmail}
						/>
						<textarea
							placeholder="Your message"
							className="Text"
							value={message}
							onChange={handleChangeMessage}
						></textarea>
						<button className="button" onClick={submit}>
							Send Message
						</button>
						<span className={emailSent ? 'visible' : null}>
							Thank you for your message, we will be in touch in no time!
						</span>
					</div>
				</div>
			</Flip>
		</div>
	);
};

export default Form;
