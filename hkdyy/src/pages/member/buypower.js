import React,{PureComponent} from 'react'
import { Button, } from 'antd'
import styles from './index.less'
import {Card} from '../../components/Card'
import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
  render(){
    return (
      <div className="content">
        <Card>购买力筛选</Card>
        <div className="tablebox">
          <div className={styles.screenbox}>
            <div className="tip-title">
              <i className="tip1 left fa fa-search"></i>
              <span className="left">筛选查询</span>
              <div className="right">
                <i className="tip2 fa fa-angle-up"></i>
                <span>收起筛选</span>
                <a>查询结果</a>
              </div>
            </div>
            <div className={styles.screenlist}>
              <dl>
                <dt>最近消费：</dt>
                <dd>
                  <ul>
                    <li><a className="active">不限</a></li>
                    <li><a>1周内</a></li>
                    <li><a>2周内</a></li>
                    <li><a>1个月内</a></li>
                    <li><a>1个月前</a></li>
                    <li><a>2个月前</a></li>
                    <li><a>3个月前</a></li>
                    <li><a>6个月前</a></li>
                    <li><span>自定义</span></li>
                  </ul>
                </dd>
              </dl>
              <dl>
                <dt>消费次数：</dt>
                <dd>
                  <ul>
                    <li><a className="active">不限</a></li>
                    <li><a>1次+</a></li>
                    <li><a>2次+</a></li>
                    <li><a>3次+</a></li>
                    <li><a>4次+</a></li>
                    <li><a>10次+</a></li>
                    <li><a>20次+</a></li>
                    <li><a>30次+</a></li>
                    <li><span>自定义</span></li>
                  </ul>
                </dd>
              </dl>
              <dl>
                <dt>消费金额：</dt>
                <dd>
                  <ul>
                    <li><a className="active">不限</a></li>
                    <li><a>0-50</a></li>
                    <li><a>51-100</a></li>
                    <li><a>101-150</a></li>
                    <li><a>151-200</a></li>
                    <li><a>201-300</a></li>
                    <li><a>301-500</a></li>
                    <li><a>501-1000</a></li>
                    <li><span>自定义</span></li>
                  </ul>
                </dd>
              </dl>
              <dl>
                <dt>订单均价：</dt>
                <dd>
                  <ul>
                    <li><a className="active">不限</a></li>
                    <li><a>0-20</a></li>
                    <li><a>21-50</a></li>
                    <li><a>51-100</a></li>
                    <li><a>101-150</a></li>
                    <li><a>151-200</a></li>
                    <li><a>201-300</a></li>
                    <li><a>301-500</a></li>
                    <li><span>自定义</span></li>
                  </ul>
                </dd>
              </dl>
              <dl>
                <dt>商品分类：</dt>
                <dd>
                  <ul>
                    <li><a className="active">不限</a></li>
                    <li><a>服装</a></li>
                    <li><a>餐厨</a></li>
                    <li><a>配件</a></li>
                    <li><a>居家</a></li>
                    <li><a>洗护</a></li>
                    <li><a>婴童</a></li>
                    <li><a>杂货</a></li>
                    <li><a>饮食</a></li>
                    <li><a>志趣</a></li>
                  </ul>
                </dd>
              </dl>
              <dl>
                <dt>会员等级：</dt>
                <dd>
                  <ul>
                    <li><a className="active">不限</a></li>
                    <li><a>普通会员</a></li>
                    <li><a>黄金会员</a></li>
                    <li><a>白金会员</a></li>
                    <li><a>钻石会员</a></li>
                  </ul>
                </dd>
              </dl>
              <dl>
                <dt>用户标签：</dt>
                <dd>
                  <ul>
                    <li><a className="active">不限</a></li>
                    <li><a>标签名称</a></li>
                    <li><a>标签名称</a></li>
                    <li><a>标签名称</a></li>
                    <li><a>标签名称</a></li>
                    <li><a>标签名称</a></li>
                    <li><a>标签名称</a></li>
                    <li><a>标签名称</a></li>
                    <li><a>标签名称</a></li>
                    <li><a>标签名称</a></li>
                    <li><a>标签名称</a></li>
                    <li><a>标签名称</a></li>
                    <li><a>标签名称</a></li>
                    <li><a>标签名称</a></li>
                    <li><a>标签名称</a></li>
                  </ul>
                </dd>
                <dd className="more"><span>更多</span><i className="fa fa-angle-down"></i></dd>
              </dl>
            </div>
          </div>
          <div className="datalist">
            <div className="tip-title">
              <i className="tip1 left fa fa-list-ul"></i>
              <span className="left">数据列表</span>
              <div className="right">
                <select>
                  <option value="" disabled selected hidden>群发短信</option>
                  <option value="">选中用户</option>
                  <option value="">全部用户</option>
                </select>
                <select>
                  <option value="" disabled selected hidden>群发站内信</option>
                  <option value="">选中用户</option>
                  <option value="">全部用户</option>
                </select>
                <select>
                  <option value="" disabled selected hidden>APP推送</option>
                  <option value="">选中用户</option>
                  <option value="">全部用户</option>
                </select>
                <select>
                  <option value="" disabled selected hidden>设置标签</option>
                  <option value="">选中用户</option>
                  <option value="">全部用户</option>
                </select>
                <select>
                  <option value="" disabled selected hidden>赠送优惠券</option>
                  <option value="">选中用户</option>
                  <option value="">全部用户</option>
                </select>
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
                <th><input type="checkbox" className="choice" name=""/><i
                  className="choiceshow allchoice fa fa-square-o"></i></th>
                <th>用户ID</th>
                <th>用户账号</th>
                <th>会员等级</th>
                <th>消费金额</th>
                <th>消费次数</th>
                <th>订单均价</th>
                <th>最近购买时间</th>
                <th>操作</th>
              </tr>
              <tr>
                <td><input type="checkbox" className="choice" name=""/><i className="choiceshow fa fa-square-o"></i></td>
                <td>8848</td>
                <td>15154554846</td>
                <td>黄金会员</td>
                <td>¥2000.00</td>
                <td>10</td>
                <td>¥200.00</td>
                <td>2017-07-03 14:36:21</td>
                <td className="operat"><a href="../menber/menberman.html">查看</a></td>
              </tr>
              <tr>
                <td><input type="checkbox" className="choice" name=""/><i className="choiceshow fa fa-square-o"></i></td>
                <td>8848</td>
                <td>15154554846</td>
                <td>黄金会员</td>
                <td>¥2000.00</td>
                <td>10</td>
                <td>¥200.00</td>
                <td>2017-07-03 14:36:21</td>
                <td className="operat"><a>查看</a></td>
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

