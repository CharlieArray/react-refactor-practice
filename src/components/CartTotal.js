import React, { Component } from 'react'


// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  

export default class CartTotal extends Component {

    render() {
     {/*Cart Total*/}

        // Total cost calculator 
        const total = Object.keys(this.props.currentState).reduce(
            (acc, curr) => acc + this.props.currentState[curr].cost,
            0
          );
   {/*Cart Total*/}

        return (
            <div>
                {/*Cart Total*/}
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                    {USCurrencyFormat.format(total)}
                    </div>
                </div>
                {/*Cart Total*/}
            </div>
        )
    }
}
