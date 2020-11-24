import React from 'react'
import FeaturesHeader from './FeaturesHeader';
import FeaturesMain from './FeaturesMain'
import FEATURES from '../FeaturesStore'


export default class Features extends React.Component{
 
   render(){
     //can only have one component in a .map high order method
    const features = Object.keys(FEATURES).map((feature, idx) => {
      return(
       <FeaturesMain
          feature = {feature}
          idx = {idx}
          featuresObject ={FEATURES}
          currentStates= {this.props.currentState}
          updateFeatures = {this.props.updateFeature}
        />
      )
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