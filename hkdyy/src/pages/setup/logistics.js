import React,{PureComponent} from 'react'
import { Button, } from 'antd'
import {Card} from '../../components/Card'
//import styles from './accountset.less'

import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
  render(){
    return (
      <div className="content">
      <Card>物流公司</Card>
        <div className="tablebox">
          <div className="screen">
            <div className="tip-title">
              <i className="tip1 left fa fa-search"></i>
              <span className="left">筛选查询</span>
              <div className="right">
                <i className="tip2 fa fa-angle-up"></i>
                <span>收起筛选</span>
                <a>查询结果</a>
              </div>
            </div>
            <div className="scr-con">
              <span>活动名称：</span>
              <input type="text" placeholder="活动名称" name="" />
              <span>活动名称：</span>
              <select>
                <option>全部</option>
                <option>启用</option>
                <option>停用</option>
              </select>
            </div>
          </div>
      <div className="codlistbox" style={{border:"1px solid #e4e4e4",background:"#fff",marginTop: "20px"}}>
        <div className="tip-title">
          <i className="tip1 left fa fa-list-ul"></i>
                <span className="left">数据列表</span>
                <div className="right">
                  <a>添加</a>
                  <select disabled="disabled">
                    <option value="" disabled selected hidden>显示条数</option>
                    <option value="">20</option>
                    <option value="">30</option>
                    <option value="">40</option>
                  </select>
                  <select disabled="disabled">
                    <option value="" disabled selected hidden>排序方式</option>
                  </select>
                </div>
            </div>
            <table width="100%" className="litable">
          <tr>
            <th><input type="checkbox" className="choice" name="" /><i className="choiceshow allchoice fa fa-square-o"></i></th>
            <th>编号</th>
            <th>公司名称</th>
            <th>配送描述</th>
            <th>添加时间</th>
            <th>是否启用</th>
            <th>操作</th>
          </tr>
          <tr>
            <td><input type="checkbox" className="choice" name="" /><i className="choiceshow fa fa-square-o"></i></td>
            <td>1000001</td>
            <td>顺丰快递</td>
            <td>首重为5元/KG，续重为5元/KG。</td>
            <td>2017-07-19 14:48:38</td>
            <td><input type="checkbox" className="oclse" name="" /><i className="oclseshow fa fa-toggle-off"></i></td>
            <td className="operat"><a>编辑</a><a>设置打印模板</a><a>删除</a></td>
          </tr>
          <tr>
            <td><input type="checkbox" className="choice" name="" /><i className="choiceshow fa fa-square-o"></i></td>
            <td>1000001</td>
            <td>顺丰快递</td>
            <td>首重为5元/KG，续重为5元/KG。</td>
            <td>2017-07-19 14:48:38</td>
            <td><input type="checkbox" className="oclse" name="" /><i className="oclseshow fa fa-toggle-off"></i></td>
            <td className="operat"><a>编辑</a><a>设置打印模板</a><a>删除</a></td>
          </tr>
            </table>
            <div className="tip-botbox">
                <div className="left">
                  <input type="checkbox" className="choice" name="" /><i className="choiceshow allchoice fa fa-square-o"></i>
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
                    <li><a>left</a></li>
                    <li><a className="active">1</a></li>
                    <li><a>2</a></li>
                    <li><a>3</a></li>
                    <li><a>4</a></li>
                    <li><a>5</a></li>
                    <li><a>...</a></li>
                    <li><a>10</a></li>
                    <li><a>right</a></li>
                  </ul>
                  <div className="left">
                    跳至<input type="text" className="tiz" value="1" />页
                  </div>
                </div>
              </div>
      </div>
        </div>
  </div>

    )
  }
}

