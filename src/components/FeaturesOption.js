import React, { Component } from 'react'

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';


// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});


export default class FeaturesOption extends Component {

    render(){
    
    
        const feature = this.props.featuredProp
        const {item} = this.props

        const itemHash = slugify(JSON.stringify(item));
            

                return (
        
                <div key={itemHash} className="feature__item">
                    <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
        
                    name={slugify(feature)}
                    checked={item.name === this.props.currentStatess[feature].name}
                    onChange={e => this.props.updateFeaturess(feature, item)}
                    />
        
                    {/*Feature - Accessory*/}
                    <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                    </label>
                    {/*Feature - Accessory*/}
                </div>
                );

    }
      
}
            
  
