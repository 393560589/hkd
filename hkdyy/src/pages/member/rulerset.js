import React,{PureComponent} from 'react'
import { Button, } from 'antd'
import styles from './index.less'

import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Accountset extends PureComponent{
  render(){
    return (
      <div className="content">
        <div className="con-title">
          <div className="titlesec">
            <span className="left">更多规则设置</span>
          </div>
        </div>
        <div className="tablebox">
          <div className={styles.rulerbox}>
            <div className={styles.rultab}>
              <div className={styles.title}>
                <i className="fa fa-bookmark"></i>
                <span>成长值规则设置</span>
              </div>
              <div className={styles.con}>
                <ul>
                  <li>
                    <span>每连续签到：</span>
                    <input type="text" name=""/>
                      <small>天</small>
                      <span className="ti">额外奖励：</span>
                      <input type="text" name=""/>
                        <small>分</small>
                  </li>
                  <li>
                    <span>购物消费：</span>
                    <input type="text" name=""/>
                      <small>元</small>
                      <font>奖励1分成长值（不含运费）</font>
                  </li>
                  <li>
                    <span>商品单价低于：</span>
                    <input type="text" name=""/>
                      <small>元</small>
                      <font>评价不送成长值</font>
                  </li>
                  <li>
                    <span>订单实际支付金额低于：</span>
                    <input type="text" name=""/>
                      <small>元</small>
                      <font>不送成长值</font>
                  </li>
                  <li>
                    <span>单件商品最高可获得：</span>
                    <input type="text" name=""/>
                      <small>分</small>
                      <font>成长值</font>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.rultab}>
              <div className={styles.title}>
                <i className="fa fa-bookmark"></i>
                <span>蝌蚪币规则设置</span>
              </div>
              <div className={styles.con}>
                <ul>
                  <li>
                    <span>每连续签到：</span>
                    <input type="text" name=""/>
                      <small>天</small>
                      <span className="ti">额外奖励：</span>
                      <input type="text" name=""/>
                        <small>个</small>
                  </li>
                  <li>
                    <span>购物消费：</span>
                    <input type="text" name=""/>
                      <small>元</small>
                      <font>奖励1个蝌蚪币（不含运费）</font>
                  </li>
                  <li>
                    <span>商品单价低于：</span>
                    <input type="text" name=""/>
                      <small>元</small>
                      <font>评价不送蝌蚪币</font>
                  </li>
                  <li>
                    <span>订单实际支付金额低于：</span>
                    <input type="text" name=""/>
                      <small>元</small>
                      <font>不送蝌蚪币</font>
                  </li>
                  <li>
                    <span>单件商品最高可获得：</span>
                    <input type="text" name=""/>
                      <small>个</small>
                      <font>蝌蚪币</font>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.rultab}>
              <div className={styles.title}>
                <i className="fa fa-bookmark"></i>
                <span>成长值规则设置</span>
              </div>
              <div className={styles.con}>
                <ul>
                  <li>
                    <span>抵扣订单金额每：</span>
                    <input type="text" name=""/>
                      <small>个</small>
                      <font>抵扣1元</font>
                  </li>
                  <li>
                    <span>最高可抵扣订单金额比例：</span>
                    <input type="text" name=""/>
                      <small>%</small>
                  </li>
                  <li>
                    <span>使用时的倍数：</span>
                    <input type="text" name=""/>
                  </li>
                  <li>
                    <span>与优惠券同时使用：</span>
                    <input type="checkbox" checked="" className="oclse" name=""/><i
                      className="oclseshow fa fa-toggle-off"></i>
                  </li>
                </ul>
              </div>
            </div>
            <Button className={styles.upbtn}>提交</Button>
          </div>
        </div>
      </div>

    )
  }
}

