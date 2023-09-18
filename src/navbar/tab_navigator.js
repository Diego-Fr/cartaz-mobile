import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import List from '../impressions/list/list';
import SelectStore from '../impressions/new/views/select_store';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectProduct from '../impressions/new/views/select_product/select_product';
import FindProduct from '../impressions/new/views/product/find_product/find_product';
import SelectPaper from '../impressions/new/views/select_paper';
import Confirmation from '../impressions/new/views/confirmation/confirmation';
import Login from '../impressions/new/views/login/login';

const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      
      <Tab.Screen name="Store" component={Login} 
      options={{
        tabBarLabel: 'Novo Cartaz',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="plus" color={color} size={26} />
        ),
      }}/>
      <Tab.Screen name="List" component={List} />
    </Tab.Navigator>
  );
}

export default TabNavigator;