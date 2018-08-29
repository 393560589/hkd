import React,{PureComponent} from 'react'
import {connect} from 'dva'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import withRouter from 'umi/withRouter'
//import Flexable from '../utils/flexable'
import Disscale from '../utils/disscale'
import './index.less'

//Flexable.init();
Disscale.init();

class App extends PureComponent {
    constructor(props){
      super(props)
    }
    componentDidUpdate(prevProps){
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
      }
    }
    render(){
      return (
        <ReactCSSTransitionGroup
          transitionName="slide-in"
          component="main"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
            <div key={this.props.location.pathname}>
              {
                this.props.children
              }
            </div>
      </ReactCSSTransitionGroup>
      )
    }
}
export default connect(({ loading })=>({ loading }))(withRouter(App))
