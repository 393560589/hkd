import Taro, { Component } from '@tarojs/taro'
import {Text,View} from '@tarojs/components'

export default class Pword extends Component{
  constructor(){
    super(...arguments)
    this.state={
      p:false
    }
  }

  play(){
    this.setState({
      p:!this.state.p
    })
  }
  render(){
    const { p }=this.state
    return (
        <View onClick={this.play.bind(this)}>
          <Text>{this.props.children}{p? '大佬':'小囖咯'}</Text>
        </View>

    )
  }
}
