import React from "react";
import {connect} from "react-redux";
import {updateStep, deleteStep} from "../../actions";
import CustomEditable from "../CustomEditable";

class StepItem extends React.Component {
	onEditableSubmit = (text, type) => {
		this.props.updateStep({[type]: text}, this.props.step._id, this.props.task._id);
	};

	render() {
		return (
			<div className="stepItem">
				<CustomEditable
					text={this.props.step.content}
					editDisabled={false}
					onEditableSubmit={this.onEditableSubmit}
					type="content" />
				<button className="ui red button" onClick={() => this.props.deleteStep(this.props.step._id, this.props.task._id)}>
					<i className="x icon"></i>
				</button>
			</div>
		);
	};
};

export default connect(null, {updateStep, deleteStep})(StepItem);