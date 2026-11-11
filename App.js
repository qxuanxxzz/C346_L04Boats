import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Boat from './Boat';

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#E0F2F1',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 16,
        margin: 12,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#A7C7E7',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#2C3E50',
        marginLeft: 10,
    },
    content: {
        padding: 12,
    }
});

export default function App() {
    return (
        <View style={styles.parent}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <FontAwesome name="ship" size={22} color="#88D8C0" />
                    <Text style={styles.title}>GETABOAT - FOR SALE</Text>
                </View>
                <FontAwesome name="anchor" size={18} color="#A7C7E7" />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Boat icon="ship" name="Sea Ray 500 Sundancer" description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." picture={require('./img/sea_ray.jpg')} />
                <Boat icon="anchor" name="Four Winns Horizon 180" description="A sporty look and refined details truly set the Horizon 180 above all others." picture={require('./img/four_winns.jpg')} />
                <Boat icon="life-ring" name="Flipper 640 ST" description="A modern take on the classic, traditional hardtop and perfect for a family picnic." picture={require('./img/flipper.jpg')} />
                <Boat icon="flag" name="Princess V48" description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model." picture={require('./img/princess.jpg')} />
                <Boat icon="compass" name="Bayliner 175 Bowrider" description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." picture={require('./img/bayliner.jpg')} />
                <Boat icon="tint" name="Fairline Targa 47" description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." picture={require('./img/fairline.jpg')} />
            </ScrollView>
        </View>
    );
}