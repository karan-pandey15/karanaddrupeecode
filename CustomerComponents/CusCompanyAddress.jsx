import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CusCompanyAddress = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState('');
  const [tl, setTl] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../images/CompadressImg.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Your Company Details ?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Company Name"
          />

          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Company Address"
          />

          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Locality / Area"
          />

          <View style={styles.twoInputContainer}>
            <View style={styles.twoInput}>
              <TextInput
                style={styles.input}
                onChangeText={setPincode}
                value={pincode}
                placeholder="Pincode"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.twoInput}>
              <TextInput
                style={styles.input}
                onChangeText={setCity}
                value={city}
                placeholder="City"
              />
            </View>
          </View>

          <TextInput
            style={styles.input}
            onChangeText={setName}
            placeholder="Monthly in-hand income"
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CustomerAccount')}>
            <Text style={{fontSize: 20, color: '#fff'}}>
              Save Company Address
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8edeb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 320,
    width: '100%',
    overflow: 'hidden',
    borderRadius: 10,
    marginTop: 15,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  textContainer: {
    padding: 20,
  },
  text: {
    color: '#111',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: 'black',
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 0,
    width: '100%',
    color: '#111',
    fontWeight: '600',
    fontSize: 16,
  },
  twoInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  twoInput: {
    flex: 1,
    marginRight: 10, // Adjust this value as per your preference
  },
  button: {
    height: 55,
    width: 340,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#3E9D7C',
    color: '#fff',
    borderRadius: 10,
  },
});

export default CusCompanyAddress;
