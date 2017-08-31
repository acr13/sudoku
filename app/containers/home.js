import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import connector from '../selectors/home/connector';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});


const Home = () => (
  <View style={styles.container}>
    <Text>{'Hello World'}</Text>
  </View>
);


function mapDispatchToProps() {
  return {};
}

export default connect(connector, mapDispatchToProps)(Home);
