const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');

// Путь к Service Account файлу
const serviceAccountPath = path.resolve(__dirname, '../youoffice-814d4-firebase-adminsdk-fbsvc-e477985391.json');
const serviceAccount = require(serviceAccountPath);


admin.initializeApp({
   credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

// Путь к папке с файлами товаров
const productsDirectory = path.resolve(__dirname, '../files/product');

async function importAllData() {
   console.log('Начинаем импорт всех данных в Firestore...');

   let files;
   try {
      // Читаем все файлы из директории
      files = fs.readdirSync(productsDirectory);
   } catch (error) {
      console.error(`❌ Ошибка чтения директории ${productsDirectory}:`, error);
      return;
   }

   for (const file of files) {
      // Проверяем, что файл имеет расширение .json
      if (path.extname(file) === '.json') {
         const filePath = path.join(productsDirectory, file);
         let productsData;

         try {
            // Читаем содержимое файла и парсим JSON
            const fileContent = fs.readFileSync(filePath, 'utf8');
            productsData = JSON.parse(fileContent);
         } catch (parseError) {
            console.error(`❌ Ошибка чтения или парсинга файла ${file}:`, parseError);
            continue;
         }

         // Убеждаемся, что данные — это массив
         if (!Array.isArray(productsData)) {
            console.error(`❌ Ожидался массив в файле ${file}. Пропускаем...`);
            continue;
         }

         // Категория берётся из имени файла (без расширения)
         const categoryName = path.basename(file, '.json');

         console.log(`🚀 Импортируем ${productsData.length} товаров из "${file}" в коллекцию "products"...`);
         const batch = db.batch();
         for (const product of productsData) {
            // Используем 'id' из JSON-файла как ID документа в Firestore
            const docRef = db.collection('products').doc(product.id);
            batch.set(docRef, {
               ...product,
               category: categoryName
            });
         }

         try {
            await batch.commit();
            console.log(`✅ Импорт из файла "${file}" завершён.`);
         } catch (commitError) {
            console.error(`❌ Ошибка при импорте из файла "${file}":`, commitError);
         }
      }
   }

   console.log('✅ Все импорты завершены.');
}

importAllData();
