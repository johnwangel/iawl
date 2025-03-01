import LOGO from '../assets/iawl_logo.jpg'
import '../styles/home.scss'

export function Main(props){
	return <div className='app-main'>
					<div className='logo-container'>
						<img className='expand-img' src={LOGO} alt='logo' />
						<div className='credits'>
							<div className='authors'>
								<div className='au-cont left'>
									<div className='super-title'> Music By:</div>
									<div className='author'>Andrew Abrams</div>
								</div>
								<div className='au-cont right'>
									<div className='super-title'> Book &amp; Lyrics By:</div>
									<div className='author'> John Atkins </div>
								</div>
							</div>
						</div>
					</div>


							<div className='ack'>
								<i>It's A Wonderful Life</i> is based on the story 'The Greatest Gift' by Philip Van Doren Stern.
								   'The Greatest Gift' is used by permission of The Greatest Gift Corporation.
							</div>				 


				 </div>



}