import {View, TextInput,Text,Pressable} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react'

const generatePassword = (length,lowerCase,upperCase,number,symbols) => {  
  if((lowerCase||upperCase||number||symbols)==false)
    return 'please choose 1 filter'
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  let charset = '';
  if (upperCase) charset += uppercaseChars;
  if (lowerCase) charset += lowercaseChars;
  if (number) charset += numberChars;
  if (symbols) charset += symbolChars;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

export default function App(){
  const [passwordLength, setPasswordLength] = useState(12);
  const [password, setPassword] = useState('');
  const [lowerCase, isLower]=useState(true);
  const [upperCase, isUpper]=useState(true);
  const [number, isNumber]=useState(true);
  const [symbols, isSymbol]=useState(true);
  const handleGeneratePassword = () => {
    const newPassword = generatePassword(passwordLength,lowerCase,upperCase,number,symbols);
    setPassword(newPassword);
  };
  return(
    <View
      style={{
        width:360,
        height:640
      }}
    >
      <LinearGradient 
        colors={['#3B3B98','transparent']}
        style={{
          justifyContent:'center',
          alignItems:'center',
          paddingTop:20,
          paddingBottom:20
        }}
      >
        <View
          style={{
            flex:1,
            backgroundColor:'#23235B',
            alignItems:'center',
            padding:20,
            width:322,
            height:605,
            borderRadius:15
          }}>
          <Text 
            style={{
              color:'white',
              fontSize:25,
              fontWeight:600,
              lineHeight:29.3,
              textAlign:'center',
              width:200,
              paddingBottom:30,
              paddingTop:30
            }}
          >
            PASSWORD GENERATOR
          </Text>
          <View
            style={{
              width:297,
              height:55,
              backgroundColor: '#151537',
              justifyContent:'center',
              paddingStart:10,
              marginBottom:30
            }}
          >
            <Text 
              style={{
                color:'white',
                fontSize:20
              }}
            >
              {password}
            </Text>
          </View>
          <View
            style={{
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems: 'center',
              width:297,
              height:55
            }}
          >
            <Text
              style={{
                color:'white',
                fontSize:20,
                fontWeight:600,
                lineHeight:23.44,
              }}
            >
              Password length
            </Text>
            <TextInput
              onChangeText={(data)=>{
                setPasswordLength(Number(data))
              }}
              style={{
                backgroundColor:'white',
                height:33,
                width:118,
                paddingStart:10
              }}
            />
          </View>
          <View
            style={{
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems: 'center',
              width:297,
              height:55
            }}
          >
            <Text
              style={{
                color:'white',
                fontSize:20,
                fontWeight:600,
                lineHeight:23.44,
              }}
            >
              Include lower case letters
            </Text>
            <Pressable 
              onPress={()=>{
                isLower(!lowerCase)
              }}
              style={{
                backgroundColor:'white',
                width:25, 
                height:25, 
                justifyContent:'center',
                alignItems:'center'
                }}
            >
              <Text>{lowerCase?'X':''}</Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems: 'center',
              width:297,
              height:55
            }}
          >
            <Text
              style={{
                color:'white',
                fontSize:20,
                fontWeight:600,
                lineHeight:23.44,
              }}
            >
              Include upcase letters
            </Text>
            <Pressable 
              onPress={()=>{
                isUpper(!upperCase)
              }}
              style={{
                backgroundColor:'white',
                width:25, 
                height:25, 
                justifyContent:'center',
                alignItems:'center'
                }}
            >
              <Text>{upperCase?'X':''}</Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems: 'center',
              width:297,
              height:55
            }}
          >
            <Text
              style={{
                color:'white',
                fontSize:20,
                fontWeight:600,
                lineHeight:23.44,
              }}
            >
              Include number
            </Text>
            <Pressable 
              onPress={()=>{
                isNumber(!number)
              }}
              style={{
                backgroundColor:'white',
                width:25, 
                height:25, 
                justifyContent:'center',
                alignItems:'center'
                }}
            >
              <Text>{number?'X':''}</Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems: 'center',
              width:297,
              height:55
            }}
          >
            <Text
              style={{
                color:'white',
                fontSize:20,
                fontWeight:600,
                lineHeight:23.44,
              }}
            >
              Include special symbol
            </Text>
            <Pressable 
              onPress={()=>{
                isSymbol(!symbols)
              }}
              style={{
                backgroundColor:'white',
                width:25, 
                height:25, 
                justifyContent:'center',
                alignItems:'center'
                }}
            >
              <Text>{symbols?'X':''}</Text>
            </Pressable>
          </View>
          <Pressable
            style={{
              width:269,
              height:55,
              backgroundColor: '#3B3B98',
              justifyContent:'center',
              alignItems:'center',
              marginTop:15
            }}
          >
            <Text
              onPress={()=>{
                handleGeneratePassword();
              }}
              style={{
                color:'white',
                fontSize:18,
                fontWeight:600,
                lineHeight:21.9,
              }}
            >
              GENERATE PASSWORD
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  )
}