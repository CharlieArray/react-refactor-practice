import React from 'react'
import FeaturesOption from './FeaturesOption';


export default class FeaturesMain extends React.Component{
       
    render(){

        const {feature,idx} = this.props
        const featureHash = feature + '-' + idx;
  
        const options = this.props.featuresObject[feature].map(item => {
        
          return(
            <FeaturesOption
            featuredProp = {feature}
            item = {item}
            featuresObjects ={this.props.featuresObject}
            currentStatess= {this.props.currentStates}
            updateFeaturess = {this.props.updateFeatures}
          />
          )

        })
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
   
  
      }

}