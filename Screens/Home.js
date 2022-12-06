import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import TodoInsert from '../Components/TodoInsert';
import TodoList from '../Components/TodoList';

const Home = () => {

    const [todos, setTodos] = useState([]);
  
    const addTodo = (text) => {

      // id, 텍스트, 체크 여부
      setTodos([
        ...todos,
        {id: Math.random().toString(), textValue: text, checked: false},
      ]);
    };
  
    // 커링함수: 다중 인수를 갖는 함수를 단일 인수를 갖는 함수들의 함수열로 바꾸는 것
    // 쓰는 이유는 부수효과를 최대한으로 줄이고 가독성과 유지보수를 용이하게 하기 위함
    const onRemove = id => e => {
      setTodos(todos.filter(todo => todo.id !== id));
    };
  
    const onToggle = id => gim => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked} : todo,
        ),
      );
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <TodoList  todos={todos} onRemove={onRemove} onToggle={onToggle} />
          <TodoInsert onAddTodo={addTodo} />
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    card: {
      backgroundColor: '#fff',
      flex: 1
    },
  });

export default Home