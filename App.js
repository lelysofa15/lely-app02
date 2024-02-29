import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';

export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_bm90ZWQtc2VydmFsLTQ5LmNsZXJrLmFjY291bnRzLmRldiQ'>
      <View style={styles.container}>

        {/* Sign In Component */}
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>

        {/* Sign Out */}
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider> 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
});
