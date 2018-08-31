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
            <span className="left">添加会员类型</span>
            <a className="right reback">返回</a>
          </div>
        </div>
        <div className="tablebox">
          <div className="editbox">
            <div className="tip-title">
              <span>添加会员类型</span>
            </div>
            <ul>
              <li>
                <span><b>* </b>会员等级名称：</span>
                <input type="text" name=""/>
              </li>
              <li>
                <span><b>* </b>成长值满足点：</span>
                <input type="text" name=""/>
              </li>
              <li>
                <span>设为默认会员等级：</span>
                <label>
                  <input type="radio" className="radiox" name="sex"/><i className="radioshow fa fa-circle-o"></i>
                    是
                </label>
                <label>
                  <input type="radio" className="radiox" checked="" name="sex"/><i
                    className="radioshow fa fa-circle-o"></i>
                    否
                </label>
              </li>
              <li>
                <span><b>* </b>免运费标准：</span>
                <div className="comp">
                  <input type="text" name=""/>
                    <small>元/每笔</small>
                </div>
              </li>
              <li>
                <span><b>* </b>奖励评价：</span>
                <div className="comp">
                  <input type="text" name=""/>
                    <small>成长值/条</small>
                </div>
              </li>
              <li>
                <span>满免运费特权：</span>
                <input type="checkbox" checked="" className="oclse" name=""/><i
                  className="oclseshow fa fa-toggle-off"></i>
              </li>
              <li>
                <span>签到奖励特权：</span>
                <input type="checkbox" checked="" className="oclse" name=""/><i
                  className="oclseshow fa fa-toggle-off"></i>
              </li>
              <li>
                <span>评价奖励特权：</span>
                <input type="checkbox" checked="" className="oclse" name=""/><i
                  className="oclseshow fa fa-toggle-off"></i>
              </li>
              <li>
                <span>专享活动特权：</span>
                <input type="checkbox" checked="" className="oclse" name=""/><i
                  className="oclseshow fa fa-toggle-off"></i>
              </li>
              <li>
                <span>会员特价特权：</span>
                <input type="checkbox" checked="" className="oclse" name=""/><i
                  className="oclseshow fa fa-toggle-off"></i>
              </li>
              <li>
                <span>生日礼包特权：</span>
                <input type="checkbox" checked="" className="oclse" name=""/><i
                  className="oclseshow fa fa-toggle-off"></i>
              </li>
            </ul>
            <a className="upbtn">提交</a>
          </div>
        </div>
      </div>

    )
  }
}

