import {View, Text, StyleSheet, Pressable} from 'react-native';
const Item = props => {

  const {id, title, removeArticle} = props;

    return (
        <View>
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => removeArticle(id)}
            >
              <Text style={styles.item}>{title}</Text>
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    item: {
        color: 'black',
        textAlign: 'center',
        padding: 26,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        backgroundColor: 'azure',
    },
});

export default Item;
