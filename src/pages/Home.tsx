import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput, 
    Platform,
    FlatList,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';


interface SkillDAta{
    id: string;
    name: string;
} 

export function Home(){

    const [newSkill, setNewSkill] = useState('');
    const [mySkill, setMySkill] = useState<SkillDAta[]>([]);  
    const [gretting, setGretting] = useState('');  

    function handleAddSkill(){

        const data = {
            id: String(new Date().getTime()),
            name: newSkill,
        }

        setMySkill(oldState => [...oldState, data])
    }

    function handleRemoveSkill(id: string){
        setMySkill(oldState => oldState.filter(
            skill => skill.id !== id
        ))

    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if(currentHour < 12){
            setGretting('Good morning')
        }else if(currentHour >= 12 &&  currentHour < 18){
            setGretting('Good aftermoon')
        }else{
            setGretting('Good nigth')
        }

    }, [])
    
  return (
    <>
      <View style={styles.container}> 

        

        <Text style={styles.title}>Welcome, freitas</Text>
        <Text style={styles.greetings}> {gretting} </Text>
        <TextInput 
            style={styles.input}
            placeholder="New Skills"
            placeholderTextColor="#555"
            onChangeText={setNewSkill}
        />

        <Button 
            onPress={handleAddSkill}
            title="Add"
        />
        

        <Text
            style={[styles.title, {marginVertical: 30}]}
        >
            My Skills: {newSkill}
        </Text>        

        <FlatList
            data={mySkill}
            keyExtractor = {item => item.id}
            renderItem={({item}) =>(

                <SkillCard 
                    skill={item.name}
                    onPress={() => handleRemoveSkill(item.id)}
                />

            )}
        />       

      </View>
    </>
  )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,
    },
    title:{
        color: '#fff',
        fontSize:24,
        fontWeight: 'bold',        
    },
    input:{
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
    },
    greetings:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});