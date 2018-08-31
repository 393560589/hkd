import React,{PureComponent} from 'react'
import { Button, } from 'antd'
import styles from './accountset.less'

import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
  render(){
    return (
      <div className="content">
        <div className="con-title">
          <div className="titlesec">
            <span className="left">账户设置</span>
            <a className="right refresh">刷新</a>
          </div>
        </div>
        <div className="tablebox">
          <div className={styles.actset}>
            <div className="tip-title">
              <h3 className="left">账户设置</h3>
            </div>
            <div className={styles.acsetbox}>
              <a>
                <img src={require('../../assets/u417.png')}/>
                <span>上传头像</span>
              </a>
              <ul>
                <li>
                  <span><b>*</b>用户名：</span>
                  <input type="text" disabled="disabled" value="admin" name=""/>
                </li>
                <li>
                  <span><b>*</b>Email：</span>
                  <input type="text" disabled="disabled" value="1212122@qq.com" name=""/>
                </li>
                <li>
                  <span><b>*</b>旧密码：</span>
                  <input type="password" name=""/>
                </li>
                <li>
                  <span><b>*</b>新密码：</span>
                  <input type="password" name=""/>
                </li>
                <li>
                  <span><b>*</b>确认密码：</span>
                  <input type="password" name=""/>
                </li>
              </ul>
              <Button type={'primary'} style={{marginTop:'20px'}} className={styles.uppasswd}>提交</Button>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

