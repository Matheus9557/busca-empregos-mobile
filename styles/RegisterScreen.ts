import { StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.large,
    paddingTop: theme.spacing.xlarge,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.medium,
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    textAlign: 'center',
    marginVertical: theme.spacing.small,
  },
  inputContainer: {
    paddingHorizontal: theme.spacing.medium,
    paddingBottom: theme.spacing.large,
  },
  input: {
    height: 48,
    backgroundColor: theme.colors.inputBackground,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    color: theme.colors.text,
  },
  regionPicker: {
    height: 48,
    backgroundColor: theme.colors.inputBackground,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    color: theme.colors.text,
  },
  picker: {
    height: 48,
    backgroundColor: theme.colors.inputBackground,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    color: theme.colors.text,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 24,
    paddingVertical: theme.spacing.small,
    alignItems: 'center',
    marginTop: theme.spacing.large,
  },
  submitButtonText: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.buttonText,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    marginTop: theme.spacing.large,
  },
  link: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.medium,
  },
  icon: {
    fontSize: 24,  // Defina o tamanho do ícone, caso seja um ícone de texto
    color: theme.colors.primary,  // Defina a cor do ícone, conforme necessário
  },
  regionText: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
  },
});

export default styles;
