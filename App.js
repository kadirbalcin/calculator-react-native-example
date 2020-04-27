import React from 'react';
import { TouchableOpacity, StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Login extends React.Component {
  state = {
    number: '0',
  }

  changeNumber = (number) => {
    this.setState({ number: `${this.state.number}${number}` })
  }

  setZero = () => {
    this.setState({ number: '0' });
  }

  changeNegative = () => {
    let number = parseFloat(this.state.number) * -1;
    this.setState({ number: number.toString() });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#000', paddingTop: 40 }}>
        <StatusBar backgroundColor="blue" barStyle='light-content' />
        <View style={{ flex: 1, justifyContent:'flex-end', alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 80, color: '#FFF', paddingHorizontal: 30, fontWeight: '200' }}>{this.state.number}</Text>
        </View>

        <View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20 }}>
          <TouchableOpacity onPress={() => this.setZero()}>
          <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'darkgray', borderRadius: ((width / 4) - 20) / 2 }}>
          <Text style={{ fontSize: 32 }}>AC</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.changeNegative()}>
        <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'darkgray', borderRadius: ((width / 4) - 20) / 2 }}>
        <Text style={{ fontSize: 32 }}>+/-</Text>
      </View>
    </TouchableOpacity>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'darkgray', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 32 }}>%</Text>
    </View>
    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'orange', borderRadius: ((width / 4) - 20) / 2 }}>
    <Text style={{ fontSize: 32, color: '#fff' }}>÷</Text>
  </View>
</View>
<View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
  <TouchableOpacity onPress={() => this.changeNumber('7')}>
    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
    <Text style={{ fontSize: 32, color: '#FFF' }}>7</Text>
  </View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.changeNumber('8')}>
  <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
  <Text style={{ fontSize: 32, color: '#FFF' }}>8</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.changeNumber('9')}>
  <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
  <Text style={{ fontSize: 32, color: '#FFF' }}>9</Text>
</View>
</TouchableOpacity>
<View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'orange', borderRadius: ((width / 4) - 20) / 2 }}>
<Text style={{ fontSize: 32, color: '#fff' }}>x</Text>
</View>
</View>
<View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
  <TouchableOpacity onPress={() => this.changeNumber('4')}>
    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
    <Text style={{ fontSize: 32, color: '#FFF' }}>4</Text>
  </View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.changeNumber('5')}>
  <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
  <Text style={{ fontSize: 32, color: '#FFF' }}>5</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.changeNumber('6')}>
  <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
  <Text style={{ fontSize: 32, color: '#FFF' }}>6</Text>
</View>
</TouchableOpacity>
<View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'orange', borderRadius: ((width / 4) - 20) / 2 }}>
<Text style={{ fontSize: 32, color: '#fff' }}>-</Text>
</View>
</View>
<View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
  <TouchableOpacity onPress={() => this.changeNumber('1')}>
    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
    <Text style={{ fontSize: 32, color: '#FFF' }}>1</Text>
  </View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.changeNumber('2')}>
  <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
  <Text style={{ fontSize: 32, color: '#FFF' }}>2</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.changeNumber('3')}>
  <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
  <Text style={{ fontSize: 32, color: '#FFF' }}>3</Text>
</View>
</TouchableOpacity>
<View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'orange', borderRadius: ((width / 4) - 20) / 2 }}>
<Text style={{ fontSize: 32, color: '#fff' }}>+</Text>
</View>
</View>
<View style={{ marginBottom: 40, flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
  <TouchableOpacity onPress={() => this.changeNumber('0')}>
    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 2) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
    <Text style={{ fontSize: 32, color: '#fff' }}>0</Text>
  </View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.changeNumber('.')}>
<View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
<Text style={{ fontSize: 32, color: '#fff' }}>,</Text>
</View>
</TouchableOpacity>
<View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'orange', borderRadius: ((width / 4) - 20) / 2 }}>
<Text style={{ fontSize: 32, color: '#fff' }}>=</Text>
</View>
</View>
</View>
);
}
}
