import React,{PureComponent} from 'react'
import { Button, } from 'antd'
import Header from '../../components/Card'
import styles from './activity.css'

import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Vcode extends PureComponent{
  render(){
    return (
     <div className="content">
     <Header>验证码设置</Header>
     <div className="tablebox">
        <div className={styles.addbox}>
          <div className="tip-title">
            <span className="left"  style={{marginLeft:"20px"}}>验证码设置</span>
          </div> 
          <ul>
            <li>
              <span><b>* </b>启用验证码：</span>
              <div className="left">
              <label className="goodsl"><input type="checkbox" className="goodsk" name="" /><i className="goodsi fa fa-square-o"></i>新用户注册</label><br/>
              <label className="goodsl"><input type="checkbox" className="goodsk" name="" /><i className="goodsi fa fa-square-o"></i>用户登录</label><br/>
              <label className="goodsl"><input type="checkbox" className="goodsk" name="" /><i className="goodsi fa fa-square-o"></i>发表相关评论</label><br/>
              <label className="goodsl"><input type="checkbox" className="goodsk" name="" /><i className="goodsi fa fa-square-o"></i>后台系统登录 </label>
              </div>
              
              <font>启用验证码可以避免恶意批量评论或提交信息，推荐打开验证码功能。注意: 启用验证码<br/>会使得部分操作变得繁琐，建议仅在必需时打开</font>
            </li>
            <li>
              <span><b>* </b>登录失败时显示验证码：</span>
              <label>
                <input type="radio" className="radiox" checked="" name="goloine" /><i className="radioshow fa fa-circle-o"></i>
                关闭
              </label>
              <label>
                <input type="radio" className="radiox" name="goloine" /><i className="radioshow fa fa-circle-o"></i>
                开启
              </label>
              <font>选择“是”将在用户登录失败 3 次后才显示验证码，选择“否”将始终在登录时显示验证<br/>码。注意: 只有在启用了用户登录验证码时本设置才有效</font>
            </li>
            <li>
              <span><b>* </b>验证码方式：</span>
              <label>
                <input type="radio" className="radiox" checked="" name="goloine" /><i className="radioshow fa fa-circle-o"></i>
                图形验证码
              </label>
              <label>
                <input type="radio" className="radiox" name="goloine" /><i className="radioshow fa fa-circle-o"></i>
                滑动验证码
              </label>
            </li>
            <li>
              <span><b>* </b>图形验证码宽度：</span>
              <input type="text" className="alin" name="" />
              <font>验证码图片的宽度，范围在 40～145 之间</font>
            </li>
             <li>
              <span><b>* </b>图形验证码高度：</span>
              <input type="text" className="alin" name="" />
              <font>验证码图片的高度，范围在 15～50 之间</font>
            </li>
             <li>
              <span><b>* </b>图形验证码内容大小：</span>
              <input type="text" className="alin" name="" />
              <font>验证码内容大小，范围在16-20之间</font>
            </li>
             <li>
              <span><b>* </b>图形验证码位数：</span>
              <input type="text" className="alin" name="" />
              <font>图形验证码位数，范围4-6之间</font>
            </li>
             <li>
              <span><b>* </b>图形验证码预览：</span>
              
            </li>
          </ul>
          <a className={styles.upbtn}>提交</a>
        </div> 
     </div>
    </div>

    )
  }
}

