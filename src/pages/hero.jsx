export function Hero(props){
			return		<div className='op-container full'>
							<div className='hero'>

								<div className='au-cont left'>
									<div className='super-title'> Music By:</div>
									<div className='author'>Andrew Abrams</div>
								</div>

								<div className='photo-group'>
									<img className='img-base' src='/assets/photos/logo_bg.png' />
									<img className='img-overlay' id='text1' src='/assets/photos/logo_text1.png' />
									<img className='img-overlay' id='text2' src='/assets/photos/logo_text2.png' />
									<img className='img-overlay' id='text3' src='/assets/photos/logo_text3.png' />
									<img className='img-overlay' id='text4' src='/assets/photos/logo_text4.png' />
									<img className='img-overlay' id='moon1' src='/assets/photos/logo_moon.png' />
								</div>


								<div className='au-cont right'>
									<div className='super-title'> Book &amp; Lyrics By:</div>
									<div className='author'> John W. Atkins </div>
								</div>

							</div>
							
							<div className='authors'>

								<div className='au-cont left'>
									<div className='super-title'> Music:</div>
									<div className='author'>Andrew Abrams</div>
								</div>

								<div className='au-cont right'>
									<div className='super-title'> Book &amp; Lyrics:</div>
									<div className='author'> John W. Atkins </div>
								</div>

							</div>
							<div className='ack'>
								<div><i>It&rsquo;s A Wonderful Life</i> is based on the story &lsquo;The Greatest Gift&rsquo; by Philip Van Doren Stern.
						   &lsquo;The Greatest Gift&rdquo; is used by permission of The Greatest Gift Corporation.</div>
							</div>
					</div>
}