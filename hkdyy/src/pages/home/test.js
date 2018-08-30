import React,{PureComponent,Fragment} from 'react'
import { Tooltip,Button } from 'antd'
import { connect } from 'dva'
import { LeftNav } from '../../components/test'
@connect(({index})=>({index}))

export default class Test extends PureComponent{
  state={
    list:999
  }
  componentDidMount(){
    console.log(this.props)
  }//js挂载后,基本js交互行为可以写这里
  getProps=()=>{
    this.setState({
      list:this.state.list-1
    })
  }
  render(){
    const {list} = this.state
    return (
      <Fragment>
        <LeftNav>
          { list }
        </LeftNav>
        <Button onClick={()=>this.getProps()} type={'primary'}> 按钮</Button>
        <Button onClick={()=>this.getProps()} type={'primary'}> 按钮2</Button>
      </Fragment>

    )
  }
}
