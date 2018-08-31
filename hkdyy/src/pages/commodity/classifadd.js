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
            <span className="left">添加分类</span>
            <a className="right reback">返回</a>
          </div>
        </div>
        <div className="tablebox">
          <div className="addbox">
            <div className="tip-title">
              <span className="left">添加分类</span>
            </div>
            <ul>
              <li>
                <span><b>* </b>分类名称：</span>
                <input type="text" className="alin" name=""/>
              </li>
              <li>
                <span>上级分类：</span>
                <select className="seladdre">
                  <option>请选择分类</option>
                  <option>服装</option>
                  <option>内衣</option>
                  <option>童装</option>
                </select>
                <font>不选择分类默认为顶级分类</font>
              </li>
              <li>
                <span>排序：</span>
                <input type="text" className="alin" name=""/>
              </li>

              <li>
                <span>是否显示在导航栏：</span>
                <label>
                  <input type="radio" className="radiox" checked="" name="goloine"/><i
                    className="radioshow fa fa-circle-o"></i>
                    是
                </label>
                <label>
                  <input type="radio" className="radiox" name="goloine"/><i className="radioshow fa fa-circle-o"></i>
                    否
                </label>
              </li>
              <li>
                <span><b>* </b>分类图标：</span>
                <input type="file" name=""/>
                  <font>图标尺寸为18*18比例，大小不能超过200KB，图片只能为jpg、png、gif格式</font>
              </li>
              <li>
                <span>分类描述：</span>
                <textarea placeholder="请输入内容"></textarea>
              </li>
            </ul>
            <a className="upbtn">提交</a>
          </div>
        </div>
      </div>

    )
  }
}

