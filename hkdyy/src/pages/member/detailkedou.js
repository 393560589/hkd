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
            <span className="left">蝌蚪币币明细</span>
            <a className="right reback">返回</a>
            <a className="right refresh">刷新</a>
          </div>
        </div>
        <div className="tablebox">
          <table width="100%" className="litable bodz">
            <tr>
              <th>用户账号</th>
              <th>用户昵称</th>
              <th>会员等级</th>
              <th>可用蝌蚪币</th>
              <th>成长值</th>
            </tr>
            <tr>
              <td>1800000000</td>
              <td>Windir</td>
              <td>黄金会员</td>
              <td>1000</td>
              <td>1000</td>
            </tr>
          </table>

          <div className="screen" style="margin-top:20px;">
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
              <span>蝌蚪币来源：</span>
              <select>
                <option value="" disabled selected hidden>全部</option>
                <option value="">普通会员</option>
                <option value="">黄金会员</option>
              </select>
              <span>操作时间：</span>
              <div className="left"><input type="text" placeholder="请选择时间" name="" id="chistime"/><i
                className="fa fa-clock-o"></i></div>
            </div>
          </div>
          <div className="datalist">
            <div className="tip-title">
              <i className="tip1 left fa fa-list-ul"></i>
              <span className="left">数据列表</span>
              <div className="right">
                <select>
                  <option value="" disabled selected hidden>导出数据</option>
                  <option value="">选中用户</option>
                  <option value="">全部用户</option>
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
                <th>优币来源</th>
                <th>优币变化</th>
                <th>时间</th>
                <th>备注</th>
              </tr>
              <tr>
                <td>购物奖励</td>
                <td>+100</td>
                <td>2017-07-14 18:00:49</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>管理员修改</td>
                <td>-100</td>
                <td>2017-07-14 18:00:49</td>
                <td>操作人员：admin 操作备注：无</td>
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

