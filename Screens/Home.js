import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import TodoInsert from '../Components/TodoInsert';
import TodoList from '../Components/TodoList';
import  {db}  from '../firebaseConfig';
import { 
  addDoc, 
  collection, 
 } from "firebase/firestore"; 

const Home = () => {

    const [todos, setTodos] = useState([]);
  
    const addTodo = async (text) => {
      // id, 텍스트, 체크 여부
      setTodos([
        ...todos,
        {id: Math.random().toString(), textValue: text, checked: false},
      ]);
      try{
        await addDoc(collection(db, 'memo'), {
          todos: todos
        });
      }catch(error) {
        console.log(error.message)
      }
    };
  
    // 커링함수: 다중 인수를 갖는 함수를 단일 인수를 갖는 함수들의 함수열로 바꾸는 것
    // 쓰는 이유는 부수효과를 최대한으로 줄이고 가독성과 유지보수를 용이하게 하기 위함
    
    /*
     const onRemove = id => e => {
       setTodos(todos.filter(todo => todo.id !== id));
     };
    */

    // 위의 onRemove는 밑의 onRemove같이 실행됨
    // addTodo는 return을 사용하지 않았지만 onRemove와 onToggle이 return을 사용한 이유?
    // todos의 값을 변경하는 과정에서 필요한 것으로 추측
    onRemove = function(id) {
      return function() {
        setTodos(todos.filter(todo => todo.id !== id));
      }
    }
  
    const onToggle = id => e =>{
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
          <TodoInsert onAddTodo={addTodo}/>
        </View>
      </SafeAreaView>
    );
  }
  
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