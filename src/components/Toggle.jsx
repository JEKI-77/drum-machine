import React from 'react';


 // power on/off

export default class Toggle extends React.Component {
	render() {
		return (
			<label className="switch" >
				<input type="checkbox" checked={this.props.checked} onChange={this.props.changeHandler}/>
				<span className="slider round"></span>
			</label>
		);
	}
}