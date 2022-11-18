import React from 'react';


//----- jsx example -----

// export class JSXDemo extends React.Component {
// 	render() {
// 		return (
// 			<h1> this is JSX </h1>
// 		)
// 	}
// }


//----- jsx example with babel -----

// export class JSXDemo extends React.Component {
//     render() {
//         return React.createElement("h1", null, "This is JSX");
//     }
// }


//----- jsx example with local variabel -----

// export class JSXDemo extends React.Component {
// 	render() {
// 			const jsx = <h1 id="jsx"> This is JSX with variabel local </h1>
// 			console.log(jsx)
// 			return jsx;
// 	}
// }


//----- jsx example with call function -----

// export class JSXDemo extends React.Component {
// 	handleOnClick = () => {
// 		console.log("clicked")
// 	}

// 	render() {
// 		return(
// 			<button id="btn" onClick = {this.handleOnClick}> 
// 				click here 
// 			</button>
// 		)		
// 	}
// }


//----- jsx example with return complex jsx -----

// export class JSXDemo extends React.Component{
// 	render(){
// 		return(
// 			<div>
// 		      <p>This is first JSX Element!</p>
// 		      <p>This is another JSX Element</p>
// 		    </div>

		    // atau

		    // [
		    // 	<p key="first">This is first JSX Element!</p>,
		    //   	<p key='second'>This is another JSX Element</p>
		    // ]

		    // atau
		    
		    // <React.Fragment>
		    // 	<p key="first">This is first JSX Element!</p>
		    //   	<p key='second'>This is another JSX Element</p>
		    // </React.Fragment>
// 		)
// 	}
// }


//----- jsx example with add js inside -----

// const Numbers = () => {
//  const number = 10;
//  const isBoolean = true;
//  return (
//   <div>
//    <p>Number: {number}</p>
//    <p>is Boolean : {`${isBoolean}`} </p>
//   </div>
//  );
// };

// export class JSXDemo extends React.Component{
// 	render(){
// 		return(
// 			<Numbers/>
// 		)
// 	}
// }


//----- jsx example with conditional operators -----

// const Data = () => {
//   const number = 10;
//   const string = "hello";
//   const array = [1, 2, 3, 4, 5];
//   const object = { name: "Ram" };
//   const noValue = undefined;
//   const nullValue = null;
//   const booleanValue = false;
//   const a = 10;
//   const b = 20;
//   const shouldShow = true;
//   const isFalse = false;

//   return (
//     <div>
//       <p>Number: {number}</p>
//       <p>String: {string} </p>
//       <p>String Method: {string.toUpperCase()} </p>
//       <p>Array: {array}</p>
//       <p>Map: {array.map(value => value * 2)}</p>
//       <p>Name: {object.name} </p>
//       <p>NoValue: {noValue} </p> {/* This will not be displayed */}
//       <p>NullValue: {nullValue} </p>
//       <p>BooleanValue: {booleanValue}</p>
//       <p>{a > b ? "Greater" : "Smaller"}</p>
//       <p>{shouldShow && "Shown"}</p>
//       <p>{isFalse && "This will not be displayed because it's false"}</p>
//       <p>{true && <p>This is nested inside jsx</p>}</p>
//       <p>{<h3>The value of number is: {number}</h3>}</p>
//     </div>
//   )
// }

// export class JSXDemo extends React.Component{
// 	render(){
// 		return(
// 			<Data />
// 		)
// 	}
// }



//----- jsx example with nest JSX expression -----

// const App = () => {
//   const number = 10;
//   return (
//     <div>
//       {number > 0 ? (
//         <p>Number {number} is positive</p>
//       ) : (
//         <p>Number {number} is Negative</p>
//       )}
//     </div>
//   );
// };

// export class JSXDemo extends React.Component{
// 	render(){
// 		return(
// 			<App/>
// 		)
// 	}
// }


// ----- jsx example with add class in JSX -----

const App = () => {
	const id = "some-id"
	return(
		<div>
	      	<h1 id={id}>This is a heading</h1>
	      	<h2 className="active">This is another heading</h2>	      
     		// <h2 class="active">This is another heading</h2> {/* Salah */}
	    </div>
	)
}

export class JSXDemo extends React.Component{
	render(){
		return(
			<App/>
		)
	}
}
