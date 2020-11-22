import React from 'react'
import CartTotal from './CartTotal'
import CartList from './CartList'
import CartHeader from './CartHeader';




export default class Cart extends React.Component {
  constructor(props){
    super(props);
    }

  render(){


      return(
      <section className="main__summary">
        <CartHeader/>

        <CartList currentState = {this.props.currentState}/>

      {/*Cart Total*/}
        <CartTotal currentState = {this.props.currentState}/>
     {/*Cart Total*/}
     </section>
    )
  }
}