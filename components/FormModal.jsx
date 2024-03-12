import {useState} from 'react';
import {
    Text,
    Modal,
    Pressable,
    View,
    StyleSheet,
    TextInput,
} from 'react-native';

export default function FormModal(props) {
    const {modalVisible, setModalVisible, addArticle} = props;
    const [text, setText] = useState('');

    const handleInput = () => {
        if (text !== '') {
            addArticle(text);
            setText('');
        }
    };

    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Ajouter un article</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={inputText => setText(inputText)}
                    value={text}
                />
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={handleInput}>
                    <Text style={styles.textStyle}>Ajouter</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(false)}>
                    <Text style={styles.textStyle}>Fermer</Text>
                </Pressable>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        fontSize: 36,
    },
    input: {
        width: 150,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        borderRadius: 20,
        padding: 20,
        elevation: 2,
        margin: 10,
    },
    buttonOpen: {
        backgroundColor: 'green',
    },
    buttonClose: {
        backgroundColor: 'red',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
