import React, { Component } from 'react'


// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  

export default class CartList extends Component {
    render() {

        const summary = Object.keys(this.props.currentState).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.currentState[feature];
      
            return (
              <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(selectedOption.cost)}
                </div>
              </div>
            );
          });


        return (
            <div>
              {summary}
            </div>
        )
    }
}
