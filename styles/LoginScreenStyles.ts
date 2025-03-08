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
  icon: {
    fontSize: 24,
    color: theme.colors.primary,
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
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 24,
    paddingVertical: theme.spacing.small,
    alignItems: 'center',
    marginTop: theme.spacing.large,
  },
  buttonText: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.buttonText,
  },
  footer: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    marginTop: theme.spacing.large,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    marginTop: theme.spacing.medium,
  },
  link: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.medium,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: theme.spacing.large,
  },
});

export default styles;
