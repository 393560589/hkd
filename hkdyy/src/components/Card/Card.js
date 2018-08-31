import styles from './index.less'
import {Button} from 'antd'
import React,{PureComponent} from 'react'

export class Card extends PureComponent{
  state={
    loading:false
  }
  render(){
    const { loading } = this.state;
    return (
      <div className={styles["con-title"]}>
        <div className={styles["titlesec"]}>
          <span className="left">{this.props.children}</span>
          <Button loading={loading} className="right refresh"
                  onClick={()=>{
                    this.setState({
                      loading:true
                    })
                    setTimeout(()=>{
                      window.location.reload();
                      this.setState({
                        loading:false
                      })
                    },600)}
                  }>
            刷新</Button>
        </div>
      </div>
    )
  }

}
