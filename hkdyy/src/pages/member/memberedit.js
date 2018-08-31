import React,{PureComponent} from 'react'
import { Button, } from 'antd'
//import styles from './accountset.less'

import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
  render(){
    return (
      <div className="content">
        <div className="con-title">
          <div className="titlesec">
            <a className="left" href="../menber/menberman.html">用户详情</a>
            <a className="left active" href="../menber/menberedit.html">编辑资料</a>
            <a className="left" href="../menber/menloginlog.html">登录日志</a>
            <a className="right reback">返回</a>
            <a className="right refresh">刷新</a>
          </div>
        </div>
        <div className="tablebox">
          <div className="editbox">
            <div className="tip-title">
              <span>编辑资料</span>
            </div>
            <ul>
              <li>
                <span>手机号码：</span>
                <input type="text" name=""/>
              </li>
              <li>
                <span>会员等级：</span>
                <select style="width: 250px;">
                  <option>普通会员</option>
                  <option selected="selected">黄金会员</option>
                  <option>白金会员</option>
                  <option>钻石会员</option>
                </select>
              </li>
              <li>
                <span>性别：</span>
                <label>
                  <input type="radio" className="radiox" checked name="sex"/><i className="radioshow fa fa-circle-o"></i>
                    保密
                </label>
                <label>
                  <input type="radio" className="radiox" name="sex"/><i className="radioshow fa fa-circle-o"></i>
                    男
                </label>
                <label>
                  <input type="radio" className="radiox" name="sex"/><i className="radioshow fa fa-circle-o"></i>
                    女
                </label>
              </li>
              <li>
                <span>城市：</span>
                <div data-toggle="distpicker" id="distpicker">
                  <select></select>
                  <select></select>
                </div>
              </li>
              <li>
                <span>新密码：</span>
                <input type="password" name=""/>
              </li>
              <li>
                <span>确认密码：</span>
                <input type="password" name=""/>
              </li>
              <li>
                <span>账户启用状态：</span>
                <input type="checkbox" checked="" className="oclse" name=""/><i
                  className="oclseshow fa fa-toggle-off"></i>
              </li>
            </ul>
            <a className="upbtn">提交</a>
          </div>
        </div>
      </div>

    )
  }
}

