import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const EmpDashboard = props => {
  const [pendingData, setPendingData] = useState([]);
  const [approvedData, setApprovedData] = useState([]);
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function getEmail() {
      try {
        const storedData = await AsyncStorage.getItem('employeeEmail');

        if (storedData) {
          const trimmedEmail = storedData.trim();
          setEmail(trimmedEmail);
          fetchPendingData(trimmedEmail);
          fetchApprovedData(trimmedEmail);
        } else {
          console.log('No email stored');
        }
      } catch (error) {
        console.error('Error retrieving email:', error);
      }
    }

    getEmail();
  }, []);

  const fetchPendingData = async email => {
    const response = await fetch(
      `https://api.addrupee.com/api/getpendingdatas/${email}`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
      },
    );
    const data = await response.json();
    setPendingData(data);
  };

  const fetchApprovedData = async email => {
    const response = await fetch(
      `https://api.addrupee.com/api/approved-data/${email}`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
      },
    );
    const data = await response.json();
    setApprovedData(data);
  };

  // Array of image paths and names for each card
  const cards = [
    {image: require('../images/bankImg.png'), name: 'Personal Loan'},
    {image: require('../images/Homeloan.png'), name: 'Home Loan'},
    {image: require('../images/businessLoan.png'), name: 'Business Loan'},
    {image: require('../images/loanAp.png'), name: 'Loan Against Property'},
    {image: require('../images/loanappImg.png'), name: 'OD/OC'},
    {image: require('../images/cardImg.png'), name: 'Credit Card'},
    {image: require('../images/mutual.png'), name: 'Mutual Funds'},
    {image: require('../images/shareImg.png'), name: 'Health Insurance'},
    {image: require('../images/loanImg.png'), name: 'General Insurance'},
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Image style={styles.mainImg} source={require('../images/dsh.jpg')} />
          <View style={styles.textContainer}>
            <View style={styles.parentContainer}>
              <View style={styles.container1}>
                <Text style={styles.textStyle}>PENDING</Text>
                <Text style={styles.valueStyle}>{pendingData.length}</Text>
              </View>
              <View style={styles.container2}>
                <Text style={styles.textStyle}>DISBURSED</Text>
                <Text style={styles.valueStyle}>{approvedData.length}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Elegibility')}>
              <Text style={styles.elgText}>Check Eligibility</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.containerBox}>
            {cards.map((card, index) => (
              <TouchableOpacity
                key={index}
                style={styles.cardBox}
                onPress={() => props.navigation.navigate('EmpForm')}>
                <Image source={card.image} style={styles.cardImg} />
                <Text style={styles.cardText}>{card.name}</Text>
              </TouchableOpacity>
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
    backgroundColor: '#01876D',
  },
  upperContainer: {
    position: 'relative',
    height: 300,
  },
  mainImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  parentContainer: {
    height: 120,
    width: 350,
    flexDirection: 'row',
  },
  container1: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: '#17A2B8',
    backgroundColor: '#f8edeb',
  },
  container2: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#17A2B8',
    backgroundColor: '#f8edeb',
  },
  textStyle: {
    color: '#3D9E7E',
    fontSize: 24,
    fontWeight: 'bold',
  },
  valueStyle: {
    color: '#3D9E7E',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20,
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
  cardBox: {
    width: '48%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    elevation: 5,
  },
  cardImg: {
    width: 80,
    height: 80,
    marginTop: 10,
  },
  cardText: {
    color: '#81c3d7',
    marginTop: 10,
    fontWeight: 'bold',
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

export default EmpDashboard;
