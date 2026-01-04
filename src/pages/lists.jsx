import DOMPurify from 'dompurify';

export function ListItem(props){
	return <div className='listItem'>
					<div className='listHead'>{props.item.head} {props.item.role ? <span className='role'>({props.item.role})</span> : null}</div>
					<div className='name' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.item.desc) }} />
				 </div>

}

export function CastItem(props){
	return <div className='castItem'>
					<div className='role'>{props.item.role}</div>
					<div className='dots'>&nbsp;</div>
					<div className='name' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.item.name) }} />
				 </div>

}