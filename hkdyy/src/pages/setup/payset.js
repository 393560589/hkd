import React,{PureComponent} from 'react'
import { Button, } from 'antd'
import Header from '../../components/Card'
//import styles from './accountset.less'

import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Payset extends PureComponent{
  render(){
    return (
      <div className="content">
      <Header>支付设置</Header>
      <div className="tablebox">
      <div className="codlistbox" style={{border:"1px solid #e4e4e4",background:"#fff"}}>
        <div className="tip-title">
          <i className="tip1 left fa fa-list-ul"></i>
                <span className="left">数据列表</span>
              
            </div>
            <table width="100%" className="litable">
          <tr>
            <th>支付方式名称</th>
            <th width="620">支付方式描述</th>
            <th>是否启用</th>
            <th>排序</th>
            <th>操作</th>
          </tr>
          <tr>
            <td>微信支付</td>
            <td>微信支付，是基于客户端提供的服务功能。同时向商户提供销售经营分析、账户和资金管理的功能支持。用户通过扫描二维码、微信内打开商品页面购买等多种方式调起微信支付模块完成支付。</td>
            <td><input type="checkbox" className="oclse" name="" /><i className="oclseshow fa fa-toggle-off"></i></td>
            <td><input type="text" className="sort" name="" /></td>
            <td className="operat"><a href="../setup/payeditvol.html">编辑</a></td>
          </tr>
          <tr>
            <td>微信支付</td>
            <td>微信支付，是基于客户端提供的服务功能。同时向商户提供销售经营分析、账户和资金管理的功能支持。用户通过扫描二维码、微信内打开商品页面购买等多种方式调起微信支付模块完成支付。</td>
            <td><input type="checkbox" className="oclse" name="" /><i className="oclseshow fa fa-toggle-off"></i></td>
            <td><input type="text" className="sort" name="" /></td>
            <td className="operat"><a>编辑</a></td>
          </tr>
            </table>
      </div>
        </div>
  </div>

    )
  }
}

