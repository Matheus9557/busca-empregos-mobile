import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterScreen: React.FC = () => {
  return (
    <View style={styles.container}>  {/* Container principal com cor de fundo */}
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo(a)!</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.icon}>⚙️</Text> {/* Ícone de engrenagem */}
        </TouchableOpacity>
      </View>

      {/* Formulário de Registro */}
      <Text style={styles.subtitle}>Criar uma conta</Text>
      <Text style={styles.subtitle}>Crie sua conta abaixo</Text>
      <View style={styles.inputContainer}>
        {/* Inputs do formulário */}
        <TextInput style={styles.input} placeholder="Usuário" />
        <TextInput style={styles.input} placeholder="E-mail" />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirmar Senha" secureTextEntry />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CRIAR CONTA</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer content</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d3748', // Cor de fundo bg-slate-800 em hexadecimal
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#fff', // Cor do título
  },
  button: {
    backgroundColor: '#6b21a8', // Violet-800
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  icon: {
    fontSize: 24,
    color: '#fff', // Cor do ícone
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#fff', // Cor do subtítulo
    textAlign: 'center',
    marginVertical: 10,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    height: 48,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: 16,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  footer: {
    marginTop: 30,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#fff',
  },
});

export default RegisterScreen;
