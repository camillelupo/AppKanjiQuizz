import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeTemplate from "../template/HomeTemplate";
import QuizzTemplate from "../template/QuizzTemplate";
import {Header} from "react-native/Libraries/NewAppScreen";

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
            <Drawer.Navigator>

                <Drawer.Screen name="HomeTemplate" component={HomeTemplate}/>
            </Drawer.Navigator>
    );
}

export default MyDrawer;