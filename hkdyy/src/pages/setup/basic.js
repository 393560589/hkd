import React,{PureComponent} from 'react'
import { Button, } from 'antd'
import {Card} from '../../components/Card'
import styles from './rulerset.css'

import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
  render(){
    return (
  <div className="content">
    <Card>基本设置</Card>
    <div className="tablebox">
      <div className={styles.rulerbox}>
        <div className={styles.rultab}>
          <div className={styles.title}>
            <i className="fa fa-bookmark"></i>
            <span>常规设置</span>
          </div>
          <div className={styles.con}>
            <ul>
              <li>
                <span><b>* </b>热门搜索关键字：</span>
                <input type="text" style={{width: "216px"}} name="" />
                <font className="btip">热门搜索关键字,请用半角逗号(,)分隔多个关键字</font>
              </li>
              <li>
                <span><b>* </b>时间格式：</span>
                <input type="text" placeholder="Y-m-d H:i:s" style={{width: "216px"}} name="" />
              </li>
              <li>
                <span><b>* </b>货币格式：</span>
                <input type="text" placeholder="<em>¥</em>%s" style={{width: "216px"}} name="" />
                <font className="btip">显示商品价格的格式，%s将被替换为相应的价格数字。</font>
              </li>
              <li>
                <span>退货上传图片凭证：</span>
                <input type="text" placeholder="6" style={{width: "216px"}} name="" />
                <font className="btip">设置退换货上传图片凭证数量限制</font>
              </li>
              <li>
                <span>商品评价是否需要审核：</span>
                <label>
                  <input type="radio" className="radiox" checked="" name="goloine" /><i className="radioshow fa fa-circle-o"></i>
                  是
                </label>
                <label>
                  <input type="radio" className="radiox" name="goloine" /><i className="radioshow fa fa-circle-o"></i>
                  否
                </label>
              </li>
              <li>
                <span>站点统计代码：</span>
                <textarea></textarea>
              </li>
              <li>
                <span><b>* </b>商品默认图片：</span>
                <input type="file" style={{width: "216px"}} name="" />
                <font className="btip">只能上传jpg/png格式文件，文件不能超过50kb</font>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.rultab}>
          <div className={styles.title}>
            <i className="fa fa-bookmark"></i>
            <span>购物设置</span>
          </div>
          <div className={styles.con}>
            <ul>
              <li>
                <span>最小购物金额：</span>
                <input type="text" style={{width: "216px"}} value="0" name="" />
                <font className="btip">达到此购物金额，才能提交订单。</font>
              </li>
              <li>
                <span>是否开启自动确认收货：</span>
                <label>
                  <input type="radio" className="radiox" checked="" name="confirm" /><i className="radioshow fa fa-circle-o"></i>
                  关闭
                </label>
                <label>
                  <input type="radio" className="radiox" name="confirm" /><i className="radioshow fa fa-circle-o" ></i>
                  开启
                </label>
                <font className="btip">确认收货时长请在订单设置中进行设置</font>
              </li>
              <li>
                <span>能否开发票：</span>
                <label>
                  <input type="radio" className="radiox" checked="" name="can" /><i className="radioshow fa fa-circle-o"></i>
                  能
                </label>
                <label>
                  <input type="radio" className="radiox" name="can" /><i className="radioshow fa fa-circle-o"></i>
                  不能
                </label>
              </li>
              <li>
                <span>发票内容选项：</span>
                <textarea></textarea>
                <font className="btip">客户要求开发票时可以选择的内容。例如：办公用品。每一行代表一个选项。</font>
              </li>
              <li>
                <span>减库存的时机：</span>
                <label>
                  <input type="radio" className="radiox" checked="" name="stok" /><i className="radioshow fa fa-circle-o"></i>
                  下订单时
                </label>
                <label>
                  <input type="radio" className="radiox" name="stok" /><i className="radioshow fa fa-circle-o"></i>
                  发货时
                </label>
              </li>
              <li>
                <span>增加销量的时机：</span>
                <label>
                  <input type="radio" className="radiox" checked="" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  发货时 
                </label>
                <label>
                  <input type="radio" className="radiox" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  付款时
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.rultab}>
          <div className={styles.title}>
            <i className="fa fa-bookmark"></i>
            <span>备注设置</span>
          </div>
          <div className={styles.con}>
            <ul>
              <li>
                <span>修改订单“发票信息”时：</span>
                <label>
                  <input type="radio" className="radiox" checked="" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  必须填写备注
                </label>
                <label>
                  <input type="radio" className="radiox" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  无需填写备注
                </label>
              </li>
              <li>
                <span>修改订单“收货人信息”时：</span>
                <label>
                  <input type="radio" className="radiox" checked="" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  必须填写备注
                </label>
                <label>
                  <input type="radio" className="radiox" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  无需填写备注
                </label>
              </li>
              <li>
                <span>修改订单“商品信息”时：</span>
                <label>
                  <input type="radio" className="radiox" checked="" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  必须填写备注
                </label>
                <label>
                  <input type="radio" className="radiox" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  无需填写备注
                </label>
              </li>
              <li>
                <span>修改订单“费用信息”时：</span>
                <label>
                  <input type="radio" className="radiox" checked="" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  必须填写备注
                </label>
                <label>
                  <input type="radio" className="radiox" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  无需填写备注
                </label>
              </li>
              <li>
                <span>关闭订单时：</span>
                <label>
                  <input type="radio" className="radiox" checked="" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  必须填写备注
                </label>
                <label>
                  <input type="radio" className="radiox" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  无需填写备注
                </label>
              </li>
              <li>
                <span>取消订单时：</span>
                <label>
                  <input type="radio" className="radiox" checked="" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  必须填写备注
                </label>
                <label>
                  <input type="radio" className="radiox" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  无需填写备注
                </label>
              </li>
              <li>
                <span>退货处理时：</span>
                <label>
                  <input type="radio" className="radiox" checked="" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  必须填写备注
                </label>
                <label>
                  <input type="radio" className="radiox" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  无需填写备注
                </label>
              </li>
              <li>
                <span>退货确认收货时：</span>
                <label>
                  <input type="radio" className="radiox" checked="" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  必须填写备注
                </label>
                <label>
                  <input type="radio" className="radiox" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  无需填写备注
                </label>
              </li>
              <li>
                <span>退款处理时：</span>
                <label>
                  <input type="radio" className="radiox" checked="" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  必须填写备注
                </label>
                <label>
                  <input type="radio" className="radiox" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  无需填写备注
                </label>
              </li>
              <li>
                <span>修改优币或成长值时：</span>
                <label>
                  <input type="radio" className="radiox" checked="" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  必须填写备注
                </label>
                <label>
                  <input type="radio" className="radiox" name="sales" /><i className="radioshow fa fa-circle-o"></i>
                  无需填写备注
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.rultab}>
          <div className={styles.title}>
            <i className="fa fa-bookmark"></i>
            <span>用户协议</span>
          </div>
          <div className={styles.con} id="comment">
            用户协议
          </div>
        </div>
        <a className={styles.upbtn}>提交</a>
      </div>
        </div>

  </div>

    )
  }
}

