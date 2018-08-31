import React,{PureComponent} from 'react'
import { Button, } from 'antd'
import {Card} from '../../components/Card'
import styles from './activity.css'

import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
  render(){
    return (
    <div className="content">
     <Card>编辑支付方式</Card>
     <div className="tablebox">
        <div className={styles.addbox}>
          <div className="tip-title">
            <span className="left" style={{marginLeft:"20px"}}>编辑支付方式</span>
          </div> 
          <ul>
            <li>
              <span><b>* </b>支付方式名称：</span>
              <input type="text" className="alin" name="" />
            </li>
            <li>
              <span>支付方式描述：</span>
              <textarea placeholder="请输入内容"></textarea>
            </li>
            <li>
              <span>微信公众号AppId：</span>
              <input type="text" className="alin" name="" />
            </li>
             <li>
              <span>微信公众号AppSecret：</span>
              <input type="text" className="alin" name="" />
            </li>
             <li>
              <span>商户支付密钥Key：</span>
              <input type="text" className="alin" name="" />
            </li>
             <li>
              <span>受理商ID(即微信支付商户号)：</span>
              <input type="text" className="alin" name="" />
            </li>
             <li>
              <span>支付手续费：</span>
              <input type="text" className="alin" name="" />
            </li>
             <li>
              <span>货到付款：</span>
              <small>是</small>
            </li>
             <li>
              <span>在线支付：</span>
              <small>否</small>
            </li>
          </ul>
          <a className={styles.upbtn}>提交</a>
        </div> 
     </div>
    </div>

    )
  }
}

