import React from 'react';
import { TouchableOpacity, StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Login extends React.Component {
  state = {
    number: '0',
    number1: 0,
    number2: 0,
    islem: -1
  }

  Sonuc = () => {

    let toplam = 0;

    switch(this.state.islem) {

      case "1":
        toplam = parseInt(this.state.number1) + parseInt(this.state.number2);
        this.setState({number: `${toplam}` })
      break;

      case "2":
        toplam = parseInt(this.state.number1) - parseInt(this.state.number2);
        this.setState({number: `${toplam}` })
      break;

      case "3":
        toplam = parseInt(this.state.number1) / parseInt(this.state.number2);
        this.setState({number: `${toplam}` })
      break;

      case "4":
        toplam = parseInt(this.state.number1) * parseInt(this.state.number2);
        this.setState({number: `${toplam}` })
      break;

    }

    // this.setState({number: '0' });
    this.setState({number1: 0 });
    this.setState({number2: 0 });
    this.setState({islem: -1 });
    

  }

  changeIslem = (islem) => {
    
    if(this.state.islem == -1 && this.state.number1 > 0) {
      this.setState({ islem: `${islem}` });
      this.setState({number: `` })
    }
    
  }

  changeNumber = (number) => {

    if(this.state.islem == -1 && parseInt(this.state.number) > 0 && this.state.number1 == 0 && this.state.number2 == 0) {

      this.setState({number: `${number}` })
      this.setState({ number1: `${number}` })

    }else if(this.state.islem == -1 && this.state.number == "0" && this.state.number1 < 1) {

      this.setState({number: `${number}` })
      this.setState({ number1: `${number}` })

    }else if(this.state.islem == -1 && this.state.number > 0 && this.state.number1 > 0){

      this.setState({ number: `${this.state.number}${number}` })
      this.setState({ number1: `${this.state.number}${number}` })
      
    }else if(this.state.islem != -1 && this.state.number2 < 1) {

      this.setState({number: `${number}` })
      this.setState({ number2: `${number}` })

    }else if(this.state.islem != -1 && this.state.number2 > 0 && this.state.number > 0) {
      this.setState({ number: `${this.state.number}${number}` })
      this.setState({ number2: `${this.state.number}${number}` })
    }
  }

  setZero = () => {
    this.setState({ number: '0' });
    this.setState({number1: 0 });
    this.setState({number2: 0 });
    this.setState({islem: -1 });
  }

  changeNegative = () => {
    let number = parseFloat(this.state.number) * -1;
    this.setState({ number: number.toString() });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#000', paddingTop: 80 }}>
        <StatusBar backgroundColor="blue" barStyle='light-content' />
        <View style={{ flex: 1, justifyContent:'flex-end', alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 80, color: '#FFF', paddingHorizontal: 30, fontWeight: '200' }}>{this.state.number}</Text>
        </View>

        <View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20 }}>
          <TouchableOpacity onPress={() => this.setZero()}>
          <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'darkgray', borderRadius: ((width / 4) - 20) / 2 }}>
          <Text style={{ fontSize: 45 }}>AC</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.changeNegative()}>
        <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'darkgray', borderRadius: ((width / 4) - 20) / 2 }}>
        <Text style={{ fontSize: 45 }}>+/-</Text>
      </View>
    </TouchableOpacity>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'darkgray', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 45 }}>%</Text>
    </View>
    <TouchableOpacity onPress={() => this.changeIslem('3')}>
    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#FE9F09', borderRadius: ((width / 4) - 20) / 2 }}>
    <Text style={{ fontSize: 45, color: '#fff' }}>÷</Text>
  </View>
  </TouchableOpacity>
</View>
<View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
  <TouchableOpacity onPress={() => this.changeNumber('7')}>
    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#333', borderRadius: ((width / 4) - 20) / 2 }}>
    <Text style={{ fontSize: 45, color: '#FFF' }}>7</Text>
  </View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.changeNumber('8')}>
  <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#333', borderRadius: ((width / 4) - 20) / 2 }}>
  <Text style={{ fontSize: 45, color: '#FFF' }}>8</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.changeNumber('9')}>
  <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#333', borderRadius: ((width / 4) - 20) / 2 }}>
  <Text style={{ fontSize: 45, color: '#FFF' }}>9</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.changeIslem('4')}>
<View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#FE9F09', borderRadius: ((width / 4) - 20) / 2 }}>
<Text style={{ fontSize: 45, color: '#fff' }}>x</Text>
</View>
</TouchableOpacity>
</View>
<View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
  <TouchableOpacity onPress={() => this.changeNumber('4')}>
    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#333', borderRadius: ((width / 4) - 20) / 2 }}>
    <Text style={{ fontSize: 45, color: '#FFF' }}>4</Text>
  </View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.changeNumber('5')}>
  <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#333', borderRadius: ((width / 4) - 20) / 2 }}>
  <Text style={{ fontSize: 45, color: '#FFF' }}>5</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.changeNumber('6')}>
  <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#333', borderRadius: ((width / 4) - 20) / 2 }}>
  <Text style={{ fontSize: 45, color: '#FFF' }}>6</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.changeIslem('2')}>
<View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#FE9F09', borderRadius: ((width / 4) - 20) / 2 }}>
<Text style={{ fontSize: 45, color: '#fff' }}>-</Text>
</View>
</TouchableOpacity>
</View>
<View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
  <TouchableOpacity onPress={() => this.changeNumber('1')}>
    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#333', borderRadius: ((width / 4) - 20) / 2 }}>
    <Text style={{ fontSize: 45, color: '#FFF' }}>1</Text>
  </View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.changeNumber('2')}>
  <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#333', borderRadius: ((width / 4) - 20) / 2 }}>
  <Text style={{ fontSize: 45, color: '#FFF' }}>2</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.changeNumber('3')}>
  <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#333', borderRadius: ((width / 4) - 20) / 2 }}>
  <Text style={{ fontSize: 45, color: '#FFF' }}>3</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.changeIslem('1')}>
<View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#FE9F09', borderRadius: ((width / 4) - 20) / 2 }}>
<Text style={{ fontSize: 45, color: '#fff' }}>+</Text>
</View>
</TouchableOpacity>
</View>
<View style={{ marginBottom: 40, flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
  <TouchableOpacity onPress={() => this.changeNumber('0')}>
    <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 2) - 20, height: (width / 4) - 20, backgroundColor: '#333', borderRadius: ((width / 4) - 20) / 2 }}>
    <Text style={{ fontSize: 45, color: '#fff' }}>0</Text>
  </View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.changeNumber('.')}>
<View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#333', borderRadius: ((width / 4) - 20) / 2 }}>
<Text style={{ fontSize: 45, color: '#fff' }}>,</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.Sonuc()}>
<View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#FE9F09', borderRadius: ((width / 4) - 20) / 2 }}>
<Text style={{ fontSize: 45, color: '#fff' }}>=</Text>
</View>
</TouchableOpacity>
</View>
</View>
);
}
}
