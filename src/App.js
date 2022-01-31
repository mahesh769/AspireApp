import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import reduxStore from './redux/store';
import colors from './utility/Colors';
import Navigator from './navigations'
import { Provider } from 'react-redux';

// const store = reduxStore();

const App = () => {

  return (
    < View style={{ flex: 1, backgroundColor: colors.theme }} >
      <StatusBar barStyle="light-content" backgroundColor={colors.theme} />
      <SafeAreaView style={{ backgroundColor: colors.headerBg }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }} >
        <Provider store={reduxStore}>
          <Navigator />
        </Provider>
      </SafeAreaView>
      <FlashMessage position="top" />
    </View>
  );
};
export default App;