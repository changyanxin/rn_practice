/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  Router,
  Scene,
  Tabs,
  Drawer,
  Lightbox,
  Modal,
  Overlay
} from 'react-native-router-flux';

import {Grid,Icon} from '@ant-design/react-native'
import Msg from './components/Msg';
import Doc from './components/Doc';
import MsgDetial from './components/MsgDetial';
import Mybox from './components/Mybox';
import Login from './components/Login';
import Home from './components/Home';
import Message from './components/Message';
import Mylist from './components/Mylist';



// yarn add react-native-router-flux@4.0.6
const App = () => {
  return (
    <>
      <Router>
        <Overlay>
         <Modal key='modal' hideNavBar>
          <Lightbox>
           <Drawer
             key="drawer"
             drawerPosition='left'
             contentComponent={()=><Text>drawer</Text>}
             drawerIcon={()=><Icon name='menu'/>}
             drawerWidth={400}
           >
              <Scene key='root'>
                <Tabs 
                  key='tabbar' 
                  hideNavBar 
                  activeTintColor='red' 
                  inactiveTintColor='blue'
                  tabBarStyle={{backgroundColor:'#ccc'}}
                >
                  <Scene 
                    key='home' 
                    title='首页'
                    icon={
                      ({focused})=><Icon 
                        size={20}
                        color={focused?'red':'blue'} 
                        name='home'
                      />
                    }
                    hideDrawerButton
                  >
                    <Scene key='home' component={Home}/>
                    <Scene  hideDrawerButton hideTabBar key='mylist' component={Mylist}/>
                  </Scene>

                  <Scene 
                    key='msg' 
                    title='消息'
                    icon={
                      ({focused})=><Icon 
                        size={20}
                        color={focused?'red':'blue'} 
                        name='home'
                      />
                    }
                  >
                    <Scene key='tabbarmsg' component={Msg}/>
                    <Scene key='tabbarmsgdetial' hideTabBar component={MsgDetial}/>
                  </Scene>

                  <Scene 
                    key='doc' 
                    title='文档'
                    icon={({focused})=><Icon 
                          size={20}
                          color={focused?'red':'blue'} 
                          name='file'
                          />
                    }
                    hideDrawerButton
                  >
                    <Scene key='tabbardoc' component={Doc}/>
                  </Scene>
                </Tabs>
              </Scene>
           </Drawer>
           <Scene key="lightbox" component={Mybox} />
          </Lightbox>
          <Scene key='login' component={Login}/>
          <Scene key='login1' component={Login}/>
         </Modal>
         <Scene component={Message}/>
        </Overlay>
      </Router>
      <Text>adb</Text>
    </>         
    
  );
};

const styles = StyleSheet.create({
  
});

export default App;
