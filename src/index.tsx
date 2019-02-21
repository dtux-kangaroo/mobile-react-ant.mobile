import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import Routers from './router'
import "assets/styles/index.scss";
import store from './store'
import "@babel/polyfill";

interface AppProps{}
interface AppStates{}

class App extends React.Component<AppProps,AppStates> {
    
  constructor(props) {
    super(props)
  }

  render():JSX.Element{
    return(
      <Provider store={ store }>
        <Routers />
      </Provider>
    )
  }
}
render(<App/>,document.getElementById('root'))
