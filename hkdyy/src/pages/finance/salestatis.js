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
            <span className="left">销售统计</span>
          </div>
        </div>
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
            <div className="scr-con selscon">
              <span><b>* </b>起止时间：</span>
              <div className="left"><input type="text" placeholder="请选择时间" name="" id="chistime" /><i
                className="fa fa-clock-o"></i></div>
              <span>货号：</span>
              <input type="text" name=""/>
                <ul className="scrlist">
                  <li>
                    <span>订单时间类型：</span>
                    <label><input type="radio" className="radiox" checked="" name="fodata" /><i
                      className="radioshow fa fa-circle-o"></i>发货时间</label>
                    <label><input type="radio" className="radiox" name="fodata" /><i
                      className="radioshow fa fa-circle-o"></i>下单时间</label>
                  </li>
                  <li>
                    <span>订单状态：</span>
                    <label className="goodsl"><input type="checkbox" className="goodsk" name=""/><i
                      className="goodsi fa fa-square-o"></i>待付款</label>
                    <label className="goodsl"><input type="checkbox" className="goodsk" name=""/><i
                      className="goodsi fa fa-square-o"></i>待发货</label>
                    <label className="goodsl"><input type="checkbox" className="goodsk" name=""/><i
                      className="goodsi fa fa-square-o"></i>已发货</label>
                    <label className="goodsl"><input type="checkbox" className="goodsk" name=""/><i
                      className="goodsi fa fa-square-o"></i>已完成</label>
                    <label className="goodsl"><input type="checkbox" className="goodsk" name=""/><i
                      className="goodsi fa fa-square-o"></i>已关闭</label>
                  </li>
                </ul>
            </div>
          </div>
          <div className="datalist">
            <div className="tip-title">
              <i className="tip1 left fa fa-list-ul"></i>
              <span className="left">数据列表</span>
              <div className="right">
                <a>导出数据</a>
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
                <th>订单号</th>
                <th>商品名称</th>
                <th>货号</th>
                <th>商品数量</th>
                <th>订单金额</th>
                <th>订单状态</th>
                <th>下单时间</th>
                <th>发货时间</th>
              </tr>
              <tr>
                <td>201707196398345</td>
                <td>银色星芒刺绣网纱底裤</td>
                <td>No86577</td>
                <td>1</td>
                <td>¥2000.00</td>
                <td>待付款</td>
                <td>2017-07-03 14:36:21</td>
                <td>2017-07-03 14:36:21</td>
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

