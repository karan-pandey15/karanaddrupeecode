import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const SelectType = props => {
  const cards = [
    {image: require('../images/salaryied.png'), name: 'Salaried'},
    {image: require('../images/employee.png'), name: 'Self-employed'},
    {
      image: require('../images/business.png'),
      name: 'Self-employed Professional',
    },
    {image: require('../images/loanAp.png'), name: 'Contractual employee'},
    {image: require('../images/student.png'), name: 'Student'},
    {image: require('../images/retiredimg.png'), name: 'Retired'},
    {image: require('../images/homemaker.png'), name: 'Homemaker'},
    {image: require('../images/homemaker.png'), name: 'Defence'},
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              marginTop: 40,
              fontWeight: 'bold',
            }}>
            Select Your Role
          </Text>
          <View style={styles.containerBox}>
            {cards.map((card, index) => (
              <View
                key={index}
                style={[
                  styles.cardContainer,
                  index === cards.length - 1 && styles.centeredCard,
                ]}>
                <TouchableOpacity
                  style={styles.cardBox}
                  onPress={() => props.navigation.navigate('CusAddress')}>
                  <Image source={card.image} style={styles.cardImg} />
                  <Text style={styles.cardText}>{card.name}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scrollContainer: {
    flex: 1,
    padding: 10,
  },
  containerBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 24,
  },
  cardContainer: {
    width: '48%',
    marginBottom: 15,
    alignItems: 'center',
  },
  centeredCard: {
    alignSelf: 'center',
  },
  cardBox: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10, // Rounded corners
    overflow: 'hidden', // Ensure content stays within rounded corners
  },
  cardImg: {
    width: 80,
    height: 80,
    marginTop: 10,
    borderRadius: 40, // Round image
  },
  cardText: {
    color: '#000', // Black color
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16, // Increased font size
  },
  elgText: {
    fontSize: 20,
    marginLeft: 150,
    borderBottomWidth: 2,
    color: '#0071CD',
    borderBottomColor: '#0071CD',
    marginTop: 10,
  },
});

export default SelectType;
