import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';

export default function SecondScreen({navigation}){
    const DATA = [
        { name: 'Party Makeup', key: '1', desc: '50.000'},
        { name: 'Graduation Makeup', key: '2', desc: '80.000'},
        { name: 'Engagement Makeup', key: '3', desc: '100.000'},
        { name: 'Wedding Makeup', key: '5', desc:'500.000'},
    ];

    return(
        <ImageBackground
            style={styles.background} 
            source={require("../assets/Background2.jpg")}>
            <View style={{marginTop:60, height:750, width:Dimensions.get("screen").width}}>
                <FlashList
                data={DATA}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={()=>navigation.navigate('Third' ,item)}>
                        <Text style={styles.item}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                    )}
                estimatedItemSize={200}
            />
            </View>
            
            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate('First')}>
                    <AntDesign name='leftcircle' size={50} color="white"/>
                </TouchableOpacity>
            </View>
       </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: Dimensions.get("screen").width,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    item: {
        flex:1,
        marginTop:20,
        width:350,
        padding:20,
        borderWidth:1,
        borderColor:"white",
        borderRadius:20,
        fontSize: 24,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf:"center"
    },
    button: {
        margin:20,
        top:0,
        right:150,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
  });