import React, {Component} from 'react';
import {View,Text,Button,StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class Mybox extends Component {
	render(){
		return(
			<View style={{flex:1}}>
				<View style={styles.container}>
                    <View style={styles.innerBox}>
                         <Button title='返回' onPress={Actions.pop}/>
                    </View>
                </View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container:{
        backgroundColor: 'rgba(50,50,50,0.5)',
        position: 'absolute',
        left: 0,
        top: 0,
        right:0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    innerBox:{
        width: '80%',
        height: '50%',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
})