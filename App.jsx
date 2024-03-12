import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native';
import FormModal from './components/FormModal';
import Item from './components/Item';

export default function App() {
    
    const [arrayArticle, setArrayArticle] = useState([{id: '1', title: 'tomates'}]);

    const [modalVisible, setModalVisible] = useState(false);

    const addArticle = (newArticle) => {
        setArrayArticle([...arrayArticle, {id: (arrayArticle.length + 1).toString(), title: newArticle}]);
        console.log(arrayArticle);
        setModalVisible(false);        
    }

    const removeArticle = (id) => {
        setArrayArticle(arrayArticle.filter(article => article.id !== id));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ma liste de course :</Text>
            <View style={styles.div}>
                <FlatList
                    data={arrayArticle}
                    renderItem={({item}) => <Item title={item.title} id={item.id} removeArticle={removeArticle} />}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={<Text>Aucun article</Text>}
                />
            </View>
            <Pressable
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Text>Ajouter un article</Text>
            </Pressable>
            <FormModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                addArticle={addArticle}
            />
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'cornsilk',
    },
    div: {
        width: 100,
        height: 600,
    },
    text: {
        color: 'black',
        fontWeight: 'normal',
        fontSize: 20,
        marginBottom: 20,
    },
    button: {
        borderRadius: 20,
        padding: 20,
        elevation: 2,
        backgroundColor: 'lightblue',
    },
});
