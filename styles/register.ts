import { StyleSheet } from 'react-native';
import theme from './theme'; // ou caminho do seu arquivo de tema

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
  icon: {
    fontSize: 30,
    color: theme.colors.primary,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 24,
    paddingVertical: theme.spacing.small,
    alignItems: 'center',
    marginTop: theme.spacing.medium,
  },
  buttonText: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.buttonText,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    textAlign: 'center',
    marginVertical: theme.spacing.small,
  },
  inputContainer: {
    marginTop: theme.spacing.large,
    paddingHorizontal: theme.spacing.medium,
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
  footer: {
    marginTop: theme.spacing.large,
    alignItems: 'center',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
  },
  link: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.medium,
  },
});

export default styles;
