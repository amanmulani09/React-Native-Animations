import { Button, Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import {useSharedValue,withSpring,useAnimatedStyle,withTiming,withRepeat,ReduceMotion} from 'react-native-reanimated'
import Animated from 'react-native-reanimated'

const SIZE = 100.0
const Intro = () => {

    const progress = useSharedValue(10);
    const scale = useSharedValue(2)

    const reanimatedStyles = useAnimatedStyle(()=>{
        return {
            transform:[{translateX:scale.value*2}],
        }   
    },[]);

    useEffect(()=>{
  
        scale.value = withRepeat(withTiming(progress.value + 20,{
            duration: 1000,
            easing: Easing.inOut(Easing.back(4)),
            reduceMotion: ReduceMotion.System,
        }))
        
    },[])

  return (
    <>
    <Animated.View 
    style={[{width:SIZE,height:SIZE,backgroundColor:'blue'},reanimatedStyles]}
    />
    
    </>
  )
}

export default Intro

const styles = StyleSheet.create({

})