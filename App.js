import React from 'react';
import { View, StyleSheet } from 'react-native';
import ContactFilter from './ContactFilter';

const App = () => {
  return (
    <View style={styles.container}>
      <ContactFilter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;