import { useState, useEffect } from "react";

const CountdownTimer = () => {
	const [days, setDays] = useState(10);
	const [hours, setHours] = useState(10);
	const [minutes, setMinutes] = useState(10);
	const [seconds, setSeconds] = useState(10);

	const [loading, setLoading] = useState(true);

	const countdown = () => {
		const endDate = new Date("January 10, 2022 00:00:00").getTime();
		const todayDate = new Date().getTime();

		const actualDate = endDate - todayDate;

		// initialize times
		const seconds = 1000;
		const minutes = seconds * 60;
		const hours = minutes * 60;
		const days = hours * 24;

		let timeDays = Math.floor(actualDate / days);
		let timeHours = Math.floor((actualDate % days) / hours);
		let timeMinutes = Math.floor((actualDate % hours) / minutes);
		let timeSeconds = Math.floor((actualDate % minutes) / seconds);

		setDays(timeDays);
		setHours(timeHours);
		setMinutes(timeMinutes);
		setSeconds(timeSeconds);
		setLoading(false);
	};

	useEffect(() => {
		setInterval(countdown, 1000);
	}, []);

	return (
		<>
			{loading ? (
				<h1></h1>
			) : (
				<section className="container">
					<h1>Gender Reveal Date Countdown</h1>
					<div className="countdown">
						<article>
							<p>{days}</p>
							<h2>Days</h2>
						</article>
						<article>
							<p>{hours}</p>
							<h2>Hours</h2>
						</article>
						<article>
							<p>{minutes}</p>
							<h2>Minutes</h2>
						</article>
						<article>
							<p>{seconds}</p>
							<h2>Seconds</h2>
						</article>
					</div>
				</section>
			)}
		</>
	);
};

export default CountdownTimer;
