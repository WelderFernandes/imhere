import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/particopant';
import { styles } from './styles';

export function Home() {

    const participants = ['Rodrigo', 'Maria', 'João', 'Pedro', '#6B6B9B', 'm', "sdfsd", "sdfsddd", "teste", "sdfosdf", "sdjhfg"];
    
    function handleParticipantAdd() {
        console.log('Adicionar participante')
    }

    function handleParticipantRemove(name: string) {
        console.log(`Remover participante ${name}`)
    }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>

    <View style={styles.form}>
        <TextInput 
            style={styles.input}
            placeholder='Nome do participante'
            placeholderTextColor='#6B6B9B'
        />
        <TouchableOpacity style={styles.button} onPress={() => {handleParticipantAdd()}}>
            <Text style={styles.buttonText}>
                 + 
            </Text>
        </TouchableOpacity>
    </View>
    <ScrollView showsVerticalScrollIndicator={false} >
    {
        participants.map(participant => (
            <Participant
                key={participant}
                name={participant}
                onRemove={() => handleParticipantRemove(participant)}
            />
        ))
    }
    </ScrollView>
    </View>
  );
}