import React,{useState} from 'react'
import {View,StyleSheet,ImageBackground,TextInput,Text,TouchableOpacity} from 'react-native'


const Home=({route})=>{


return (
    
<ImageBackground source={require('../src/assets/images/pexels-tausif-hossain-1226302.png')} style={styles.container}>
    
<View style={styles.containerBox}>
    <View style={{height:60,width:60,borderRadius:30,backgroundColor:"#d62d2d",justifyContent:"center",alignItems:"center",}}>
        <Text style={{fontSize:30,fontWeight:"bold",color:"white"}}>{route.params.registeredUser.name.charAt(0)}</Text>
    </View>
   <View style={styles.TextInputViewCointainer}>
    <Text style={styles.TextInputCointainer}>{route.params.registeredUser.name}</Text>
   </View>
   <View style={styles.TextInputViewCointainer}>
    <Text style={styles.TextInputCointainer}>{route.params.registeredUser.email}</Text>
   </View>
   <View style={styles.TextInputViewCointainer}>
    <Text style={styles.TextInputCointainer}>{route.params.registeredUser.number}</Text>
   </View>


</View>

</ImageBackground>
)
}
export default Home


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
   flex:0.40,
   width:"80%",
    justifyContent:"space-evenly",
    borderRadius:10,
   alignSelf:"center",
   opacity: .6,
   alignItems:"center"
  },
  TextInputCointainer:{
alignSelf:"center",
fontSize:17,
color:"black",
  },
  TextInputViewCointainer:{
    backgroundColor:"#f2f2f2",
    borderWidth:0.10,
    borderColor:"black",
  width:"80%",
  height:"10%",
    borderRadius:6,
    borderWidth:0.30,
    justifyContent:"center",
    alignSelf:"center"
   
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