import React from 'react'
import FeaturesOption from './FeaturesOption';


export default class FeaturesMain extends React.Component{
       
    render(){

        const features = Object.keys(this.props.featuresObject).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
  
  
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
        <FeaturesOption
          featuredProp = {feature}
          featuresObjects ={this.props.featuresObject}
          currentStatess= {this.props.currentStates}
          updateFeaturess = {this.props.updateFeatures}
        />
          </fieldset>
        );
      });
      
      return(
        <div>
          {features}
       </div>
          )
  
      }

}