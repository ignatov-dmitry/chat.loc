const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://root:root@127.0.0.1:27017";
const mongoClient = new MongoClient(url);

// Remove empty class definition if not needed

async function connect() {
    await mongoClient.connect();
    // обращаемся к базе данных admin
    return  mongoClient.db("chat");
}
async function insertMessages(count) {
    try {
        const db = await connect();
        const collection = db.collection('messages');

        const arrayItems = [];
        let i = 0;
        while (i < count) {
            arrayItems.push({ a: 1 });
            i++;
        }

        const insertResult = await collection.insertMany(arrayItems);

            //console.log('Inserted documents =>', insertResult);
        // выполняем пинг для проверки подключения
        // const result = await db.command({ ping: 1 });
        // console.log("Подключение с сервером успешно установлено");
        // console.log(result);
    } catch (err) {
        console.log("Возникла ошибка");
        console.log(err);
    } finally {
        // Закрываем подключение при завершении работы или при ошибке
        await mongoClient.close();
        console.log("Подключение закрыто");
    }
}

// Export the run function, not its result
module.exports = {
    connect,
    insertMessages
};