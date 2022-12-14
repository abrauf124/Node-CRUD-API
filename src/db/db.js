import { MongoClient } from 'mongodb';

const DB_NAME = 'user-details';

export const db = {
    _dbClient: null,
    connect: async function(url) {
        const client = await MongoClient.connect(url, {
            poolSize: 10,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        this._dbClient = client;
      
    }, 
    getConnection: function() {
        if (!this._dbClient) {
            console.log(this._dbClient,'You need to call the connect() function first!');
            process.exit(1);
        }

        return this._dbClient.db(DB_NAME);
    },
}