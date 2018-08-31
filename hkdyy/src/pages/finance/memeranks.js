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
            <span className="left">会员排行</span>
          </div>
        </div>
        <div className="tablebox">
          <div className="statisbox">
            <div className="tip-title">
              <span>会员排行</span>
              <div className="right">
                <a>导出数据</a>
                <div className="ass left">
                  <a className="active">全部</a>
                  <a>最近30天</a>
                  <a>最近90天</a>
                </div>
                <div className="datad left">
                  <input type="text" name=""/>
                    <i className="fa fa-calendar"></i>
                </div>
              </div>
            </div>
            <table width="100%" className="litable">
              <tr>
                <th>排行</th>
                <th>会员名</th>
                <th>订单数(单位:个)</th>
                <th>购物金额</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Windir</td>
                <td>100</td>
                <td>¥10000.00</td>
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

