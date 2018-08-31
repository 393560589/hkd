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
            <span className="left">对账单详情</span>
            <a className="right reback">返回</a>
          </div>
        </div>
        <div className="tablebox">
          <div className="asetbox">
            <div className="tip-title">
              <span>对账单信息</span>
            </div>
            <div className="neptitle">
              <i className="fa fa-bookmark"></i>
              <span>订单信息</span>

            </div>
            <dl className="nepdl">
              <dt>订单编号</dt>
              <dd>
                <span>201707196398345</span>
              </dd>
              <dt>订单金额</dt>
              <dd>
                <span>¥200.00</span>
              </dd>
              <dt>支付方式</dt>
              <dd>
                <span>支付宝</span>
              </dd>
              <dt>支付时间</dt>
              <dd>
                <span>2017-07-19 14:48:38 </span>
              </dd>
              <dt>订单状态</dt>
              <dd>
                <span>已完成</span>
              </dd>

            </dl>
            <div className="neptitle">
              <i className="fa fa-bookmark"></i>
              <span>对账信息</span>

            </div>
            <dl className="nepdl">
              <dt>对账状态</dt>
              <dd>
                <span>未对账</span>
              </dd>

            </dl>
            <a className="upbtn">完成对账</a>
          </div>
        </div>
      </div>

    )
  }
}

