import React, { useState } from 'react'
import { View, Text, Button, Pressable,Image } from 'react-native'

export default function App() {
    return(
        <View style={{backgroundColor:'gray',flex:1,justifyContent:'space-between',borderWidth:1,width:360}}>
            <View style={{backgroundColor:'gray',justifyContent:'space-between',borderWidth:1,height:300}}>
                <View style={{backgroundColor:'white'}}>
                    <View style={{flexDirection:'row',padding:10,justifyContent:'space-around'}}>
                        <View>
                              <Image source={require('./assets/book.png')}/>
                        </View>
                        <View>
                            <View>
                                <Text 
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 700,
                                        lineHeight: 14.06
                                    }}
                                >Nguyên hàm tích phân và ứng dụng</Text>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 700,
                                        lineHeight: 14.06
                                    }}
                                >Cung cấp bởi Tiki Trading</Text>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: 700,
                                        lineHeight: 21.09,
                                        color:'red'
                                }}
                                >114.800</Text>
                            </View>
                            <View style={{position:'relative',justifyContent:'center'}}>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 700,
                                        lineHeight: 14.6,
                                        color:'#808080'
                                }}
                                >114.800</Text>
                                <View style={{borderWidth:1,borderColor:'#808080',position:'absolute',width:50}}></View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'row', justifyContent:'center'}}>
                                    <Pressable style={{borderWidth:1,backgroundColorColor:'#C4C4C4',width:16,height:14.22,justifyContent:'center',alignItems:'center',position:'relative'}}>
                                        <View style={{borderWidth:1,width:8,height:1,position:'absolute'}}></View>
                                    </Pressable>
                                        <Text>
                                            1
                                        </Text>
                                    <Pressable style={{borderWidth:1,backgroundColorColor:'#C4C4C4',width:16,height:14.22,justifyContent:'center',alignItems:'center',position:'relative'}}>
                                        <View style={{borderWidth:1,width:8,height:1,position:'absolute'}}></View>
                                        <View style={{borderWidth:1,width:1,height:8,position:'absolute'}}></View>
                                    </Pressable>
                                </View>
                                <View>
                                    <Pressable>
                                        <Text>
                                           Mua sau 
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                            </View>
                    </View>
                    <View>
                        
                    </View>
                    <View>
                        
                    </View>
                </View>
                <View style={{backgroundColor:'white',flexDirection:'row',borderWidth:1,padding:10}}>
                    <Text style={{
                        fontFamily: 'Roboto',
                        fontSize: 12,
                        fontWeight: 700,
                        lineHeight: 14.06,
                        textAlign: 'center',                        
                    }}>
                        Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
                    </Text>
                    <Text style={{
                        fontFamily: 'Roboto',
                        fontSize: 12,
                        fontWeight: 700,
                        lineHeight: 12.46,
                        textAlign: 'center',    
                        color:'#134FEC'              
                    }}>
                        Nhập tại đây?
                    </Text>
                </View>
                <View style={{borderWidth:1,padding:10,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{
                        fontFamily: 'Roboto',
                        fontSize: 18,
                        fontWeight: 700,
                        lineHeight: 21.9,
                        textAlign: 'center', 
                        color: '#011627'                     
                    }}>
                        Tạm tính
                    </Text>
                    <Text style={{
                        fontFamily: 'Roboto',
                        fontSize: 12,
                        fontWeight: 700,
                        lineHeight: 12.46,
                        textAlign: 'center',    
                        color:'#EE0D0D'            
                    }}>
                        144.000
                    </Text>
                </View>
            </View>
            <View style={{backgroundColor:'white',padding:10,borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:331}}>
                    <Text style={{
                        fontFamily: 'Roboto',
                        fontSize: 18,
                        fontWeight: 700,
                        lineHeight: 21.9,
                        textAlign: 'center', 
                        color: '#808080'                     
                    }}>
                        Thành tiền
                    </Text>
                    <Text style={{
                        fontFamily: 'Roboto',
                        fontSize: 12,
                        fontWeight: 700,
                        lineHeight: 12.46,
                        textAlign: 'center',    
                        color:'#EE0D0D'                 
                    }}>
                        148.000
                    </Text>
                </View>
                <Pressable style={{backgroundColor:'#E53935',width:331,height:45, justifyContent:'center',alignItems:'center'}}>
                    <Text style={{
                        fontFamily: 'Roboto',
                        fontSize: 20,
                        fontWeight: 700,
                        lineHeight: 23.44,
                        textAlign: 'center',    
                        color:'white'                 
                    }}>
                        TIẾN HÀNH ĐẶT HÀNG
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}