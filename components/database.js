import * as SQLite from 'expo-sqlite';

// Veritabanını açma
const openDatabase = () => {
  const db = SQLite.openDatabase('newsRekabet.db');
  return db;
};

// Haberleri almak için fonksiyon
export const getNews = async (callback) => {
  try {
    const db = openDatabase();
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM newsRekabet',
        [],
        (_, { rows: { _array } }) => {
          callback(_array);
        },
        (txObj, error) => {
          console.error('Error getting news:', error);
        }
      );
    });
  } catch (error) {
    console.error('Error opening database:', error);
  }
};
