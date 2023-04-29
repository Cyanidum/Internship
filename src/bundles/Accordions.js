import cx from 'classnames';
import Art from '../img/art.png';
import '../css/accordion.scss';
import '../css/sidebar.scss';
import '../css/normalize.scss';
import '../css/base.scss';
import { useState } from 'react';

const Accordions = (props) => {

	// Реализация сворачивающихся карточек
	const [sunset, setSunset] = useState(false);
	const [siberia, setSiberia] = useState(false);

	const openSunset = () => {
		setSunset(current => !current);
	};
	const openSiberia = () => {
		setSiberia(current => !current);
	};

	return (
		<div className="main__accordion">
			<div className="main__accordion_container">
				<div className="main__accordion_button" onClick={openSunset} id='open'>
					<p>Sunset Sunset Sunset</p>
					<div className="main__accordion_marks">
						<div className="main__accordion_icon">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12.65 8.15343C12.65 7.79445 12.359 7.50344 12 7.50344C11.641 7.50344 11.35 7.79445 11.35 8.15343V12.6534C11.35 13.0124 11.641 13.3034 12 13.3034H16C16.359 13.3034 16.65 13.0124 16.65 12.6534C16.65 12.2945 16.359 12.0034 16 12.0034H12.65V8.15343Z" fill="#505050"/>
							<path fillRule="evenodd" clipRule="evenodd" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 4.3C7.74741 4.3 4.3 7.74741 4.3 12C4.3 16.2526 7.74741 19.7 12 19.7C16.2526 19.7 19.7 16.2526 19.7 12C19.7 7.74741 16.2526 4.3 12 4.3Z" fill="#505050"/>
							</svg>
						</div>
						<p className="main__accordion_text"><span>{props.sunBlogs}</span> minutes ago</p>
						<div className={cx("main__accordion_bird", sunset ? 'bird_rotate' : '')}>
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4.26636 12.8665C4.26636 13.0165 4.32469 13.1582 4.44136 13.2665C4.66636 13.4665 5.00802 13.4499 5.20802 13.2332L9.99161 7.9256L14.6166 13.2666C14.8166 13.4916 15.1583 13.4999 15.3833 13.2999C15.5999 13.0999 15.6166 12.7582 15.4166 12.5332L10.4249 6.78394C10.1916 6.5256 9.79161 6.5256 9.55827 6.78394L4.40802 12.4999C4.30802 12.6082 4.26636 12.7332 4.26636 12.8665Z" fill="#505050"/>
							</svg>
						</div>
					</div>
				</div>
				<div className={cx("main__tweet_container", sunset ? 'close_nav' : '' )}>
					<article className="main__tweet">
						<div className="main__art">
							<img src={Art} alt="" />
						</div>
						<div className="main__comments">
							<p className="main__author"><span>Jason Anderson</span> commented:</p>
							<div className="main__author_text">
								<p className="main__author_text_content">Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face. </p>
								<p className="main__author_text_date">– Jason, <span>10:30 am</span></p>
							</div>
						</div>
						<div className="main__checked">
							<div className="main__content_container">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.3061 9.08066C11.6823 8.99158 12 9.3134 12 9.7V10.7C12 11.418 12.5821 12 13.3 12H14.3C14.6866 12 15.0085 12.3178 14.9194 12.6939C14.6062 14.0162 13.418 15 12 15C10.3432 15 9.00003 13.6569 9.00003 12C9.00003 10.582 9.98382 9.39379 11.3061 9.08066Z" fill="#505050"/>
										<path fillRule="evenodd" clipRule="evenodd" d="M12 5C7.11931 5 3.86625 8.65464 2.43688 10.6825C1.8739 11.4812 1.8739 12.5188 2.43688 13.3175C3.86626 15.3454 7.11931 19 12 19C16.8808 19 20.1338 15.3454 21.5632 13.3175C22.1262 12.5188 22.1262 11.4812 21.5632 10.6825C20.1338 8.65464 16.8808 5 12 5ZM5.70874 8.92728C4.76185 9.77768 4.02109 10.6914 3.49945 11.4315C3.25305 11.7811 3.25305 12.2189 3.49945 12.5685C4.02109 13.3086 4.76185 14.2223 5.70873 15.0727C5.25483 14.1451 5.00004 13.1023 5.00004 12C5.00004 10.8977 5.25483 9.85489 5.70874 8.92728ZM12 17.7C8.85202 17.7 6.30004 15.148 6.30004 12C6.30004 8.85198 8.85202 6.3 12 6.3C15.1481 6.3 17.7 8.85198 17.7 12C17.7 15.148 15.1481 17.7 12 17.7ZM18.2913 8.92728C19.2382 9.77768 19.979 10.6914 20.5006 11.4315C20.747 11.7811 20.747 12.2189 20.5006 12.5685C19.979 13.3086 19.2382 14.2223 18.2913 15.0727C18.7452 14.1451 19 13.1023 19 12C19 10.8977 18.7452 9.85489 18.2913 8.92728Z" fill="#505050"/>
								</svg>
								<p className='main__checked_text'>432</p>
							</div>
							<div className={cx("main__content_container", "main__comments_style")}>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M4 8C4 6.34315 5.34315 5 7 5H17C18.6569 5 20 6.34315 20 8V14C20 15.6569 18.6569 17 17 17H9.52219L6.1121 19.7281C5.26091 20.409 4 19.803 4 18.7129V8ZM5.3 18.7129L9.06617 15.7H17C17.9389 15.7 18.7 14.9389 18.7 14V8C18.7 7.06112 17.9389 6.3 17 6.3H7C6.06112 6.3 5.3 7.06112 5.3 8L5.3 18.7129ZM8.49219 9.64356C8.49219 9.28458 8.7832 8.99356 9.14219 8.99356H14.8579C15.2169 8.99356 15.5079 9.28458 15.5079 9.64356C15.5079 10.0025 15.2169 10.2936 14.8579 10.2936L9.14219 10.2936C8.7832 10.2936 8.49219 10.0025 8.49219 9.64356ZM8.49219 12.6361C8.49219 12.2771 8.7832 11.9861 9.14219 11.9861L12.7912 11.9861C13.1502 11.9861 13.4412 12.2771 13.4412 12.6361C13.4412 12.9951 13.1502 13.2861 12.7912 13.2861H9.14219C8.7832 13.2861 8.49219 12.9951 8.49219 12.6361Z" fill="#505050"/>
								</svg>
								<p className='main__checked_text'>47</p>
							</div>
						</div>
					</article>
				</div>
			</div>
			<div className="main__accordion_container">
				<div className="main__accordion_button" onClick={openSiberia}>
					<p>Morning of Siberia</p>
					<div className="main__accordion_marks">
						<div className="main__accordion_icon">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12.65 8.15343C12.65 7.79445 12.359 7.50344 12 7.50344C11.641 7.50344 11.35 7.79445 11.35 8.15343V12.6534C11.35 13.0124 11.641 13.3034 12 13.3034H16C16.359 13.3034 16.65 13.0124 16.65 12.6534C16.65 12.2945 16.359 12.0034 16 12.0034H12.65V8.15343Z" fill="#505050"/>
							<path fillRule="evenodd" clipRule="evenodd" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 4.3C7.74741 4.3 4.3 7.74741 4.3 12C4.3 16.2526 7.74741 19.7 12 19.7C16.2526 19.7 19.7 16.2526 19.7 12C19.7 7.74741 16.2526 4.3 12 4.3Z" fill="#505050"/>
							</svg>
						</div>
						<p className="main__accordion_text"><span>{props.sibBlogs}</span> minutes ago</p>
						<div className={cx("main__accordion_bird", siberia ? 'bird_rotate' : '')}>
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4.26636 12.8665C4.26636 13.0165 4.32469 13.1582 4.44136 13.2665C4.66636 13.4665 5.00802 13.4499 5.20802 13.2332L9.99161 7.9256L14.6166 13.2666C14.8166 13.4916 15.1583 13.4999 15.3833 13.2999C15.5999 13.0999 15.6166 12.7582 15.4166 12.5332L10.4249 6.78394C10.1916 6.5256 9.79161 6.5256 9.55827 6.78394L4.40802 12.4999C4.30802 12.6082 4.26636 12.7332 4.26636 12.8665Z" fill="#505050"/>
							</svg>
						</div>
					</div>
				</div>
				<div className={cx("main__tweet_container", siberia ? 'close_nav' : '' )}>
					<article className="main__tweet">
						<div className="main__art">
							<img src={Art} alt="" />
						</div>
						<div className="main__comments">
							<p className="main__author"><span>Jason Anderson</span> commented:</p>
							<div className="main__author_text">
								<p className="main__author_text_content">Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face. </p>
								<p className="main__author_text_date">– Jason, <span>10:30 am</span></p>
							</div>
						</div>
						<div className="main__checked">
							<div className="main__content_container">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.3061 9.08066C11.6823 8.99158 12 9.3134 12 9.7V10.7C12 11.418 12.5821 12 13.3 12H14.3C14.6866 12 15.0085 12.3178 14.9194 12.6939C14.6062 14.0162 13.418 15 12 15C10.3432 15 9.00003 13.6569 9.00003 12C9.00003 10.582 9.98382 9.39379 11.3061 9.08066Z" fill="#505050"/>
										<path fillRule="evenodd" clipRule="evenodd" d="M12 5C7.11931 5 3.86625 8.65464 2.43688 10.6825C1.8739 11.4812 1.8739 12.5188 2.43688 13.3175C3.86626 15.3454 7.11931 19 12 19C16.8808 19 20.1338 15.3454 21.5632 13.3175C22.1262 12.5188 22.1262 11.4812 21.5632 10.6825C20.1338 8.65464 16.8808 5 12 5ZM5.70874 8.92728C4.76185 9.77768 4.02109 10.6914 3.49945 11.4315C3.25305 11.7811 3.25305 12.2189 3.49945 12.5685C4.02109 13.3086 4.76185 14.2223 5.70873 15.0727C5.25483 14.1451 5.00004 13.1023 5.00004 12C5.00004 10.8977 5.25483 9.85489 5.70874 8.92728ZM12 17.7C8.85202 17.7 6.30004 15.148 6.30004 12C6.30004 8.85198 8.85202 6.3 12 6.3C15.1481 6.3 17.7 8.85198 17.7 12C17.7 15.148 15.1481 17.7 12 17.7ZM18.2913 8.92728C19.2382 9.77768 19.979 10.6914 20.5006 11.4315C20.747 11.7811 20.747 12.2189 20.5006 12.5685C19.979 13.3086 19.2382 14.2223 18.2913 15.0727C18.7452 14.1451 19 13.1023 19 12C19 10.8977 18.7452 9.85489 18.2913 8.92728Z" fill="#505050"/>
								</svg>
								<p className='main__checked_text'>432</p>
							</div>
							<div className={cx("main__content_container", "main__comments_style")}>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M4 8C4 6.34315 5.34315 5 7 5H17C18.6569 5 20 6.34315 20 8V14C20 15.6569 18.6569 17 17 17H9.52219L6.1121 19.7281C5.26091 20.409 4 19.803 4 18.7129V8ZM5.3 18.7129L9.06617 15.7H17C17.9389 15.7 18.7 14.9389 18.7 14V8C18.7 7.06112 17.9389 6.3 17 6.3H7C6.06112 6.3 5.3 7.06112 5.3 8L5.3 18.7129ZM8.49219 9.64356C8.49219 9.28458 8.7832 8.99356 9.14219 8.99356H14.8579C15.2169 8.99356 15.5079 9.28458 15.5079 9.64356C15.5079 10.0025 15.2169 10.2936 14.8579 10.2936L9.14219 10.2936C8.7832 10.2936 8.49219 10.0025 8.49219 9.64356ZM8.49219 12.6361C8.49219 12.2771 8.7832 11.9861 9.14219 11.9861L12.7912 11.9861C13.1502 11.9861 13.4412 12.2771 13.4412 12.6361C13.4412 12.9951 13.1502 13.2861 12.7912 13.2861H9.14219C8.7832 13.2861 8.49219 12.9951 8.49219 12.6361Z" fill="#505050"/>
								</svg>
								<p className='main__checked_text'>47</p>
							</div>
						</div>
					</article>
				</div>
			</div>
			
		</div>
	);
}

export default Accordions;