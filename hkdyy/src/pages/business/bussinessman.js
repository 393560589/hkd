import React,{PureComponent,Fragment} from 'react'


export default class BusinessList extends PureComponent{
  render(){
    return (
      <Fragment>
        <div className="content">
          <div className="con-title">
            <div className="titlesec">
              <span className="left">商家列表</span>
              <a className="right refresh">刷新</a>
            </div>
          </div>
          <div className="tablebox">
            <div className="screen">
              <div className="tip-title">
                <i className="tip1 left fa fa-search"></i>
                <span className="left">筛选查询</span>
                <div className="right">
                  <i className="tip2 fa fa-angle-up"></i>
                  <span>收起筛选</span>
                  <a>查询结果</a>
                  <a>高级检索</a>
                </div>
              </div>
              <div className="scr-con">
                <span>用户账号：</span>
                <input type="text" placeholder="用户ID/账号" name=""/>
                  <span>用户昵称：</span>
                  <input type="text" placeholder="用户昵称" name=""/>
                    <span>注册时间:</span>
                    <div className="left">
                      <input type="text" placeholder="请选择时间" name="" id="chistime" />
                      <i className="fa fa-clock-o"/>
                    </div>
              </div>
            </div>
            <div className="datalist">
              <div className="tip-title">
                <i className="tip1 left fa fa-list-ul"></i>
                <span className="left">数据列表</span>
                <div className="right">
                  <select>
                    <option value="" disabled selected hidden>群发短信</option>
                    <option value="">选中用户</option>
                    <option value="">全部用户</option>
                  </select>
                  <select>
                    <option value="" disabled selected hidden>群发站内信</option>
                    <option value="">选中用户</option>
                    <option value="">全部用户</option>
                  </select>
                  <select>
                    <option value="" disabled selected hidden>设置标签</option>
                    <option value="">选中用户</option>
                    <option value="">全部用户</option>
                  </select>
                  <select>
                    <option value="" disabled selected hidden>导出数据</option>
                    <option value="">选中用户</option>
                    <option value="">全部用户</option>
                  </select>
                  <select disabled="disabled">
                    <option value="" disabled selected hidden>显示条数</option>
                    <option value="">20</option>
                    <option value="">30</option>
                    <option value="">40</option>
                  </select>
                  <select disabled="disabled">
                    <option value="" disabled selected hidden>排序方式</option>
                  </select>
                </div>
              </div>
              <table width="100%" className="litable">
                <tr>
                  <th><input type="checkbox" className="choice" name=""/>
                    <i className="choiceshow allchoice fa fa-square-o"></i></th>
                  <th>商家ID</th>
                  <th>商家账号</th>
                  <th>商家名称</th>
                  <th>收入金额</th>
                  <th>订单数量</th>
                  <th>创建时间</th>
                  <th>账户启用状态</th>
                  <th>操作</th>
                </tr>
                <tr>
                  <td><input type="checkbox" className="choice" name=""/><i className="choiceshow fa fa-square-o"/>
                  </td>
                  <td>8848</td>
                  <td>15154554846</td>
                  <td>大风车</td>
                  <td>¥2000.00</td>
                  <td>100</td>
                  <td>2018.2.23</td>
                  <td><input type="checkbox" className="oclse" name=""/><i className="oclseshow fa fa-toggle-off"/>
                  </td>
                  <td className="operat"><a href="../business/businessman.html">查看</a><a
                    href="../business/editinfo.html">编辑</a><a>一键进入</a></td>
                </tr>
                <tr>
                  <td><input type="checkbox" className="choice" name=""/><i className="choiceshow fa fa-square-o"/>
                  </td>
                  <td>8848</td>
                  <td>15154554846</td>
                  <td>大风车</td>
                  <td>¥2000.00</td>
                  <td>100</td>
                  <td>2018.2.23</td>
                  <td><input type="checkbox" className="oclse" checked="" name=""/><i
                    className="oclseshow fa fa-toggle-off"></i></td>
                  <td className="operat"><a>查看</a><a>编辑</a><a>一键进入</a></td>
                </tr>
              </table>
              <div className="tip-botbox">
                <div className="left">
                  <input type="checkbox" className="choice" name=""/><i
                    className="choiceshow allchoice fa fa-square-o"></i>
                    <span>全选</span>
                    <select>
                      <option value="" disabled selected hidden>批量操作</option>
                      <option value="">启用</option>
                      <option value="">停用</option>
                      <option value="">删除</option>
                    </select>
                    <a>确定</a>
                </div>
                <div className="right">
                  <span className="left">共<font>10</font>页/<font>100</font>条数据</span>
                  <ul className="left flypag">
                    <li>
                      <a>
                      ←
                    </a></li>
                    <li><a className="active">1</a></li>
                    <li><a>2</a></li>
                    <li><a>3</a></li>
                    <li><a>4</a></li>
                    <li><a>5</a></li>
                    <li><a>...</a></li>
                    <li><a>10</a></li>
                    <li><a>></a></li>
                  </ul>
                  <div className="left">
                    跳至<input type="text" className="tiz" value="1"/>页
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="model-bak">
          <div className="sceern-model">
            <div className="tip-title">
              <h3 className="left">高级检索</h3>
              <i className="mod-close fa fa-close"></i>
            </div>
            <div className="scretjbox">
              <ul>
                <li>
                  <span>用户账号：</span>
                  <input type="text" placeholder="用户ID/账号" name=""/>
                </li>
                <li>
                  <span>用户昵称：</span>
                  <input type="text" placeholder="用户昵称" name=""/>
                </li>
                <li>
                  <span>用户来源：</span>
                  <select>
                    <option>全部</option>
                    <option>PC端</option>
                    <option>WEB端</option>
                  </select>
                </li>
                <li>
                  <span>会员等级：</span>
                  <select>
                    <option>全部</option>
                    <option>普通会员</option>
                    <option>黄金会员</option>
                    <option>白金会员</option>
                    <option>钻石会员</option>
                  </select>
                </li>
                <li>
                  <span>用户标签：</span>
                  <select>
                    <option>全部</option>
                    <option>自定义标签</option>
                    <option>自定义标签</option>
                  </select>
                </li>
                <li>
                  <span>注册时间：</span>
                  <div className="moinpt">
                    <input type="text" id="chtimet" placeholder="请重新选择时间" name=""/>
                      <i className="fa fa-clock-o"></i>
                  </div>
                </li>
              </ul>
            </div>
            <div className="custombtn">
              <a className="del">重置</a>
              <a className="sure">开始检索</a>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

