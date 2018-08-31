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
            <span className="left">标签列表</span>
            <a className="right refresh">刷新</a>
          </div>
        </div>
        <div className="tablebox">
          <div className="codlistbox">
            <div className="tip-title">
              <i className="tip1 left fa fa-list-ul"></i>
              <span className="left">数据列表</span>
              <div className="right"><a>添加标签</a></div>
            </div>
            <table width="100%" className="litable">
              <tr>
                <th><input type="checkbox" className="choice" name=""/><i
                  className="choiceshow allchoice fa fa-square-o"></i></th>
                <th>标签名称</th>
                <th>会员人数</th>
                <th>自动打标签条件</th>
                <th>操作</th>
              </tr>
              <tr>
                <td><input type="checkbox" className="choice" name=""/><i className="choiceshow fa fa-square-o"></i></td>
                <td>优质用户</td>
                <td>10000</td>
                <td>累计成功交易：10笔 累计购买金额：¥2000.00</td>
                <td className="operat"><a>编辑</a><a>删除</a></td>
              </tr>
              <tr>
                <td><input type="checkbox" className="choice" name=""/><i className="choiceshow fa fa-square-o"></i></td>
                <td>优质用户</td>
                <td>10000</td>
                <td>累计成功交易：10笔 累计购买金额：¥2000.00</td>
                <td className="operat"><a>编辑</a><a>删除</a></td>
              </tr>
            </table>
            <div className="tip-botbox">
              <div className="left">
                <input type="checkbox" className="choice" name=""/><i
                  className="choiceshow allchoice fa fa-square-o"></i>
                  <span>全选</span>
                  <select>
                    <option value="" disabled selected hidden>批量操作</option>
                    <option value="">删除</option>
                  </select>
                  <a>确定</a>
              </div>
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

