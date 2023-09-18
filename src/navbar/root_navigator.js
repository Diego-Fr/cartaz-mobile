import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './tab_navigator';
import { Text, View } from 'react-native';
import SelectStore from '../impressions/new/views/select_store';
import SelectPaper from '../impressions/new/views/select_paper';
import SelectLayout from '../impressions/new/views/select_layout';
import Show from '../impressions/new/views/product/show/show'
import Confirmation from '../impressions/new/views/confirmation/confirmation';
import Login from '../impressions/new/views/login/login';


const Home = _ =>{
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Test" component={Home} />
      <Stack.Screen name="select_paper" component={SelectPaper} />
      <Stack.Screen name="select_layout" component={SelectLayout} />
      <Stack.Screen name="product_show" component={Show} />
      <Stack.Screen name="confirmation_view" component={Confirmation} />
      <Stack.Screen name="login_view" component={Login} />
    </Stack.Navigator>
  );
}

export default RootNavigator;