import '../css/timer.scss';
import '../css/base.scss';
import '../css/normalize.scss';
import '../css/base.scss';
import { useState } from 'react';
import cx from 'classnames';


const Time = (props) => {

	//Реализация раскрывающегося счетчика
	const [timeShow, setTimeShow] = useState(true);
	const openTime = () => {
		setTimeShow(current => !current)
	};
	return (
		<div className="time">
			<div className="time__body">
				<aside className="time__container">
					<div className="time__button">
						<p className="time__button_text">Timer</p>
						<div className="time__button_events">
							<div className={cx("time__button_event", timeShow ? 'bird_rotate' : '')} onClick={openTime}>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M5.11963 8.56014C5.11963 8.38014 5.18963 8.21014 5.32963 8.08014C5.59963 7.84014 6.00963 7.86014 6.24963 8.12014L11.9899 14.4893L17.5399 8.08012C17.7799 7.81012 18.1899 7.80012 18.4599 8.04012C18.7199 8.28012 18.7399 8.69012 18.4999 8.96012L12.5099 15.8593C12.2299 16.1693 11.7499 16.1693 11.4699 15.8593L5.28963 9.00014C5.16963 8.87014 5.11963 8.72014 5.11963 8.56014Z" fill="#505050"/>
								</svg>
							</div>
							<div className="time__button_event" onClick={props.resume}>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.1792 8.24908C13.048 8.12583 12.972 7.95842 12.9731 7.76737C12.9831 7.40626 13.2784 7.12113 13.6322 7.12423L15.7846 7.10802L15.795 7.09682C14.7462 6.28392 13.4296 5.80006 12 5.80006C8.57583 5.80006 5.8 8.57589 5.8 12.0001C5.8 12.1843 5.80803 12.3666 5.82377 12.5467C5.85289 12.8801 5.65987 13.2021 5.33927 13.2983C4.96965 13.4092 4.58203 13.1786 4.54161 12.7948C4.5141 12.5337 4.5 12.2685 4.5 12.0001C4.5 7.85792 7.85786 4.50006 12 4.50006C13.7642 4.50006 15.3862 5.10922 16.667 6.12868L16.4805 4.09227C16.4481 3.73248 16.7215 3.42681 17.0813 3.39435C17.4342 3.36918 17.7467 3.63532 17.7792 3.99511L18.0669 7.64683C18.1012 8.06315 17.7725 8.413 17.3549 8.40482L13.6163 8.42644C13.4394 8.42489 13.2958 8.35863 13.1792 8.24908Z" fill="#505050"/>
								<path d="M10.2902 15.2936C10.4214 15.4169 10.4974 15.5843 10.4963 15.7753C10.4864 16.1365 10.1911 16.4216 9.83724 16.4185L7.68488 16.4347L7.67643 16.4438C8.7933 17.5306 10.3185 18.2001 12 18.2001C15.4242 18.2001 18.2 15.4242 18.2 12.0001C18.2 11.618 18.1654 11.244 18.0993 10.8811C18.0377 10.543 18.2109 10.1961 18.5338 10.0787C18.8872 9.95017 19.2786 10.1451 19.3527 10.5137C19.4493 10.9942 19.5 11.4912 19.5 12.0001C19.5 16.1422 16.1421 19.5001 12 19.5001C9.98183 19.5001 8.14984 18.7029 6.8017 17.4063L6.98893 19.4504C7.02139 19.8102 6.74796 20.1159 6.38817 20.1484C6.03524 20.1735 5.72272 19.9074 5.69026 19.5476L5.40252 15.8959C5.3683 15.4796 5.69695 15.1297 6.1146 15.1379L9.85316 15.1163C10.0301 15.1178 10.1736 15.1841 10.2902 15.2936Z" fill="#505050"/>
								</svg>
							</div>
							<div className="time__button_event" onClick={props.pause}>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.40942 5.49006C6.15558 5.23622 5.74403 5.23622 5.49019 5.49006C5.23634 5.7439 5.23634 6.15546 5.49019 6.4093L11.0808 11.9999L5.59065 17.4901C5.33681 17.7439 5.33681 18.1555 5.59065 18.4093C5.84449 18.6631 6.25605 18.6631 6.50989 18.4093L12 12.9192L17.4902 18.4093C17.744 18.6631 18.1556 18.6631 18.4094 18.4093C18.6633 18.1555 18.6633 17.7439 18.4094 17.4901L12.9193 11.9999L18.5099 6.4093C18.7637 6.15546 18.7637 5.7439 18.5099 5.49006C18.256 5.23622 17.8445 5.23622 17.5906 5.49006L12 11.0807L6.40942 5.49006Z" fill="#505050"/>
								</svg>
							</div>
						</div>
					</div>
					<div className={cx("time__timer_container", timeShow ? 'close_nav' : '')}>
						<div className="time__timer">
							<span className="time__time">{(props.time.h >= 10)? props.time.h : "0" + props.time.h}</span>&nbsp;:&nbsp;
							<span className="time__time">{(props.time.m >= 10)? props.time.m : "0" + props.time.m}</span>&nbsp;:&nbsp;
							<span className="time__time">{(props.time.s >= 10)? props.time.s : "0" + props.time.s}</span>&nbsp;
						</div>
					</div>
				</aside>
			</div>
		</div>
	);
}

export default Time;





// let [totalSec, setTotalSec] = useState(0);
// 	let loc = localStorage.getItem('count') || totalSec;
// 	function countTimer() {
// 		setTotalSec(totalSec++);
		
// 	}
// 	useEffect(() => {
		
// 		const interval = setInterval(countTimer, 1000);
// 		return () => clearInterval(interval);
// 	},[])

// 	const hours = Math.floor(totalSec / 3600);
// 	const min = Math.floor((totalSec - (hours * 3600)) / 60);
// 	const sec = totalSec - (hours * 3600) - (min * 60);

// 	const formattedTime = hours.toString().padStart(2, '0') + ':' + min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0');