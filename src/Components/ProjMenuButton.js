import React from 'react';

export default class ProjMenuButton extends React.Component {
    render() {
      return(
        <button  onClick={sayHello} style={{width:120, height:40, borderColor:'grey', borderWidth:.5, marginRight:40, borderRadius:2}}>{this.props.text}</button>
      )
      ;
    }
    
  }
  function sayHello() {
    alert('You clicked me!');
  }
  // const styles = StyleSheet.create({

  //   main: {
  //     flex: 1,
  //     backgroundColor:'green'
  //   }
  // })