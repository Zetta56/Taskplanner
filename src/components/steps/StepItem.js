import React from "react";
import {connect} from "react-redux";
import {updateStep, deleteStep} from "../../actions";
import CustomEditable from "../CustomEditable";

class StepItem extends React.Component {
	render() {
		const step = this.props.step,
			  done = this.props.step.done ? "done" : "";

		return (
			<div className={`stepItem ${done}`}>
				<div className="ui checkbox">
					<input type="checkbox" onChange={() => this.props.updateStep({done: !step.done}, step._id, this.props.task._id)} />
					<label></label>
				</div>
				<div className={`content ${done}`}>
					<CustomEditable
						text={step.content}
						defaultText="New Step"
						editDisabled={false}
						onEditableSubmit={(text) => this.props.updateStep({content: text}, step._id, this.props.task._id)} />
				</div>
				<button className="ui red button" onClick={() => this.props.deleteStep(step._id, this.props.task._id)}>
					<i className="x icon"></i>
				</button>
			</div>
		);
	};
};

export default connect(null, {updateStep, deleteStep})(StepItem);