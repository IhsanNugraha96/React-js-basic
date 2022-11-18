import React from 'react';

//======== MOUNTING ========
//----- Constructor() -----

// export class ReactLifeCycle extends React.Component{
// 	constructor(props){
// 		super(props)
// 		this.state = {
// 			name : "constructor"
// 		}
// 	}

// 	render(){
// 		return(
// 			<p> contoh : {this.state.name} </p>
// 		)
// 	}
// }


//----- getDerivedStateFromProps() -----

//  export class ReactLifeCycle extends React.Component{
// 	constructor(props){
// 		super(props)
// 		this.state = {
// 			name : "constructor"
// 		}
// 	}

// 	static getDerivedStateFromProps(props, state){
// 		return {name : props.newName}
// 	}

// 	render(){
// 		return(
// 			<p> contoh : {this.state.name} </p>
// 		)
// 	}
// }


// ----- render() -----

// export class ReactLifeCycle extends React.Component{
// 	render(){
// 		return(
// 			<p> ini adalah contoh render</p>
// 		)
// 	}
// }


//----- componentDidMount() -----

// export class ReactLifeCycle extends React.Component{
// 	constructor(props){
// 		super(props)
// 		this.state = {
// 			favColor : "blue"
// 		}
// 	}

// 	componentDidMount() {
// 		setTimeout(() => {
// 			this.setState({favColor: "yellow"})
//   		}, 1000)
// 	}

// 	render(){
// 		return(
// 			<h1> My Favourite Color is {this.state.favColor} </h1>
// 		)
// 	}
// }



//======== UPDATING ========

//----- getDerivedStateFromProps() -----

// export class ReactLifeCycle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   static getDerivedStateFromProps(props, state) {
//     return {favoritecolor: props.favcol };
//   }
//   changeColor = () => {
//     this.setState({favoritecolor: "blue"});
//   }
//   render() {
//     return (
//       <div>
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }


//----- shouldComponentUpdate() -----

// export class ReactLifeCycle extends React.Component {
// 	constructor(props) {
// 	    super(props);
//     	this.state = {favoritecolor: "red"};
//   	}
//   	shouldComponentUpdate() {
//     	return true; //yang menentukan apakah state bisa diupdate atau tidak
//   	}
//   	changeColor = () => {
//     	this.setState({favoritecolor: "blue"});
//   	}
//   	render() {
//     	return (
//       		<div>
//       			<h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       			<button type="button" onClick={this.changeColor}>Change color</button>
//       		</div>
//     	)
//   	}
// }


//----- render() -----

// export class ReactLifeCycle extends React.Component {
//   	constructor(props) {
//     	super(props);
//     	this.state = {favoritecolor: "Yellow"};
//   	}
//   	changeColor = () => {
//     	this.setState({favoritecolor: "Matcha"});
//   	}
//   	render() {
//     	return (
//       		<div>
//       			<h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       			<button type="button" onClick={this.changeColor}>Change color</button>
//       		</div>
//     	)
//   	}
// }


//----- getSnapshotBeforeUpdate() -----

// export class ReactLifeCycle extends React.Component {
//   	constructor(props) {
//     	super(props);
//     	this.state = {favoritecolor: "red"};
//   	}
  	
//   	changeColor = () => {
//     	this.setState({favoritecolor: "Matcha"});
//   	}

//   	getSnapshotBeforeUpdate(prevProps, prevState) {
//     	document.getElementById("div1").innerHTML =
//     	"Before the update, the favorite was " + prevState.favoritecolor;
//   	}

//   	componentDidUpdate() {
//     	document.getElementById("div2").innerHTML =
//     	"The updated favorite is " + this.state.favoritecolor;
//   	}

//   	render() {
//     	return (
//       		<div>
//         		<h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         		<button type="button" onClick={this.changeColor}>Change color</button>
//         		<div id="div1"></div>
//         		<div id="div2"></div>
//       		</div>
//     	)
//   	}
// }


//----- componentDidUpdate() -----

// export class ReactLifeCycle extends React.Component {
//   	constructor(props) {
//     	super(props);
//     	this.state = {favoritecolor: "red"};
//   	}

//   	componentDidMount() {
//     	setTimeout(() => {
//       		this.setState({favoritecolor: "yellow"})
//     	}, 1000)
//   	}

//   	componentDidUpdate() {
//    	 	document.getElementById("mydiv").innerHTML =
//     	"The updated favorite is " + this.state.favoritecolor;
//   	}

//   	render() {
//     	return (
//       		<div>
//       			<h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       			<div id="mydiv"></div>
//       		</div>
//     	)
//   	}
// }



//======== UNMOUNTING ========

//----- componentWillUnmount() -----

export class ReactLifeCycle extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {show: true};
	}
	
	delHeader = () => {
	    this.setState({show: false});
	}
	
	render() {
	    let myheader;
	    if (this.state.show) {
	      	myheader = <Child />;
	    }

	    return (
	      	<div>
	      		{myheader}
	      		<button type="button" onClick={this.delHeader}>Delete Header</button>
	      	</div>
	    )
	}
}

class Child extends React.Component {
  	componentWillUnmount() {
	    alert("The component named Header is about to be unmounted.");
	}
	
	render() {
	    return (
	      	<h1>Hello World!</h1>
	    )
	}
}