import React, { useState } from 'react'
import { View, Text, Button, Pressable,Image,TextInput } from 'react-native'

export default function App() {
    const [quantity,updateQuantity]=useState(1);
    let price=141800;
    return(
        <View style={{backgroundColor:'gray',flex:1,justifyContent:'space-between',borderWidth:1,width:360}}>
            <View style={{backgroundColor:'gray',justifyContent:'space-between',borderWidth:1,height:300}}>
                <View style={{backgroundColor:'white',padding:10,paddingBottom:30}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
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
                                        lineHeight: 14.06,
                                        marginTop:13
                                    }}
                                >Cung cấp bởi Tiki Trading</Text>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: 700,
                                        lineHeight: 21.09,
                                        color:'red',
                                        marginTop:10
                                }}
                                >{price.toLocaleString('vi-VN')}</Text>
                            </View>
                            <View style={{position:'relative',justifyContent:'center',marginTop:13}}>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 700,
                                        lineHeight: 14.6,
                                        color:'#808080'
                                }}
                                >{price.toLocaleString('vi-VN')}</Text>
                                <View style={{borderWidth:1,borderColor:'#808080',position:'absolute',width:50}}></View>
                            </View>
                            <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                                    <Pressable 
                                      onPress={()=>{
                                        if(quantity>1)
                                          updateQuantity(quantity-1);
                                      }}
                                      style={{
                                        borderWidth:1,
                                        backgroundColorColor:'#C4C4C4',
                                        width:16,
                                        height:14.22,
                                        justifyContent:'center',
                                        alignItems:'center',
                                        position:'relative'
                                      }}>
                                        <View style={{borderWidth:1,width:8,height:1,position:'absolute'}}></View>
                                    </Pressable>
                                        <Text style={{
                                          fontSize: 12,
                                          fontWeight: 700,
                                          lineHeight: 14.6,
                                          marginStart:8,
                                          marginEnd:8
                                        }}>
                                            {quantity}
                                        </Text>
                                    <Pressable 
                                      onPress={()=>{
                                        updateQuantity(quantity+1);
                                      }}
                                      style={{
                                        borderWidth:1,
                                        backgroundColorColor:'#C4C4C4',
                                        width:16,
                                        height:14.22,
                                        justifyContent:'center',
                                        alignItems:'center',
                                        position:'relative'
                                      }}>
                                        <View style={{borderWidth:1,width:8,height:1,position:'absolute'}}></View>
                                        <View style={{borderWidth:1,width:1,height:8,position:'absolute'}}></View>
                                    </Pressable>
                                </View>
                                <View>
                                    <Pressable>
                                        <Text style={{
                                          color: '#134FEC',
                                          fontSize: 12,
                                          fontWeight: 700,
                                          lineHeight: 14.6
                                        }}>
                                           Mua sau 
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                            </View>
                    </View>
                    <View style={{flexDirection:'row', marginTop:20}}>
                        <Text style={{
                            fontFamily: 'Roboto',
                            fontSize: 12,
                            fontWeight: '700',
                            lineHeight: 14.06,
                            textAlign: 'center'
                        }}>
                            Mã giảm giá đã lưu
                        </Text>
                        <Pressable>
                          <Text style={{
                              color:'#134FEC',
                              fontFamily: 'Roboto',
                              fontSize: 12,
                              fontWeight: '700',
                              lineHeight: 14.06,
                              textAlign: 'center',
                              marginStart:30
                          }}>
                              Xem tại đây
                          </Text>
                        </Pressable>
                    </View>
                    <View style={{flexDirection:'row', marginTop:30, justifyContent:'space-between'}}>
                        <View style={{position:'relative', justifyContent:'center'}}>
                            <View style={{position:'absolute', left:10, width:32, height:16, backgroundColor:'#F2DD1B'}}></View>
                            <TextInput placeholder={'Mã giảm giá'} style={{
                                paddingStart:50,
                                width:208,
                                height:45,
                                borderWidth:1
                            }}/>
                        </View>
                        <Pressable style={{
                            width:99,
                            height:45,
                            justifyContent:'center',
                            alignItems:'center',
                            backgroundColor:'#0A5EB7'
                        }}>
                            <Text style={{
                              color:'white',
                              fontFamily: 'Arial',
                              fontSize: 20,
                              fontWeight: '550',
                              lineHeight: 23.44,
                              textAlign: 'center'
                            }}>
                                Áp dụng
                            </Text>
                        </Pressable>
                    </View>
                </View>
                <View style={{height:15}}></View>
                <View style={{backgroundColor:'white',flexDirection:'row',padding:10}}>
                    <Text style={{
                        fontFamily: 'Roboto',
                        fontSize: 12,
                        fontWeight: 700,
                        lineHeight: 14.06,
                        textAlign: 'center',
                        marginEnd:10                        
                    }}>
                        Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
                    </Text>
                    <Pressable>
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
                    </Pressable>
                </View>
                <View style={{height:15}}></View>
                <View style={{padding:10,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
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
                        fontSize: 18,
                        fontWeight: 700,
                        lineHeight: 21.9,
                        textAlign: 'center',    
                        color:'#EE0D0D'            
                    }}>
                        {(quantity*price).toLocaleString('vi-VN')}
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
                        fontSize: 18,
                        fontWeight: 700,
                        lineHeight: 21.9,
                        textAlign: 'center',    
                        color:'#EE0D0D'                 
                    }}>
                        {(quantity*price).toLocaleString('vi-VN')}
                    </Text>
                </View>
                <Pressable style={{backgroundColor:'#E53935',width:331,height:45, justifyContent:'center',alignItems:'center',marginTop:15}}>
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