import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveData(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Data successfully saved');
  } catch (e) {
    console.log('Failed to save the data to the storage');
  }
}
export async function readData(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log('Failed to fetch the input from storage');
  }
}
