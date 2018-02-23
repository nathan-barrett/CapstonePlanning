import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 440, height: 600}}
          source={{uri: 'https://images.unsplash.com/photo-1508717080561-0030acd438cf?ixlib=rb-0.3.5&s=1d07190c3151aa13469ae1158c1531f0&auto=format&fit=crop&w=664&q=80'}}></Image>
        <Text>Welcome to For Dog's Only</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dog: {
    height: '150',
    width: '100',
  }
});
