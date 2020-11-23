import React from 'react'
import FeaturesHeader from './FeaturesHeader';
import FeaturesMain from './FeaturesMain'
import FEATURES from '../FeaturesStore'


export default class Features extends React.Component{
 
   render(){


    return(
      <div>
        <form className="main__form">
        <FeaturesHeader/>
        <FeaturesMain
          featuresObject ={FEATURES}
          currentStates= {this.props.currentState}
          updateFeatures = {this.props.updateFeature}
        />

        </form>
    </div>
        )
    }

  }