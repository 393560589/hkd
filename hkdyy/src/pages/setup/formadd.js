import React,{PureComponent} from 'react'
import { Button, } from 'antd'
import Header from '../../components/Card'
import styles from './activity.css'

import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Formadd extends PureComponent{
  render(){
    return (
     <div className="content">
     <Header>添加模板</Header>
     <div className="tablebox">
        <div className={styles.addbox}>
          <div className="tip-title">
            <span className="left" style={{marginLeft:"20px"}}>添加模板</span>
          </div> 
          <ul>
            <li>
              <span><b>* </b>模板名称：</span>
              <input type="text" style={{width:"218px"}} name="" />
            </li>
            <li>
              <span><b>* </b>费用计算方式：</span>
              <label>
                <input type="radio" className="radiox" checked="" name="fee" /><i className="radioshow fa fa-circle-o"></i>
                按重量计算
              </label>
              <label>
                <input type="radio" className="radiox" name="fee" /><i className="radioshow fa fa-circle-o"></i>
                按商品件数计算 
              </label>
            </li>
            <li>
              <span><b>* </b>首重（kg）：</span>
              <input type="text" className="alin" name="" />
             
            </li>
             <li>
              <span><b>* </b>首费（元）：</span>
              <input type="text" className="alin" name="" />
              
            </li>
             <li>
              <span><b>* </b>续重（kg）：</span>
              <input type="text" className="alin" name="" />
              
            </li>
             <li>
              <span><b>* </b>续费（元）：</span>
              <input type="text" className="alin" name="" />
            
            </li>
             <li>
              <span><b>* </b>目的地：</span>
              <div className="distpicker" data-toggle="distpicker">
                <select></select>
                <select></select>
                <select></select>
              </div>
              <a className={styles.cityadbtn}>添加</a>
              <div className={styles.citytips}>
                  <span>北京市<i className="deltip fa fa-close"></i></span>
                  <span>杭州市<i className="deltip fa fa-close"></i></span>
                  <span>湖州市<i className="deltip fa fa-close"></i></span>
                  <span>南京市<i className="deltip fa fa-close"></i></span>
              </div>
            </li>
          </ul>
          <a className={styles.upbtn}>提交</a>
        </div> 
     </div>
    </div>

    )
  }
}

