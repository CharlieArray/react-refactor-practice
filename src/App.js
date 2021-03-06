import React from 'react';
import AppHeader from './components/AppHeader';
import Features from './components/Features.js'
import Cart from './components/Cart'
import './App.css';


class App extends React.Component {

  constructor(props){
    super(props);

  this.state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };
}

  
  //note: this setState function needs to be with state because of 'this'
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    return (

      <div className="App">
       <AppHeader/>
        <main>
        <Features
        currentState = {this.state.selected}
        updateFeature = {this.updateFeature}
          />
        <Cart currentState = {this.state.selected}/>
        </main>
      </div>


    );
  }
}

export default App;
