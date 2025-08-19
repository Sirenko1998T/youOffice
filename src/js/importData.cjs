const admin = require('firebase-admin');

const serviceAccount = require('../youoffice-814d4-firebase-adminsdk-fbsvc-e477985391.json');


const productsData = require('../files/product/Batteries.json');


admin.initializeApp({
   credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


const collectionName = 'Batteries';


async function importData() {
   console.log('Начинаем импорт данных...');

   if (!Array.isArray(productsData)) {
      console.error('Ошибка: Ожидается массив данных в файле.');
      return;
   }

   for (const product of productsData) {
      try {

         const docRef = db.collection(collectionName).doc();
         await docRef.set(product);
         console.log(`Документ с ID ${docRef.id} успешно добавлен в коллекцию ${collectionName}.`);
      } catch (error) {
         console.error(`Ошибка при добавлении документа:`, error);
      }
   }

   console.log('Импорт завершён.');
}

importData();