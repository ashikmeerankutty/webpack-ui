import React, { Component} from "react";
import ReactDOM from "react-dom";

import { Banner } from "./components/Banner";
import { Base } from "./Base";

import store from './store';
import { Provider } from 'react-redux';

import 'babel-polyfill';
import "./App.css";

class App extends Component{
  constructor(props){
      super(props);
  }

  render(){
    return(
        <>
            <Banner></Banner>
            <Base />
        </>
    );
  }
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);

if (module.hot) {
    module.hot.accept();
}