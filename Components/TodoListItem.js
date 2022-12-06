import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Swipeable } from 'react-native-gesture-handler';

const TodoListItem = ({textValue, id, checked, onRemove, onToggle}) => {
 
  // 오른쪽에서 왼쪽으로 밀어서 삭제
  const RightActions = () => {
    return(
      <TouchableOpacity>
        <View style={styles.rightAction} >
          <Text style={styles.actionText} onPress={onRemove(id)}>삭제</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPressOut={onToggle(id)}>
        {checked ? (
          <View style={styles.completeCircle}>
            <Icon name="smileo" size={30} color="black" />
          </View>
        ) : (
          <View style={styles.completeCircle}>
            <Icon name="frowno" size={30} color="lightgrey"/>
          </View>

        )}
      </TouchableOpacity>
      <Swipeable
        renderRightActions={RightActions}
      >
        <Text
          style={[
            styles.text,
            checked ? styles.strikeText : styles.unstrikeText,
          ]}>
          {textValue}
        </Text>
      </Swipeable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: '300',
    fontSize: 20,
    marginVertical: 20,
    width: 300,
  },
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: '#29323c',
  },
  buttons: {
    flexDirection: 'row',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  rightAction: {
    backgroundColor:'red',
    justifyContent:'center',
    flex: 1,
  },
  actionText: {
    color: 'white',
    padding: 20,
  },
});

export default TodoListItem;