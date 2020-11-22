import React from 'react'
import FeaturesHeader from './FeaturesHeader';



// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';


// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});


export default class Features extends React.Component{
  constructor(props){
    super(props);
  }
  

  
   render(){
      console.log(this.props.featuresObject)

      const features = Object.keys(this.props.featuresObject).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.featuresObject[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
       
        return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === this.props.currentState[feature].name}
            onChange={e => this.props.updateFeature(feature, item)}
          />
          {/*Feature - Accessory*/}
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({USCurrencyFormat.format(item.cost)})
          </label>
          {/*Feature - Accessory*/}
        </div>
        );
      });


      
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>

          </legend>
          {options}
        </fieldset>
      );
    });
    
    return(
      <div>
        <form className="main__form">
        <FeaturesHeader/>
        {features}
        </form>
    </div>
        )

    }

  }