import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'

class Main extends Component{
    constructor(props, context) {
        super(props, context);
    }

    render(){
        return (
            <View style = {[styles.mainview, {backgroundColor:this.props.backgroundColor}]}>
                <Text>this is react-native Redux Sample!!</Text>
                <Text>background color is {this.props.backgroundColor} </Text>
                <View style ={styles.btnLayout}>
                    <Button title="GRAY" onPress={() => this.props.changeToGray()}/>
                    <Button title="RED" onPress={() => this.props.changeToRed()}/>
                    <Button title="YELLOW" onPress={() => this.props.changeToYellow()}/>
                </View>
                <Text>counter is {this.props.counter} </Text>
                <View style ={styles.btnLayout}>
                    <Button title="-" onPress={() => this.props.calcurate(false)}/>
                    <Button title="+" onPress={() => this.props.calcurate(true)}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainview:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',   
    },
    btnLayout:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',   
    }
})

const mapStateToProp = (state) => {
    return({
        backgroundColor:state.sampleReducer.backgroundColor,
        counter:state.sampleReducer.counter
    })
}

const mapDispatcherProp = (dispatch) => {
    return({
        changeToGray:() => {dispatch(actions.changeToGray())},
        changeToRed:() => {dispatch(actions.changeToRed())},
        changeToYellow:() => {dispatch(actions.changeToYellow())},
        calcurate:(isPlus) => {dispatch(actions.calcurate(isPlus))},
    })
}

export default connect(mapStateToProp,mapDispatcherProp)(Main)