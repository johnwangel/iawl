import { useState, useEffect, useRef } from 'react';

import { PHOTOS } from '../helpers/lists.jsx'

export function PhotoInline(props){
	const item = (props.file) ? props.file : PHOTOS.find(p=>p.id===parseInt(props.id)).file
	return <div className='photo-inline'>
				<img src={`/assets/photos/${item}`} />
			</div>
}

export function Photos(props){
	return	<div className='photo-container'>
						{ PHOTOS.map(p=><Photo key={Math.random()} item={p} />  )}
					</div>
}

function Photo(props){
	return <div className='photo'>
					<img src={`/assets/photos/${props.item.file}`} />
					<div className='caption'>{props.item.caption}</div>
				</div>
}
