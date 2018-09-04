import Taro,{Component} from "@tarojs/taro"
import { View,Image,Text } from '@tarojs/components'
import './index.less'

class ImageIcon extends Component{
  render(){
    const { Imagesrc,w,h,children } = this.props;
    return (
      <View>
        <View>
          <Image style={{width:w+'rpx',height:h+'rpx'}} src={Imagesrc} />
        </View>
        <Text>{children}</Text>
      </View>
    )
  }
}
export default ImageIcon
