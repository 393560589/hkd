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
            <span className="left">对账列表</span>
            <a className="right refresh">刷新</a>
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
                <a>高级检索</a>
              </div>
            </div>
            <div className="scr-con">
              <span>订单编号：</span>
              <input type="text" placeholder="订单编号" name=""/>
                <span>金额范围：</span>
                <select>
                  <option disabled selected hidden>请选择金额范围</option>
                  <option>100元以下</option>
                  <option>100-200元</option>
                  <option>200-500元</option>
                  <option>500-1000元</option>
                  <option>1000元以上</option>
                </select>
                <span>对账状态：</span>
                <select>
                  <option>全部</option>
                  <option>未对账</option>
                  <option>已对账</option>
                  <option>异常</option>
                  <option>已冲正</option>
                </select>
            </div>
          </div>
          <div className="datalist">
            <div className="tip-title">
              <i className="tip1 left fa fa-list-ul"></i>
              <span className="left">数据列表</span>
              <div className="right">
                <a>批量对账</a>
                <select>
                  <option value="" disabled selected hidden>导出数据</option>
                  <option value="">选中数据</option>
                  <option value="">全部数据</option>
                </select>
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
                <th><input type="checkbox" className="choice" name=""/><i
                  className="choiceshow allchoice fa fa-square-o"></i></th>
                <th>订单编号</th>
                <th>订单金额</th>
                <th>支付方式</th>
                <th>支付时间</th>
                <th>对账人员</th>
                <th>对账时间</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
              <tr>
                <td><input type="checkbox" className="choice" name=""/><i className="choiceshow fa fa-square-o"></i></td>
                <td>201707196398345</td>
                <td>¥200.00</td>
                <td>支付宝</td>
                <td>2017-07-19 14:48:38</td>
                <td>admin</td>
                <td>2017-07-19 14:48:38</td>
                <td>已对账</td>
                <td className="operat"><a href="../finance/checkaccounts.html">查看详情</a></td>
              </tr>
              <tr>
                <td><input type="checkbox" className="choice" name=""/><i className="choiceshow fa fa-square-o"></i></td>
                <td>201707196398345</td>
                <td>¥200.00</td>
                <td>支付宝</td>
                <td>2017-07-19 14:48:38</td>
                <td>admin</td>
                <td>2017-07-19 14:48:38</td>
                <td>已对账</td>
                <td className="operat"><a>查看详情</a></td>
              </tr>
            </table>
            <div className="tip-botbox">
              <div className="left">
                <input type="checkbox" className="choice" name=""/><i
                  className="choiceshow allchoice fa fa-square-o"></i>
                  <span>全选</span>

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

