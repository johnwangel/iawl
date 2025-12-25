export function Snowflakes(props){
	return 	<div className="snowflakes" aria-hidden="true">
						{ Array.from(Array(12).keys()).map((s,i)=><Snowflake key={i} n={i+1} />) }
					</div>
}

function Snowflake(props){
	const size = props.n%4 ? 'small' : props.n%3 ? 'medium' : props.n%2 ? 'large' :  'extra-large'
	return <div className="snowflake">
					<div className={`inner ${size}`}>❅</div>
				</div>
}