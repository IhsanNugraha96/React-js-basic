import logo from './logo.svg';
import './App.css';
// import { JSXDemo } from "./latihan/jsx";
// import {Component} from "./latihan/component";
// import {PropsAndState} from "./latihan/propsAndState";
// import {ReactLifeCycle} from "./latihan/reactLifeCycle";
// import {StateHook} from "./latihan/stateHook";
// import {ReactHook} from './latihan/reactHook';
import {Axios} from './latihan/axios';
// import {Redux} from "./redux/redux";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* ----------latihan 1---------- */}
        {/* <JSXDemo /> */}
        {/* <Component/> */}
        {/* <PropsAndState/> */}
        {/* <ReactLifeCycle/> */}
        {/* <ReactLifeCycle  newName = "Derived State"/> */}
        {/* <ReactLifeCycle  favcol="yellow"/> */}


        {/*----------latihan 2---------- */}
        {/* <StateHook/> */}
        {/* <ReactHook /> */}
         <Axios /> 


        {/*----------latihan 3---------- */}
        {/* <Redux /> */}

      </header>
    </div>
  );
}

export default App;
