import React,{PureComponent} from 'react'
import { Button } from 'antd'
import {Card} from '../../components/Card'
import { connect } from 'dva'
@connect(({index})=>({index}))

export default class Home extends PureComponent{

  render(){
    return (
     <div className="content">
       <Card>系统首页</Card>
      <div className="tablebox">
        <div className="zlshow">
          <ul>
            <li>
              <img src={require("../../assets/u229.png")} alt="" className="left" />
              <div className="left">
                <span>今日订单总数</span><br/>
                <small>200</small>
              </div>
            </li>
            <li>
              <img src={require("../../assets/u246.png")} alt="" className="left" />
              <div className="left">
                <span>今日订单总数</span><br/>
                <small>200</small>
              </div>
            </li>
            <li>
              <img src={require("../../assets/u268.png")} alt="" className="left" />
              <div className="left">
                <span>今日订单总数</span><br/>
                <small>200</small>
              </div>
            </li>
            <li>
              <img src={require("../../assets/u224.png")} alt="" className="left" />
              <div className="left">
                <span>今日订单总数</span><br/>
                <small>200</small>
              </div>
            </li>
          </ul>
        </div>
        <div className="shortenter">
          <div className="tip-title">
            <h3 className="left">运营快捷入口</h3>
          </div>
          <ul>
            <li><a>
              <img src={require("../../assets/u254.png")} alt="" />
              <span>用户管理</span>
            </a></li>
            <li><a>
              <img src={require("../../assets/u258.png")} alt="" />
              <span>交易统计</span>
            </a></li>
            <li><a>
              <img src={require("../../assets/u263.png")} alt="" />
              <span>短信营销</span>
            </a></li>
            <li><a>
              <img src={require("../../assets/u265.png")} alt="" />
              <span>广告管理</span>
            </a></li>
          </ul>
        </div>
        <div className="userover">
          <div className="tip-title">
            <h3 className="left">用户总览</h3>
          </div>
          <ul>
            <li><a>
              <font>100</font>
              <span>用户管理</span>
            </a></li>
            <li><a>
              <font>200</font>
              <span>交易统计</span>
            </a></li>
            <li><a>
              <font>1000</font>
              <span>短信营销</span>
            </a></li>
            <li><a>
              <font>5000</font>
              <span>广告管理</span>
            </a></li>
          </ul>
        </div>
        <div className="orderstats">
          <div className="tip-title">
            <h3 className="left">订单统计</h3>
          </div>
          <div className="order-tab">
            <div className="left">
              <small>本月订单总数</small>
              <span>10000</span>
              <div className="rise"><font><i className="fa fa-caret-up"></i>10%</font>同比上周</div>
              <small>本周订单总数</small>
              <span>1000</span>
              <div className="fall"><font><i className="fa fa-caret-down"></i>10%</font>同比上周</div>
            </div>
            <div className="roder-tabbox" id="ordertlb"></div>
            <div className="tab-swich" id="ordtabtip">
              <span danumb="0">今日</span>
              <span danumb="1" className="active">本周</span>
              <span danumb="2">本月</span>
              <div className="tjdate">
                <small></small>
                <img src={require("../../assets/u278.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="orderstats">
          <div className="tip-title">
            <h3 className="left">销售统计</h3>
          </div>
          <div className="order-tab">
            <div className="left">
              <small>本月销售总额</small>
              <span>10000</span>
              <div className="rise"><font><i className="fa fa-caret-up"></i>10%</font>同比上周</div>
              <small>本周销售总额</small>
              <span>1000</span>
              <div className="fall"><font><i className="fa fa-caret-down"></i>10%</font>同比上周</div>
            </div>
            <div className="roder-tabbox" id="selltlb"></div>
            <div className="tab-swich" id="selltabtip">
              <span danumb="0">今日</span>
              <span danumb="1" className="active">本周</span>
              <span danumb="2">本月</span>
              <div className="tjdate">
                <small></small>
                <img src={require("../../assets/u278.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

