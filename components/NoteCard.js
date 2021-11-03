import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import {AntDesign} from '@expo/vector-icons'

export default function NoteCard({note}){

    return(

            <TouchableOpacity >
                <View style={styles.noteCard}> 
            
                        <View style={styles.topBar}>
                            <Text style={{flex: 9}}>{note.date}</Text> 
                            <AntDesign style={{alignSelf: 'flex-end', flex: 1}} name="star" size={24} color="yellow" />
                        </View>

                   
                        <View style={styles.lowerHalf}>
                          

                            <FlatList 
                                style={{flex: 1}}
                                keyExtractor={(item) => item.id}
                                numColumns={3}
                                data={note.collabs}
                                renderItem={({item}) => (
                                    <View style={styles.icon}>
                                        <Text >{item.name[0]}</Text>
                                    </View>
                                )}
                            />

                            
                            <Text style={{flex: 3, alignSelf: 'center', textAlign: 'left', marginLeft: '10%'}}>{note.title}</Text>
                           

                        </View>


                        <Text style={styles.levelText}>Level: {note.level}</Text>
                  
                </View>
            </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    noteCard: {
        margin: 10,
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 8,
        flex: 1,
        flexDirection: 'column',
    },

    topBar: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        width: '100%',
        alignItems: 'stretch'
    },

    lowerHalf: {
        flex: 4,
        alignSelf: 'center',
        padding: 5,
        alignItems: 'stretch',
        flexDirection: 'row',
    },

    levelText: {
        flex: 1,
        alignSelf: 'flex-end'
    },

    icon: {
        backgroundColor: '#28fc08',
        margin: 1,
        flex: 1,
        padding: 3,
        height: 25,
        width: 25,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
})