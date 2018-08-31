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
            <span className="left">综合统计</span>
            <a className="right refresh">刷新</a>
          </div>
        </div>
        <div className="tablebox">
          <div className="asetbox statisbox">
            <div className="tip-title">
              <span>综合统计</span>
              <div className="right">
                <a>导出数据</a>
                <div className="ass left">
                  <a className="active">全部</a>
                  <a>最近30天</a>
                  <a>最近90天</a>
                </div>
                <div className="datad left">
                  <input type="text" name=""/>
                    <i className="fa fa-calendar"></i>
                </div>
              </div>
            </div>
            <div className="neptitle">
              <i className="fa fa-bookmark"></i>
              <span>订单统计</span>

            </div>
            <dl className="nepdt">
              <dt>销售总额</dt>
              <dd>
                ¥1000000.00
              </dd>
              <dt>有效订单总数</dt>
              <dd>
                10000
              </dd>
              <dt>有效订单总额</dt>
              <dd>
                ¥1000000.00
              </dd>
              <dt>无效订单总数(关闭或取消)</dt>
              <dd>
                100
              </dd>
              <dt>无效订单总额</dt>
              <dd>
                ¥100000.00
              </dd>
              <dt>已成交订单总数</dt>
              <dd>
                10000
              </dd>
              <dt>已成交订单总额</dt>
              <dd>
                ¥1000000.00
              </dd>
            </dl>
            <div className="neptitle">
              <i className="fa fa-bookmark"></i>
              <span>会员统计</span>

            </div>
            <dl className="nepdt">
              <dt>会员总数</dt>
              <dd>
                100000
              </dd>
              <dt>有订单会员数</dt>
              <dd>
                10000
              </dd>
              <dt>会员订单总数</dt>
              <dd>
                10000
              </dd>
              <dt>会员购物总额</dt>
              <dd>
                ¥1000000.00
              </dd>
              <dt>会员购买率</dt>
              <dd>
                10.00%
              </dd>
              <dt>每会员订单数</dt>
              <dd>
                0.1
              </dd>
              <dt>每会员购物额</dt>
              <dd>
                ¥100.00
              </dd>
            </dl>
            <div className="neptitle">
              <i className="fa fa-bookmark"></i>
              <span>积分统计</span>

            </div>
            <dl className="nepdt">
              <dt>总赠送消费积分(优币)</dt>
              <dd>
                100000
              </dd>
              <dt>总赠送等级积分(成长值)</dt>
              <dd>
                100000
              </dd>
              <dt>操作</dt>
              <dd>
                <a>查看商品</a>
                <a>查看订单</a>
              </dd>
            </dl>
          </div>
        </div>
      </div>

    )
  }
}

