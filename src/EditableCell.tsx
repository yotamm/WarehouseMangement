import React, { useState } from "react";

const EditableCell = (props) => {
	const [isEditMode, setIsEditMode] = useState(false);
	const [text, setText] = useState(props.text);

	return isEditMode ? <input type="text" value={text} onBlur={event => {
		setIsEditMode(false);
		setText(event.target.value);
		props.onChange(props.id);
	}}/> : <div onClick={() => setIsEditMode(true)}>{text}</div>;
};

export default EditableCell;