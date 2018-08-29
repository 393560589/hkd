import React, { Component } from 'react';

class Top extends Component{
	render(){
		return(
			<div className="top">
				<h1 className="left">源货后台业务管理系统</h1>
				<ul className="tnav">
					<li>
						<img alt="" src="images/u152.png" /><span>admin</span>
						<div className="ntip  tn1">
							<div className="tn-title">
								<span className="left">账户信息</span>
								<a className="right" href="">账户设置</a>
							</div>
							<div className="tn-con">
							• 所在部门：<small>销售部</small><br/>
							• 本次登录：<small>2017-07-03 14:36:21 </small><br/>
							• 登录地区：<small>广东省深圳市 (IP：183.14.135.1)</small><br/>
							• 上次登录：<small>2017-07-03 14:36:21 </small>
							</div>
						</div>
					</li>
					<li><i></i><a href=""><img alt="" src="images/u153.png" /></a></li>
					<li>
						<i></i><img alt="" src="images/u155.png" />
						<div className="ntip tn2">
							<div className="tn-title">
								<span className="left">常用菜单</span>
								<a className="right" href="">菜单管理</a>
							</div>
							<div className="link-list">
								<a>商品列表</a>
								<a>添加商品</a>
								<a>订单列表</a>
								<a>用户管理</a>
								<a>交易统计</a>
								<a>广告管理</a>
								<a>专题列表</a>
								<a>部门管理</a>
								<a>成员管理</a>
							</div>
						</div>
					</li>
					<li>
						<i></i><img alt="" src="images/u158.png" /><font>10</font>
						<div className="ntip tn3">
							<div className="tn-title">
								<span className="left">广告位提示</span>
							</div>
							<ul className="info-tips">
								<li><a className="left" href="">广告位即将到期<small className="right">(<b>10</b>)</small></a></li>
								<li><a className="left" href="">广告位即将到期<small className="right">(<b>10</b>)</small></a></li>
								<li><a className="left" href="">广告位即将到期<small className="right">(<b>10</b>)</small></a></li>
							</ul>
						</div>
					</li>
					<li>
						<i></i><img alt="" src="images/u150.png" />
						<div className="ntip tn4">
							<ul className="colors">
								<li className="green" color="#1abc9c" border-c="#279c85"><span>点击换肤</span></li>
								<li className="blue" color="#3498db" border-c="#2a7aaf"><span>点击换肤</span></li>
								<li className="org" color="#ed6e4d" border-c="#be583e"><span>点击换肤</span></li>
								<li className="yel" color="#fabb3d" border-c="#c89631"><span>点击换肤</span></li>
								<li className="pur" color="#aa7ab3" border-c="#88628f"><span>点击换肤</span></li>
								<li className="tgreen" color="#9ad0b9" border-c="#7ba694"><span>点击换肤</span></li>
								<li className="pink" color="#ea94be" border-c="#bb7698"><span>点击换肤</span></li>
								<li className="dred" color="#c1374a" border-c="#9a2c3b"><span>点击换肤</span></li>
							</ul>
						</div>
					</li>
					<li><i></i><img alt="" src="images/u162.png" /></li>
				</ul>
			</div>
			);
	}
}

export default Top