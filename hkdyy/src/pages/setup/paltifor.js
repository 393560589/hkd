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
     <Card>平台信息</Card>
     <div className="tablebox">
        <div className={styles.addbox}>
          <div className="tip-title">
            <span className="left"  style={{marginLeft:"20px"}}>平台信息设置</span>
          </div> 
          <ul>
            <li>
              <span><b>* </b>平台名称：</span>
              <input type="text" className="alin" name="" />
            </li>
            <li>
              <span><b>* </b>平台标题：</span>
              <input type="text" className="alin" name="" />
            </li>
            <li>
              <span><b>* </b>平台描述：</span>
              <input type="text" className="alin" name="" />
            </li>
            <li>
              <span><b>* </b>关键词：</span>
              <input type="text" className="alin" name="" />
            </li>
            <li>
              <span><b>* </b>平台LOGO：</span>
              <input type="file" name="" />
              <font>只能上传jpg/png格式文件，文件不能超过50kb</font>
            </li>
            <li>
              <span><b>* </b>客服热线：</span>
              <input type="text" className="alin" name="" />
            </li>
            <li>
              <span><b>* </b>客服邮箱：</span>
              <input type="text" className="alin" name="" />
            </li>
            <li>
              <span>简介：</span>
              <textarea placeholder="请输入内容"></textarea>
              <font>该信息将在用户中心欢迎页面显示</font>
            </li>
          </ul>
          <a className={styles.upbtn}>提交</a>
        </div> 
     </div>
    </div>

    )
  }
}

