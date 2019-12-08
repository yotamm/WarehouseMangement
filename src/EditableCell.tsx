import React, { useCallback, useEffect, useRef, useState } from "react";
import { updateFunction }                                  from "./types";


const EditableCell = (props: {text: string | number, field: string, id: number, type: string, onChange: updateFunction}) => {
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
		              type={props.type}
		              value={props.text}
		              onChange={e => props.onChange(props.id, {[props.field]: props.type === 'number' ? parseInt(e.target.value) : e.target.value})}/>
	       </div>) :
	       <div onClick={onTextClick}>{props.text}</div>;
};

export default EditableCell;