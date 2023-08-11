import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';

const generateRandomContacts = () => {
  const contacts = [];
  for (let i = 0; i < 50; i++) {
    contacts.push({
      id: i,
      name: `Contact ${i}`,
      email: `contact${i}@example.com`,
    });
  }
  return contacts;
};

const ContactFilter = () => {
  const [contacts, setContacts] = useState(generateRandomContacts());
  const [filter, setFilter] = useState('');

  const handleFilterChange = (text) => {
    setFilter(text);
    const filteredContacts = generateRandomContacts().filter((contact) =>
      contact.name.toLowerCase().includes(text.toLowerCase())
    );
    setContacts(filteredContacts);
  };

  const renderContact = ({ item }) => (
    <View style={styles.contactItem}>
      <Text>{item.name}</Text>
      <Text>{item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by name"
        value={filter}
        onChangeText={handleFilterChange}
      />
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderContact}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  contactItem: {
    marginBottom: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
});

export default ContactFilter;