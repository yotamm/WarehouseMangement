import React, { useCallback, useEffect, useRef, useState } from "react";


const EditableCell = (props: any) => {
	const [isEditMode, setIsEditMode] = useState(false);
	const _ref = useRef(null);

	const handleClick = useCallback((e: Event) => {
		if(isEditMode && _ref && _ref.current && _ref.current !== e.target) {
			setIsEditMode(false);
		}
	}, [isEditMode]);

	const onTextClick = useCallback(() => {
		setIsEditMode(true);
	}, []);

	useEffect(() => {
		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		}
	}, [handleClick]);

	return isEditMode ?
	       (<div className="ui input">
		       <input ref={_ref}
		              type="text"
		              value={props.text}
		              onChange={e => props.onChange(props.id, {[props.field]: e.target.value})}/>
	       </div>) :
	       <div onClick={onTextClick}>{props.text}</div>;
};

export default EditableCell;