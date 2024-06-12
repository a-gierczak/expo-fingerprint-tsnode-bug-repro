// Import some random constant, so that it fails when the correct tsconfig is not loaded
import { Colors } from '@/constants/Colors';

export default {
  expo: {
    name: 'expo-fingerprint-tsnode-bug-repro',
    slug: 'expo-fingerprint-tsnode-bug-repro',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: Colors.light.background,
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: Colors.light.background,
      },
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: ['expo-router'],
    experiments: {
      typedRoutes: true,
    },
  },
};
