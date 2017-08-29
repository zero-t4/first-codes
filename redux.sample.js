import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, RaisedButton } from 'material-ui/';
import { createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

var initialStete = {
	totalCount: 0,
	val: false,
	items:{},
};

function reducer(store = initialStete, action) {

  switch (action.type) {
  case 'INCREMENT':

  	var name = action.name;
  	const totalCount = Object.keys(store.items).reduce((result,key)=>result+store.items[key].count,0)||1;
    return {
      ...store,
      totalCount: totalCount,
      isOdd: totalCount % 2 == 0,
      items:{
      	...store.items,
      	[name]: {
      		count: store.items[name]? ++store.items[name].count: 1,
      	}
      }
      
    }
    
  default:
    return store
  }
}

var store = createStore(reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


var mapStateToProps = (store, OwnProps) => {

	return {
		isOdd: store.isOdd,
		count: (store.items[OwnProps.buttonName]||{}).count || 0,
		buttonName: OwnProps.buttonName
	}
}
var mapDispatchToProps = (dispatch) => {
	return {
		onClick: (buttonName) =>  dispatch({ type: 'INCREMENT', name: buttonName })
	}
}

var Buttons  = connect(mapStateToProps, mapDispatchToProps)( props => {

	return <RaisedButton label={props.buttonName} onClick={()=>props.onClick(props.buttonName)} primary={props.isOdd}>{ props.count} </RaisedButton> 
});

var App = () => {
  return (
	<MuiThemeProvider>
		<Provider store={store}>
			<div>
				<Buttons buttonName="Default"  />
				<Buttons buttonName="Primary"  />
				<Buttons buttonName="Secondary"  />
				<Buttons buttonName="Disabled"  />
				<Buttons buttonName="Full width" />
			</div>	
		</Provider>
	</MuiThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

