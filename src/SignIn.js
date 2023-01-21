import React,{useState} from 'react'
import {View,StyleSheet,ImageBackground,TextInput,Text,TouchableOpacity} from 'react-native'



const SignIn=({ navigation, route })=>{
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const login=()=>{
    if (route.params.registeredUser.email === email){
        if (route.params.registeredUser.password === password){
            navigation.navigate("Home",{registeredUser:route.params.registeredUser})
        }
    }
    else{
        alert("unathosised user")
    }
}
return (
    
<ImageBackground source={require('../src/assets/images/pexels-tausif-hossain-1226302.png')} style={styles.container}>
    {/* <Text style={{fontWeight:"bold",fontSize:30,color:"white",paddingBottom:50}}>{"Register"}</Text> */}
<View style={styles.containerBox}>
   

<View style={styles.TextInputViewCointainer}>
<Text style={styles.TextStyle}>{"Email"}</Text> 
<TextInput style={styles.TextInputCointainer}
placeholder={"Email"}
placeholderTextColor={"black"}
onChangeText={(value)=>setEmail(value)}
/>
</View>


<View style={styles.TextInputViewCointainer}>
<Text style={styles.TextStyle}>{"Password"}</Text> 
<TextInput style={styles.TextInputCointainer}
placeholder={"Password"}
onChangeText={(value)=>setPassword(value)}
placeholderTextColor={"black"}/>
</View>

<TouchableOpacity style={styles.ButtonCointainer} onPress={()=>login()}>
    <Text style={{color:"white",fontSize:16,fontWeight:"bold"}}>{"Login"}</Text>
</TouchableOpacity>
</View>

</ImageBackground>
)
}
export default SignIn


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
    height:"15%",
    width:200,
    borderRadius:10,
    alignSelf:"center",
    justifyContent:"center",
    alignItems:"center",
    marginTop:10,
    
  }
})