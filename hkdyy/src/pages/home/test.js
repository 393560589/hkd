import React,{PureComponent} from 'react'
import { Tooltip,Button } from 'antd'
import { connect } from 'dva'
import { LeftNav } from '../../components/test'
@connect(({index})=>({index}))

export default class Test extends PureComponent{
  componentDidMount(){
    console.log(this.props)
  }//js挂载后,基本js交互行为可以写这里
  getProps=()=>{
    alert(this.props.index.list)
  }
  render(){
    return (
      <div>
        <LeftNav>
          这是一个测试
        </LeftNav>
        <Button onClick={()=>this.getProps()} type={'primary'}> 按钮</Button>
        <Button onClick={()=>this.getProps()} type={'primary'}> 按钮2</Button>
      </div>

    )
  }
}
