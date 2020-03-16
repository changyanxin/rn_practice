import React, {Component} from 'react';
import {View,ActivityIndicator,Text,ScrollView,StyleSheet,Dimensions,FlatList} from 'react-native'
import Button from 'react-native-button';
import { MessageBarManager } from 'react-native-message-bar';

// ActivityIndicator表示数据加载

// 创建 Mylist 组件，模拟加载数据，显示加载图标，1s后显示数据列表
 // if(this.state.isLoad){
        //     return (
        //         <View>
        //             {
        //                 this.state.data.map((item)=>(
        //                     <Text key={item}>{item}</Text>
        //                 ))
        //             }
        //         </View>
        //     )
        // }else{
        //     return (
        //         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        //             <ActivityIndicator color="red" size='large'/>
        //         </View>
        //     )
        // }


export default class Mylist extends Component {
	       constructor(){
		super();
		this.state={
			data:[1,2,3,4,5,6],
			isLoad:false
		}
	}
	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				isLoad:true
			})
		},9000)
	}
	
	render(){
		return (
            	<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                {
                    this.state.isLoad?(
                            this.state.data.map((item)=>(
                                <Text key={item}>{item}</Text>
                            ))
                        ):<ActivityIndicator color="red" size='large'/>
                }
            </View>

        )
			
		
	}
}
const {width} = Dimensions.get('window');
const styles=StyleSheet.create({
	
})