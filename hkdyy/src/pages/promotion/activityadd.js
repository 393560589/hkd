import React,{PureComponent} from 'react'
import Header from '../../components/Card'
import styles from '../setup/activity.css'

import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Activityadd extends PureComponent{
  render(){
    return (
     <div className="content">
      <Header>添加活动</Header>
      <div className="tablebox">
        <div className={styles.addbox}>
          <ul>
            <li>
              <span><b>* </b>活动标题：</span>
              <input type="text" className="acl-title" name="" />
            </li>
            <li>
              <span><b>* </b>开始时间：</span>
              <div className="tiput"><input type="text" placeholder="请选择时间" name="" /><i className="fa fa-clock-o"></i></div>
            </li>
            <li>
              <span><b>* </b>结束时间：</span>
              <div className="tiput"><input type="text" placeholder="请选择时间" name="" /><i className="fa fa-clock-o"></i></div>
            </li>

            <li>
              <span>上线/下架：</span>
              <label>
                <input type="radio" className="radiox" checked="" name="goloine" /><i className="radioshow fa fa-circle-o"></i>
                上线
              </label>
              <label>
                <input type="radio" className="radiox" name="goloine" /><i className="radioshow fa fa-circle-o"></i>
                下架
              </label>
            </li>
            <li>
              <span><b>* </b>标题图片：</span>
              <input type="file" name="" />
              <font>只能上传jpg/png格式文件，文件不能超过50kb</font>
            </li>
            <li>
              <span><b>* </b>活动描述：</span>
              <textarea placeholder="请输入内容"></textarea>
            </li>
          </ul>
          <a className={styles.upbtn}>提交</a>
        </div>
      </div>
    </div>

    )
  }
}

