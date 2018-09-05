import React,{PureComponent} from 'react'
import { Button, } from 'antd'
import Header from '../../components/Card'
import styles from './coupon.css'

import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Addcoupon extends PureComponent{
  render(){
    return (
      <div className="content">
      <Header>添加优惠券</Header>
      <div className="tablebox">
        <div className="tip-title" style={{border:"1px solid #e4e4e4"}}>
            <span style={{marginLeft:'20px'}}>添加优惠券</span>
        </div>
        <div className={styles.addcouponbox}>
          <ul className={styles.adul}>
            <li>
              <span>优惠券类型：</span>
              <select>
                <option>注册赠券</option>
                <option>购物赠券</option>
                <option>全场赠券</option>
                <option>会员赠券</option>
              </select>
            </li>
            <li>
              <span><b>* </b>优惠券名称：</span>
              <input type="text" name="" />
            </li>
            <li>
              <span>适用平台：</span>
              <select>
                <option>全平台</option>
                <option>PC端</option>
                <option>移动端</option>
              </select>
            </li>
            <li>
              <span><b>* </b>总发行量：</span>
              <input type="text" placeholder="只能输入正整数，输入0为无限制" name="" />
            </li>
            <li>
              <span><b>* </b>面额：</span>
              <div>
                <input type="text" name="" />
                <small>元</small>
              </div>
              <font>面值只能是数值，0.01-10000，限2位小数</font>
            </li>
            <li>
              <span><b>* </b>每人限领：</span>
              <small>1张</small>
            </li>
            <li>
              <span>使用门槛：</span>
              <label>
                <input type="radio" className="radiox" checked="" name="menkan" /><i className="radioshow fa fa-circle-o"></i>
                无限制
              </label>
              <label>
                <input type="radio" className="radiox" checked="" name="menkan" /><i className="radioshow fa fa-circle-o"></i>
              </label>
              <small>满</small>
              <input type="text" className="mprice" name="" />
              <small>可用</small>
            </li>
            <li>
              <span><b>* </b>有效期：</span>
              <div className="daterang">
                <label>
                  <input type="radio" className="radiox" name="date" /><i className="radioshow fa fa-circle-o"></i>
                  日期范围
                </label>
                <div><input type="text" placeholder="请选择日期" name="" /><i className="fa fa-calendar"></i></div>
              </div>
              <div className="datefixed">
                <label>
                  <input type="radio" className="radiox" checked="" name="date" /><i className="radioshow fa fa-circle-o"></i>
                  固定天数
                </label>
                <div><input type="text" placeholder="领取后到期天数" name="" /><small>天</small></div>
              </div>
            </li>
            <li>
              <span>可使用商品：</span>
              <label>
                <input type="radio" className="radiox" checked="" name="kind" /><i className="radioshow fa fa-circle-o"></i>
                全场通用
              </label>
              <label>
                <input type="radio" className="radiox" name="kind" /><i className="radioshow fa fa-circle-o"></i>
                制定分类
              </label>
            </li>
          </ul>
          <div className={styles.appoint}>
              <span><b>* </b>添加商品：</span>
              <div className={styles.addsel}>
                <select>
                  <option>请选择分类</option>
                  <option>服装>内衣</option>
                  <option>服装>裤子</option>
                  <option>服装>裙子</option>
                  <option>服装>围巾</option>
                  <option>服装>外套</option>
                </select>
                <small><i className="fa fa-plus"></i></small>
              </div>
              <font>购买以下分类商品可使用优惠券抵扣金额  已选中<b>13</b>个分类</font>
              <table width="460" className="litable" style={{marginLeft:"400px"}}>
                <tr>
                  <th>分类名称</th>
                  <th width="78">操作</th>
                </tr>
                <tr>
                  <td>服装>内衣</td>
                  <td className="operat"><a>删除</a></td>
                </tr>
              </table>
              <ul className="left flypag" style={{marginLeft:"588px"}}>
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
          </div>
          <div className={styles.remarks}>
            <span>备注：</span>
            <textarea placeholder="请输入内容"></textarea>
          </div>
          <a className={styles.upbtn}>提交</a>
        </div>
      </div>
    </div>

    )
  }
}

