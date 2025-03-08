import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import MainNavigator from './navigation/MainNavigator';  // Navegação principal
import { AuthProvider } from './contexts/AuthContext';  // Contexto de autenticação
import theme from './styles/theme';  // Tema global

const App: React.FC = () => {
  return (
    <AuthProvider>
      {/* SafeAreaView para garantir que o conteúdo não sobreponha a área segura */}
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        {/* Barra de status para controlar o estilo da barra superior */}
        <StatusBar barStyle="dark-content" backgroundColor={theme.colors.background} />
        
        {/* Navegação principal */}
        <MainNavigator />
      </SafeAreaView>
    </AuthProvider>
  );
};

export default App;
