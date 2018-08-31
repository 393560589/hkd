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
            <a className="left" href="../menber/menberedit.html">编辑资料</a>
            <a className="left active" href="../menber/menloginlog.html">登录日志</a>
            <a className="right reback">返回</a>
            <a className="right refresh">刷新</a>
          </div>
        </div>
        <div className="tablebox">
          <div className="logbox">
            <div className="tip-title">
              <i className="tip1 left fa fa-list-ul"></i>
              <span className="left">数据列表</span>
            </div>
            <table width="100%" className="litable">
              <tr>
                <th>时间</th>
                <th>IP</th>
                <th>地区</th>
                <th>浏览器</th>
              </tr>
              <tr>
                <td>2017-07-03 14:36:21</td>
                <td>183.14.135.1</td>
                <td>广东省深圳市</td>
                <td>Firefox 45</td>
              </tr>
              <tr>
                <td>2017-07-03 14:36:21</td>
                <td>183.14.135.1</td>
                <td>广东省深圳市</td>
                <td>Firefox 45</td>
              </tr>
            </table>
            <div className="tip-botbox">
              <div className="right">
                <span className="left">共<font>10</font>页/<font>100</font>条数据</span>
                <ul className="left flypag">
                  <li><a>
                   1
                  </a></li>
                  <li><a className="active">1</a></li>
                  <li><a>2</a></li>
                  <li><a>3</a></li>
                  <li><a>4</a></li>
                  <li><a>5</a></li>
                  <li><a>...</a></li>
                  <li><a>10</a></li>
                  <li><a>></a></li>
                </ul>
                <div className="left">
                  跳至<input type="text" className="tiz" value="1"/>页
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

