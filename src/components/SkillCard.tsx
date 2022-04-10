import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform,
    TouchableOpacityProps
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps{
    skill: string;
}

export function SkillCard({skill, ...rest}: SkillCardProps){
    return(
        <TouchableOpacity 
            style={styles.buttonSkill} 
            {...rest}           
        >
            <Text
                style={styles.textSkill}
            >
                {skill}
                
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textSkill:{    
        color:'#999',    
        fontSize: 22,
        fontWeight: 'bold',

    },
    buttonSkill:{        
        backgroundColor: '#efefef',
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginBottom: 5,
        borderRadius: 30,
    }

});