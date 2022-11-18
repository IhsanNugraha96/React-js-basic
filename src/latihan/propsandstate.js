import React from 'react';

//----- example props -----

// const PropsChild = (props) => {
// 	return(
// 		<div>
// 			<p>My name is {props.name}</p>
// 			<p>Gender : {props.gender}</p>
// 		</div>
// 	)
// }

// export class PropsAndState extends React.Component{
// 	render(){
// 		return(
// 			<PropsChild name="ihsan nugraha" gender="male"/>
// 		)
// 	}
// }


//----- example state with update state-----

export class PropsAndState extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name : "Ihsan Nugraha",
			gender : "female"
		}
	}

	onUpdate = () => {
		this.setState({
			gender : "Male"
		})
	}

	render(){
		return(
			<div>
				<p>My name is {this.state.name} </p>
				<p>gender : {this.state.gender} </p>
				<button onClick={this.onUpdate}>
					Update gender
				</button>
			</div>
		)
	}
}