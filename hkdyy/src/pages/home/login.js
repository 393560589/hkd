import React,{PureComponent} from 'react'
import { Button } from 'antd'
import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Login extends PureComponent{
  componentDidMount(){
    console.log(this.props)
  }//js挂载后,基本js交互行为可以写这里
  getProps=()=>{
    alert(this.props.index.list)
  }
  render(){
    return (
      <div>

        <Button onClick={()=>this.getProps()} type={'primary'}> 按钮</Button>
      </div>

    )
  }
}

