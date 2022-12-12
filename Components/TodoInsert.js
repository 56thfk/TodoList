import React, {useState} from 'react';
import {StyleSheet, TextInput, View, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoInsert = ({onAddTodo, onReadFromDB}) => {
  
  const [newTodoItem, setNewTodoItem] = useState('');

  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };

  const addTodoHandler = () => {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  };

  return (
      <KeyboardAvoidingView 
        style={styles.inputContainer}
        behavior={'padding'}
        keyboardVerticalOffset = {100}
      >
        <TextInput
          style={styles.input}
          placeholder="메모 입력"
          value={newTodoItem}
          onChangeText={todoInputHandler}
          placeholderTextColor={'#999'}
          autoCorrect={false}
          onSubmitEditing={addTodoHandler}
        />
        <TouchableOpacity onPress={addTodoHandler}>
          <View style={styles.button}>
            <Icon name="enter" size={30} color="black" />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  input: {
    flex: 1,
    padding: 10,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
});

export default TodoInsert;