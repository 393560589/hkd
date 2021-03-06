import React,{PureComponent} from 'react'
import { Button, Table , Divider ,Switch , Select} from 'antd'
import Header from '../../components/Card'
import Addlogistics from '../../components/addlogistics'
//import styles from './accountset.less'

import { connect } from 'dva'

const data = [{
  key: '1',
  number:'10001',
  name:'顺丰快递',
  describe: '首重为5元/KG，续重为5元/KG。',
  time:'2017-07-19 14:48:38',
  updown:''
}, {
  key: '2',
  number:'10001',
  name:'顺丰快递',
  describe: '首重为5元/KG，续重为5元/KG。',
  time:'2017-07-19 14:48:38',
  updown:''
}];

const Option = Select.Option;
@connect(({index})=>({index}))

export default class Logistics extends PureComponent{
  constructor(props) {
      super(props);
      this.state = {
        filteredInfo: null,
        sortedInfo: null,
      }
     this.handleChange=this.handleChange.bind(this);
     this.editonClick=this.editonClick.bind(this);
    }
  
  handleChange(pagination, filters, sorter){
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }

  editonClick(){
    const { dispatch }=this.props;
    dispatch({
      type:'index/save',
      payload:{
        logisticsvisible:true
      }
    });
  }

  render(){

      let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: '编号',
      dataIndex: 'number',
      key: 'number',
    }, {
      title: '公司名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '配送描述',
      dataIndex: 'describe',
      key: 'describe',
     
    },
    {
      title:'添加时间',
      dataIndex:'time',
      key:'time'
    },
    {
      title:'是否启用',
      dataIndex:'updown',
      key:'updown',
      align:'center',
      render:()=>(
          <Switch defaultChecked onChange={this.onChange} />
        )
    },
    
    {
      title:'操作',
      dataIndex:'action',
      key:'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;" onClick={this.editonClick}>编辑</a>
          <Divider type="vertical" />
          <a href="javascript:;">设置打印模板</a>
          <Divider type="vertical" />
          <a href="javascript:;">删除</a>
        </span>
      )
    }];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};
    return (
      <div className="content">
      <Header>物流公司</Header>
        <div className="tablebox">
          <div className="screen">
            <div className="tip-title">
              <i className="tip1 left fa fa-search"></i>
              <span className="left">筛选查询</span>
              <div className="right">
                <i className="tip2 fa fa-angle-up"></i>
                <span>收起筛选</span>
                <a>查询结果</a>
              </div>
            </div>
            <div className="scr-con">
              <span>活动名称：</span>
              <input type="text" placeholder="活动名称" name="" />
              <span>活动名称：</span>
              <select>
                <option>全部</option>
                <option>启用</option>
                <option>停用</option>
              </select>
            </div>
          </div>
          <div style={{marginTop:20}}>
            <div className="table-operations" style={{textAlign:'right',paddingBottom:'20px'}}>
              <Addlogistics/>
              <Select
                showSearch
                style={{ width: 100,marginLeft:10}}
                placeholder="排序方式"
                optionFilterProp="children"
                onChange={this.selhandleChange}
                onFocus={this.selhandleFocus}
                onBlur={this.selhandleBlur}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="时间">时间</Option>
              </Select>
            </div>
            <Table 
                bordered={true}
                title={()=>('数据列表')}
                footer={() => (
                    <div>
                     <Select
                      showSearch
                      style={{ width: 100,marginLeft:10}}
                      placeholder="批量操作"
                      optionFilterProp="children"
                      onChange={this.selhandleChange}
                      onFocus={this.selhandleFocus}
                      onBlur={this.selhandleBlur}
                      filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                      <Option value="删除">删除</Option>
                    </Select>
                    <Button style={{ marginLeft:10}} onClick={this.sureCos}>确定</Button>
                    </div>
                  )}
                pagination={{ 
                    showQuickJumper:true,
                    showSizeChanger:true,
                    total:100,
                    showTotal: function () {  
                        return '共 ' + 100 + ' 条数据'; 
                    }
                   }}
                loading={false}
                rowSelection={rowSelection}
                position={'center'} 
                columns={columns} 
                dataSource={data} 
                onChange={this.handleChange} />
          </div>
        </div>
  </div>

    )
  }
}

