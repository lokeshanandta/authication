import React,{useState,useEffect,useCallback} from 'react'
import {View,StyleSheet,ImageBackground,TextInput,Text,TouchableOpacity} from 'react-native'

const SignUp=({navigation})=>{
const [newUserRegistration, setNewUserRegistration] = useState(
    {
      name: '',
      email: '',
      password: '',
      number: false,
    }
  )


  const handleChange = useCallback(
    (value) => {

      setNewUserRegistration((state) => ({ ...state, ...value }));
    },
    [setNewUserRegistration],
  );



return (
    
<ImageBackground source={require('../src/assets/images/pexels-tausif-hossain-1226302.png')} style={styles.container}>
    {/* <Text style={{fontWeight:"bold",fontSize:30,color:"white",paddingBottom:50}}>{"Register"}</Text> */}
<View style={styles.containerBox}>
    <View style={styles.TextInputViewCointainer}>
  <Text style={styles.TextStyle}>{"Name"}</Text>  
<TextInput style={styles.TextInputCointainer}
placeholder={"Name"}
placeholderTextColor={"black"}
onChangeText={(value) => handleChange({ name: value })}
/>
</View>

<View style={styles.TextInputViewCointainer}>
<Text style={styles.TextStyle}>{"Email"}</Text> 
<TextInput style={styles.TextInputCointainer}
placeholder={"Email"}
placeholderTextColor={"black"}
onChangeText={(value) => handleChange({ email: value })}
/>
</View>

<View style={styles.TextInputViewCointainer}>
<Text style={styles.TextStyle}>{"Phone Number"}</Text> 
<TextInput style={styles.TextInputCointainer}
placeholder={"Phone Number"}
keyboardType={"number-pad"}
placeholderTextColor={"black"}
onChangeText={(value) => handleChange({ number: value })}
/>
</View>

<View style={styles.TextInputViewCointainer}>
<Text style={styles.TextStyle}>{"Password"}</Text> 
<TextInput style={styles.TextInputCointainer}
placeholder={"Password"}
onChangeText={(value) => handleChange({ password: value })}
placeholderTextColor={"black"}/>
</View>

<TouchableOpacity style={styles.ButtonCointainer}
onPress={()=>navigation.navigate("SignIn",{registeredUser:newUserRegistration})}
>
    <Text style={{color:"white",fontSize:16,fontWeight:"bold"}}>{"Register"}</Text>
</TouchableOpacity>
</View>

</ImageBackground>
)
}
export default SignUp


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24,
    backgroundColor: '#eaeaea',
    justifyContent:"center",
    alignItems:"center"
  },
  containerBox:{
    backgroundColor:"#ffffff",
   flex:0,
    justifyContent:"space-evenly",
    borderRadius:10,
   alignSelf:"center",
   opacity: .6
  },
  TextInputCointainer:{
    backgroundColor:"#CCCCCC",
  width:250,
    borderRadius:6,
    borderWidth:0.30
  },
  TextInputViewCointainer:{
    flex:0,
    marginHorizontal:25,
   
  },
  TextStyle:{
    color:"black",
    fontSize:18,
    fontWeight:"bold",
    marginBottom:5
  },
  ButtonCointainer:{
    backgroundColor:"#d62d2d",
    height:"10%",
    width:200,
    borderRadius:10,
    alignSelf:"center",
    justifyContent:"center",
    alignItems:"center",
    marginTop:10,
    
  }
})