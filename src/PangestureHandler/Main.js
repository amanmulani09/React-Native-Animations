import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { GestureHandlerRootView, PanGestureHandler,GestureDetector, Gesture } from 'react-native-gesture-handler';
const SQUARE = 100.0;
const   CIRCLE_RADIUS = SQUARE * 2;
const Main = () => {

const isPressed = useSharedValue(false);
const offset = useSharedValue({x:0,y:0});

const start = useSharedValue({x:0,y:0});

const gesture = Gesture.Pan().onBegin(()=>{
    isPressed.value = true;
}).onUpdate((e)=>{
    offset.value = {
        x:e.translationX + start.value.x,
        y:e.translationY + start.value.y
    }
}).onEnd(()=>{
    start.value = {
        x:offset.value.x,
        y:offset.value.y
    }
}).onFinalize(()=>{
    isPressed.value = false

    const distance = Math.sqrt(offset.value.x ** 2 + offset.value.y ** 2);
    if(distance < CIRCLE_RADIUS + SQUARE/2){
        start.value = {
            x:0,
            y:0
        }
        offset.value = {
            x:withSpring(0),
            y:withSpring(0)
        }
    }else{

    }
    
})

     const animatedStyles = useAnimatedStyle(()=>{
        return {
            transform:[
                {translateX:offset.value.x},
                {translateY:offset.value.y},
                {scale:withSpring(isPressed.value ? 1.1 : 1)}
            ],
            backgroundColor:isPressed.value ? 'blue' : 'rgba(0,0,256,0.5)'
        }
     });


  return (
    <GestureHandlerRootView style={styles.container}>
        <View style={styles.circle}>
        <GestureDetector gesture={gesture}>
          <Animated.View style={[styles.square,animatedStyles]}/>
        </GestureDetector>
        </View>
    </GestureHandlerRootView>
  )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center'
      },
      square:{
        width:SQUARE,
        height:SQUARE,
        backgroundColor:'rgba(0,0,256,0.5)',
        borderRadius:20
      },
      circle:{
        width:CIRCLE_RADIUS * 1.7,
        height:CIRCLE_RADIUS * 1.7,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:CIRCLE_RADIUS,
        borderWidth:5,
        borderColor:'rgba(0,0,256,0.5)'
      }
    
})