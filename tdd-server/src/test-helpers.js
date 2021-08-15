import { MongoClient } from "mongodb";
const DB_NAME = process.env.NODE_ENV === 'test' ? 'TEST_DB' : 'PROD_DB';


export const setDataBaseData = async (collectionName, data) => {
    const client = await MongoClient.connect(
        `mongodb://localhost:27017/${DB_NAME}`,
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true 
        }
    );
    const db = client.db(DB_NAME);
    await db.collection(collectionName).insertMany(data);
    client.close();
}

export const getDatabaseData = async (collectionName) => {
    const client = await MongoClient.connect(
        `mongodb://localhost:27017/${DB_NAME}`,
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true 
        }
    );
    const db = client.db(DB_NAME);
    const result = await db.collection(collectionName).find().toArray();
    client.close();
    return result;
}

export const resetDatabase = async () => {
    const client = await MongoClient.connect(
        `mongodb://localhost:27017/${DB_NAME}`,
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true 
        }
    );
    const db = client.db(DB_NAME);
    await db.dropDatabase();
    client.close();
}