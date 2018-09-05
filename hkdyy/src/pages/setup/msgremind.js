import React,{PureComponent} from 'react'
import { Button, } from 'antd'
import Header from '../../components/Card'
//import styles from './accountset.less'

import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Msgremind extends PureComponent{
  render(){
    return (
     <div className="content">
      <Header>消息提醒</Header>
      <div className="tablebox">
      <div className="logbox" style={{border:"1px solid #e4e4e4",background:"#fff"}}>
        <div className="tip-title">
          
                <span className="left" style={{marginLeft: "20px"}}>消息提醒</span>
            </div>
            <table width="100%" className="litable">
          <tr>
            <th>消息类型</th>
            <th>电子邮件</th>
            <th>站内消息</th>
            <th>手机短信</th>
            <th>APP消息推送</th>
          </tr>
          <tr>
            <td>订单创建时</td>
            <td>
              <label className="goodsl"><input type="checkbox" className="goodsk" name="" /><i className="goodsi fa fa-square-o"></i>是否发送</label>
              <a style={{color:"#1abc9c"}}>编辑内容</a>
            </td>
            <td>
              <label className="goodsl"><input type="checkbox" className="goodsk" name="" /><i className="goodsi fa fa-square-o"></i>是否发送</label>
              <a>编辑内容</a>
            </td>
            <td>
              <label className="goodsl"><input type="checkbox" className="goodsk" name="" /><i className="goodsi fa fa-square-o"></i>是否发送</label>
              <a>编辑内容</a>
            </td>
            <td>
              <label className="goodsl"><input type="checkbox" className="goodsk" name="" /><i className="goodsi fa fa-square-o"></i>是否发送</label>
              <a>编辑内容</a>
            </td>
          </tr>
            </table>
           
      </div>
        </div>
    </div>
    )
  }
}

