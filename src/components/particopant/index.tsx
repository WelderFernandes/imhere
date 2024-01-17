import { Text, TouchableOpacity, Vibration, View } from "react-native";
import { styles } from "./styles";


type Props = {
    name: string
    onRemove: () => void
}
export function Participant({name, onRemove} : Props) {
    return (
        <View style={styles.container}>
        <Text
            style={styles.name}
            onPress={() => Vibration.vibrate()}
        >
            {name}
        </Text>
        <TouchableOpacity style={styles.button} onPress={onRemove}>
            <Text style={styles.buttonText}>
                 -
            </Text>
        </TouchableOpacity>
        </View>
    )
}