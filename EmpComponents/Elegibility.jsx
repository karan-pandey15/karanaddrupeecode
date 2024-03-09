import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Elegibility = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('');
  const [additionalIncomeAmount, setAdditionalIncomeAmount] = useState('');

  const handleSelectOption = option => {
    setSelectedOption(option);
  };

  const handleRegister = async () => {
    // Your registration logic here
    navigation.navigate('CusAddress');
  };

  return (
    <View style={styles.RegisterContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.RegisterBox}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../images/signUp.png')}
              style={styles.logoImg}
            />
            <Text style={styles.heading}>Check Eligibility</Text>
            <Text style={styles.paragraph}>
              By Submitting Your Basic Details.
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Your Salary *"
            />

            <Text style={styles.dropdownLabel}>
              Your additional Income (Optional)
            </Text>

            <View style={styles.dropdown}>
              <TouchableOpacity
                style={[
                  styles.option,
                  selectedOption === 'RENT' && styles.selectedOption,
                ]}
                onPress={() => handleSelectOption('RENT')}>
                <Text style={styles.optionText}>RENT</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.option,
                  selectedOption === 'BONUS' && styles.selectedOption,
                ]}
                onPress={() => handleSelectOption('BONUS')}>
                <Text style={styles.optionText}>BONUS</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.option,
                  selectedOption === 'INCENTIVE' && styles.selectedOption,
                ]}
                onPress={() => handleSelectOption('INCENTIVE')}>
                <Text style={styles.optionText}>INCENTIVE</Text>
              </TouchableOpacity>
            </View>

            {selectedOption !== '' && (
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder={`Enter ${selectedOption} Amount`}
                value={additionalIncomeAmount}
                onChangeText={setAdditionalIncomeAmount}
              />
            )}

            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Monthly EMI (Optional)"
            />

            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="No of Loans (Optional)"
            />

            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Total CC outstanding (Optional)"
            />

            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="No of Cards (Optional)"
            />
            <TouchableOpacity
              style={[styles.button, {alignSelf: 'center'}]} // Center the button horizontally
              onPress={handleRegister}>
              <Text style={{fontSize: 20, color: '#fff'}}>Submit Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  RegisterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8edeb',
    height: '100%',
  },
  RegisterBox: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    height: 120,
    width: 160,
    borderRadius: 50,
  },
  heading: {
    marginTop: 15,
    fontSize: 25,
    color: '#111',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  input: {
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: 'black',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 0,
    width: '100%',
    color: '#111',
    fontWeight: '600',
    fontSize: 16,
    marginTop: 20,
  },
  inputContainer: {
    marginTop: 20,
  },
  dropdownLabel: {
    marginTop: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 10,
  },
  option: {
    flex: 1,
    backgroundColor: '#3E9D7C',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 5,
  },
  optionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectedOption: {
    backgroundColor: '#5CAEA9',
  },
  button: {
    height: 60,
    width: 340,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#3E9D7C',
    color: '#fff',
    borderRadius: 10,
    marginBottom: 15,
  },
});

export default Elegibility;
