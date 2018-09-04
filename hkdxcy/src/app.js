import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'


import Index from './pages/index'

import configStore from './store'

import './app.less'
//https://nervjs.github.io/taro/   框架
//https://github.com/NervJS/taro-ui-demo   ui
const store = configStore();

class App extends Component {

  config = {
    pages: [
      'pages/acc/index',
      'pages/index/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      color:'#999',
      list:[
        {
          pagePath: 'pages/acc/index',
          text:'首页'
        },
        {
          pagePath: "pages/index/index",
          text:'厂家'
        }, {
          pagePath: "pages/index/index",
          text:'进货车'
        }, {
          pagePath:'pages/acc/index',
          text:'账户'
        }

      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
