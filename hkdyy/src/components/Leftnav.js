import React, { Component } from 'react';

class Leftnav extends Component{
	render(){
		return(
			<React.Fragment>
			<div className="nav-lo">
			<ul>
			<li childnav="list-home" className="list-home"><img alt="" src="images/u135.png" /><span>首页</span></li>
			<li childnav="list-seller" className="list-seller"><img alt="" src="images/u127.png" /><span>商家</span></li>
			<li childnav="list-member" className="list-member"><img alt="" src="images/u127.png" /><span>会员</span></li>
			<li childnav="list-sales" className="list-sales"><img alt="" src="images/u123.png" /><span>促销</span></li>
			<li childnav="list-operate" className="list-operate"><img alt="" src="images/u125.png" /><span>运营</span></li>
			<li childnav="list-goods" className="list-goods"><img alt="" src="images/u124.png" /><span>商品</span></li>
			<li childnav="list-count" className="list-count"><img alt="" src="images/u137.png" /><span>统计</span></li>
			<li childnav="list-financ" className="list-financ"><img alt="" src="images/u130.png" /><span>财务</span></li>
			<li childnav="list-set" className="list-set"><img alt="" src="images/u133.png" /><span>设置</span></li>
			<li childnav="list-power" className="list-power"><img alt="" src="images/u134.png" /><span>权限</span></li>
			</ul>
			</div>
			<div className="nav-lt">
			<div className="navchild" id="list-home">
			<span>系统首页</span>
			<ul>
			<li id="navhome"><a href="index.html">• 系统首页</a></li>
			<li id="navsetup"><a href="../home/accountset.html">• 账户设置</a></li>
			<li id="navloginlog"><a href="../home/loginlog.html">• 登录日志</a></li>
			</ul>
			</div>
			<div className="navchild" id="list-seller">
			<span>商家管理</span>
			<ul>
			<li id="navbuslist"><a href="../business/businesslist.html">• 商家列表</a></li>
			</ul>
			</div>
			<div className="navchild" id="list-member">
			<span>会员管理</span>
			<ul>
			<li id="navmemblist"><a href="../menber/memberlist.html">• 会员列表</a></li>
			<li id="navbuysx"><a href="../menber/buypower.html">• 购买力筛选</a></li>
			<li id="navtipmanage"><a href="../menber/labelgl.html">• 标签管理</a></li>
			<li id="navmembange"><a href="../menber/grade.html">• 会员等级设置</a></li>
			</ul>
			<span>成长值及蝌蚪币</span>
			<ul>
			<li id="navadvserch"><a href="../menber/growth.html">• 成长值及蝌蚪币查询</a></li>
			<li id="navtaskset"><a href="../menber/awardset.html">• 任务奖励设置</a></li>
			<li id="navmoreset"><a href="../menber/rulerset.html">• 更多规则设置</a></li>
			</ul>
			</div>
			<div className="navchild" id="list-sales">
			<span>秒杀专区</span>
			<ul>
			<li id="navsecklist"><a href="../promotion/seckillactivity.html">• 秒杀活动列表</a></li>
			<li id="navtimelot"><a href="../promotion/timeslot.html">• 时间段列表</a></li>
			<li id="navsecremind"><a href="../promotion/secremind.html">• 秒杀提醒通知</a></li>
			</ul>
			<span>优惠券管理</span>
			<ul>
			<li id="navcoupon"><a href="../promotion/coupon.html">• 优惠券列表</a></li>
			<li id="navaddcoupon"><a href="../promotion/addcoupon.html">• 添加优惠券</a></li>
			</ul>
			<span>活动管理</span>
			<ul>
			<li id="navactivitylist"><a href="../promotion/activitylist.html">• 活动列表</a></li>
			<li id="navactivityadd"><a href="../promotion/activityadd.html">• 添加活动</a></li>
			</ul>
			<span>首页推荐</span>
			<ul>
			<li id="navbrand"><a href="../promotion/brand.html">• 品牌制造商</a></li>
			<li id="navfresh"><a href="../promotion/fresh.html">• 新鲜好物</a></li>
			<li id="navpopularity"><a href="../promotion/popularity.html">• 人气推荐</a></li>
			<li><a>• 专题精选</a></li>
			</ul>
			</div>
			<div className="navchild" id="list-operate">
			<span>直播管理</span>
			<ul>
			<li id="livelist"><a href="../operate/livelist.html">• 直播列表</a></li>
			</ul>
			<span>消息查询</span>
			<ul>
			<li id="navsystemmsg"><a href="../operate/systemmsg.html">• 系统消息</a></li>
			<li id="navshortmsg"><a href="../operate/shortmsg.html">• 短信消息</a></li>
			<li id="navmailmsg"><a href="../operate/mailmsg.html">• 站内信消息</a></li>
			<li id="navappmsg"><a href="../operate/appmsg.html">• app推送消息</a></li>
			</ul>
			<span>其他查询</span>
			<ul>
			<li id="navcouponquery"><a href="../operate/couponquery.html">• 优惠券查询</a></li>
			<li id="navinvitaquery"><a href="../operate/invitaquery.html">• 邀请好友查询</a></li>
			<li id=""><a href="">• 幸运抽奖查询</a></li>
			</ul>
			<span>广告管理</span>
			<ul>
			<li id="navadvertlist"><a href="../operate/advertlist.html">• 广告列表</a></li>
			<li id="navadvertadd"><a href="../operate/advertadd.html">• 添加广告</a></li>
			</ul>
			</div>
			<div className="navchild" id="list-goods">
			<span>商品管理</span>
			<ul>
			<li id="navclassNameif"><a href="../commodity/classNameif.html">• 商品分类</a></li>
			</ul>
			</div>
			<div className="navchild" id="list-count">
			<span>统计分析</span>
			<ul>
			<li id="navtranstatis"><a href="../statistics/transtatis.html">• 交易统计</a></li>
			<li id="navflowstatis"><a href="../statistics/flowstatis.html">• 流量统计</a></li>
			<li id=""><a href="">• 商品统计</a></li>
			<li id="navmenberstatis"><a href="../statistics/menberstatis.html">• 会员统计</a></li>
			<li id="navsearchstatis"><a href="../statistics/searchstatis.html">• 搜索统计</a></li>
			</ul>
			</div>
			<div className="navchild" id="list-financ">
			<span>财务报表</span>
			<ul>
			<li id="navcomprestatis"><a href="../finance/comprestatis.html">• 综合统计</a></li>
			<li id="navmemberank"><a href="../finance/memberank.html">• 会员排行</a></li>
			<li id="navsalestatis"><a href="../finance/salestatis.html">• 销售统计</a></li>
			</ul>
			<span>对账管理</span>
			<ul>
			<li id="navreconciliations"><a href="../finance/reconciliations.html">• 对账列表</a></li>
			</ul>
			</div>
			<div className="navchild" id="list-set">
			<span>平台设置</span>
			<ul>
			<li id="navpaltifor"><a href="../setup/paltifor.html">• 平台信息</a></li>
			<li id="navbasic"><a href="../setup/basic.html">• 基本设置</a></li>
			<li id="navmsgremind"><a href="../setup/msgremind.html">• 消息提醒</a></li>
			<li id="navvcode"><a href="../setup/vcode.html">• 验证码设置</a></li>
			</ul>
			<span>支付配送</span>
			<ul>
			<li id="navfreightfrom"><a href="../setup/freightfrom.html">• 运费模板</a></li>
			<li id="navlogistics"><a href="../setup/logistics.html">• 物流公司</a></li>
			<li id="navpayset"><a href="../setup/payset.html">• 支付设置</a></li>
			<li id=""><a href="">• 区域管理</a></li>
			</ul>
			</div>
			<div className="navchild" id="list-power">
			<span>权限管理</span>
			<ul>
			<li id="navdepartment"><a href="../power/department.html">• 部门管理</a></li>
			<li id="navmember"><a href="../power/member.html">• 成员管理</a></li>
			<li id="navservicer"><a href="../power/servicer.html">• 客服管理</a></li>
			<li id="navoperlog"><a href="../power/operlog.html">• 操作日志</a></li>
			<li id=""><a href="">• 数据库管理</a></li>
			</ul>
			</div>
			</div>
			</React.Fragment>
			)
	}
}

export default Leftnav