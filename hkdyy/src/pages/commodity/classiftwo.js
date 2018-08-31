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
            <span className="left">二级分类</span>
            <a className="right refresh">刷新</a>
            <a className="right reback">返回</a>
          </div>
        </div>
        <div className="tablebox">
          <div className="datalist">
            <div className="tip-title">
              <i className="tip1 left fa fa-list-ul"></i>
              <span className="left">数据列表</span>
              <div className="right">
                <a>添加</a>

              </div>
            </div>
            <table width="100%" className="litable">
              <tr>
                <th>编号</th>
                <th>分类名称</th>
                <th>级别</th>
                <th>商品数量</th>
                <th>数量单位</th>
                <th>导航栏</th>
                <th>是否显示</th>
                <th>排序</th>
                <th>设置</th>
                <th>操作</th>
              </tr>
              <tr>
                <td>1000001</td>
                <td>服装</td>
                <td>二级</td>
                <td>100</td>
                <td>件</td>
                <td><input type="checkbox" className="oclse" name=""/><i className="oclseshow fa fa-toggle-off"></i></td>
                <td><input type="checkbox" className="oclse" name=""/><i className="oclseshow fa fa-toggle-off"></i></td>
                <td>1</td>
                <td className="operat"><a>新增下级</a><a>查看下级</a><a>转移商品</a></td>
                <td className="operat"><a>编辑</a><a>删除</a></td>
              </tr>
              <tr>
                <td>1000001</td>
                <td>服装</td>
                <td>二级</td>
                <td>100</td>
                <td>件</td>
                <td><input type="checkbox" className="oclse" name=""/><i className="oclseshow fa fa-toggle-off"></i></td>
                <td><input type="checkbox" className="oclse" name=""/><i className="oclseshow fa fa-toggle-off"></i></td>
                <td>1</td>
                <td className="operat"><a>新增下级</a><a>查看下级</a><a>转移商品</a></td>
                <td className="operat"><a>编辑</a><a>删除</a></td>
              </tr>
            </table>
            <div className="tip-botbox">
              <div className="right">
                <span className="left">共<font>10</font>页/<font>100</font>条数据</span>
                <ul className="left flypag">
                  <li><a>
                    1
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

    )
  }
}

