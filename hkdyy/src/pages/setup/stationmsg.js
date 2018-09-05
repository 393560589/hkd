import React,{PureComponent} from 'react'
import { Button, } from 'antd'
import Header from '../../components/Card'
import styles from './msgrem.css'

import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Stationmsg extends PureComponent{
  render(){
    return (
     <div className="content">
     <Header>消息模板编辑</Header>
     <div className="tablebox">
        <div className={styles.msgbox}>
          <div className="tip-title">
            <span className="left" style={{marginLeft:"20px"}}>站内消息</span>
          </div> 
          <ul>
            <li>
              <span className={styles.xti}>消息类型：</span>
              <small>订单创建时</small>
            </li>
            <li>
              <span className={styles.xti}>标签说明：</span>
              <table>
                <tr>
                  <td>用户名：$Username$</td>
                  <td>订单号：$OrderId$</td>
                  <td>订单金额：$Total$</td>
                </tr>
                <tr>
                  <td>配送方式：$Shipping_Type$</td>
                  <td>收货人姓名：$Shipping_Name$</td>
                  <td>收货人地址：$Shipping_Addr$</td>
                </tr>
                <tr>
                  <td>收货人邮编：$Shipping_Zip$</td>
                  <td>收货人电话：$Shipping_Phone$</td>
                  <td>收货人手机：$Shipping_Cell$</td>
                </tr>
                <tr>
                  <td>收货人Email：$Shipping_Email$</td>
                  <td>商城名称：$SiteName$</td>
                  <td>备注：$Memo$</td>
                </tr>
              </table>
            </li>
            <li>
              <span className={styles.xti}><b>* </b>邮件标题：</span>
              <input type="text" value="订单已提交成功" name="" />
            </li>
            <li>
              <span className={styles.xti}><b>* </b>内容模板：</span>
              <textarea></textarea>
              <font>内容不能为空，长度限制在1-300个字符之间</font>
            </li>
          </ul>
          <a className={styles.upbtn}>提交</a>
        </div> 
     </div>
    </div>

    )
  }
}

