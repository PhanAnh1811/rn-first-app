import React from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const obj=[
  {
    id:1,
    name:'Friend #1',
    age:20,
  },
  {
    id:2,
    name:'Friend #2',
    age:30,
  },
  {
    id:3,
    name:'Friend #3',
    age:40,
  },
  {
    id:4,
    name:'Friend #4',
    age:50,
  },
  {
    id:5,
    name:'Friend #5',
    age:50,
  },
  {
    id:6,
    name:'Friend #6',
    age:60,
  },
  {
    id:7,
    name:'Friend #7',
    age:70,
  },
]
const App = () => {
  return (
    <View>
      <Text style={styles.header}>Get started with react native</Text>
      <Text style={styles.label}>My name is PhanAnh</Text>

      <Text style={{ marginTop: 20, fontSize: 20 }}>List of friends</Text>
      <FlatList
        data={obj}
        keyExtractor={item=>item.id}
        renderItem={({item})=>{
          return(
            <Text style={{fontSize:20,color:'blue'}}>{item.name} - {item.age}</Text>
          )
        }}
      />

      <Button title='login' onPress={()=>doSomeThing()}/>
      <TouchableOpacity onPress={()=>doSomeThing()}>
        <Text>CLICK</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  header: {
    fontSize: 45,
  },
  label: {
    fontSize: 20,
  },
})
