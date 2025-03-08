import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/RegisterScreen';  // Importando os estilos
import { Picker } from '@react-native-picker/picker';


const RegisterForm: React.FC = () => {
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Usuário" />
      <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirmar Senha" secureTextEntry />
      <View style={styles.regionPicker}>
        <Text style={styles.regionText}>Selecione sua Região</Text>
        <Picker style={styles.picker} selectedValue="" onValueChange={() => {}}>
          <Picker.Item label="Brasil" value="BR" />
          <Picker.Item label="Argentina" value="AR" />
          <Picker.Item label="Chile" value="CL" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>CRIAR CONTA</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterForm;
