import React, {Component} from 'react';
import {View,Animated,Easing,ActivityIndicator,Text,ScrollView,StyleSheet,Dimensions,FlatList} from 'react-native'
import Button from 'react-native-button';
import { MessageBarManager } from 'react-native-message-bar';
import {Actions} from 'react-native-router-flux';


// 安装
// yarn add react-native-vector-icons
// link后会生成项目/android/src/
// import Icon from 'react-native-vector-icons/FontAwesome';
 // <Icon color="red" name='chevron-left'/>
// numColumns={}表示FlatList属性中的分栏布局
// ActivityIndicator表示数据加载
// Animated.timing()表示动画值随时间变化，timing可变成spring有反弹效果动画
// easing表示动画的效果。

export default class Home extends Component {
	constructor(){
		super();
		let data=[];
		for(var i = 0; i <10; i++){
			data.push({tit:i,key:i});
		}
		this.state={
			data,
			wid:new Animated.Value(10)
		}
	}
	zoom=()=>{
		Animated.timing(this.state.wid,{
			toValue:200,
			easing:Easing.elastic()
		}).start()
	}
	render(){
		return(
			<View>
				<Button
					onPress={()=>{this.zoom()}}
					style={styles.btn}
				>
					变大
				</Button>
				<Animated.View style={{
					width:this.state.wid,
					height:200,
					backgroundColor:'red'
				}}>

				</Animated.View>

				<ActivityIndicator style={{color:'red'}}/>
				<Button
					onPress={()=>Actions.mylist()}
					style={{color:'red'}}
				>
					跳转到Mylist组件
				</Button>
				<FlatList 
					ListHeaderComponent={
						<Button
							onPress={
								()=>{
									MessageBarManager.showAlert({
										title:'提示标题',
										message:'具体信息',
										alertType: 'info',
                                    	stylesheetInfo:{backgroundColor:'red'}
									})
								}
							}
							style={styles.btn}
						>
							头部按钮
						</Button>
					}
					ListFooterComponent={<Text>尾部</Text>}

					numColumns={2}
                    data={this.state.data}
                    renderItem={
                        ({item})=><View style={styles.slide}>
                            <Text>{item.tit}</Text>
                        </View>
                    }
                />

				
			</View>
		)
	}
}
const {width} = Dimensions.get('window');
const styles=StyleSheet.create({
	slide:{
		width:width*0.4,
		backgroundColor:'red',
		height:300,
		marginLeft:width*0.07,
		marginBottom:10,
		justifyContent:'center',
		alignItems:'center'
	},
	btn:{
		width:200,
		height:20,
		borderRadius:20,
		backgroundColor:'red',
		textAlignVertical:'center'
	}
})