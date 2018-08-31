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
            <span className="left">会员等级设置</span>
            <a className="right refresh">刷新</a>
          </div>
        </div>
        <div className="tablebox">
          <div className="codlistbox">
            <div className="tip-title">
              <i className="tip1 left fa fa-list-ul"></i>
              <span className="left">数据列表</span>
              <div className="right"><a href="../menber/gradset.html">添加</a></div>
            </div>
            <table width="100%" className="litable">
              <tr>
                <th>等级名称</th>
                <th>默认会员等级</th>
                <th>成长值满足点</th>
                <th>免运费标准</th>
                <th>评价奖励</th>
                <th>备注</th>
                <th>操作</th>
              </tr>
              <tr>
                <td>普通会员</td>
                <td><input type="checkbox" checked="" className="oclse" name=""/><i
                  className="oclseshow fa fa-toggle-off"></i></td>
                <td>1</td>
                <td>199元/每笔</td>
                <td>+5成长值/条</td>
                <td>无</td>
                <td className="operat"><a href="../menber/gradset.html">编辑</a></td>
              </tr>
              <tr>
                <td>黄金会员</td>
                <td><input type="checkbox" className="oclse" name=""/><i className="oclseshow fa fa-toggle-off"></i></td>
                <td>1000</td>
                <td>199元/每笔</td>
                <td>+10成长值/条</td>
                <td>无</td>
                <td className="operat"><a>编辑</a></td>
              </tr>
            </table>
          </div>
        </div>
      </div>

    )
  }
}

