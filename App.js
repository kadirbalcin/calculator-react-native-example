import React from 'react';
import { StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000', paddingTop: 40 }}>
      <StatusBar backgroundColor="blue" barStyle='light-content' />
      <View style={{ flex: 1, justifyContent:'flex-end', alignItems: 'flex-end' }}>
        <Text style={{ fontSize: 60, color: '#FFF', paddingHorizontal: 30 }}>32</Text>
      </View>
    <View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20 }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'darkgray', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 32 }}>AC</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'darkgray', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 32 }}>+/-</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'darkgray', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 32 }}>%</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'orange', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 32, color: '#fff' }}>/</Text>
      </View>
    </View>
    <View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 32, color: '#FFF' }}>1</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 32, color: '#FFF' }}>2</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 32, color: '#FFF' }}>3</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'orange', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 32, color: '#fff' }}>X</Text>
      </View>
    </View>
    <View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 32, color: '#FFF' }}>4</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 32, color: '#FFF' }}>5</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 32, color: '#FFF' }}>6</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'orange', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 32, color: '#fff' }}>-</Text>
      </View>
    </View>
    <View style={{ flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 32, color: '#FFF' }}>7</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 32, color: '#FFF' }}>8</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 32, color: '#FFF' }}>9</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'orange', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 32, color: '#fff' }}>+</Text>
      </View>
    </View>
    <View style={{ marginBottom: 40, flexDirection: 'row', width: width, justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 2) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 32, color: '#fff' }}>0</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: '#202020', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 32, color: '#fff' }}>,</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: (width / 4) - 20, height: (width / 4) - 20, backgroundColor: 'orange', borderRadius: ((width / 4) - 20) / 2 }}>
      <Text style={{ fontSize: 32, color: '#fff' }}>=</Text>
      </View>
    </View>
    </View>
  );
}
