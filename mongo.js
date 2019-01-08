const mongoose = require('mongoose');


mongoose.Promise = global.Promise;


const env = require('./env/environment');

const mongoUri = `mongodb://${env.dbName};${env.key}@${env.dbName}.documents.azure.com:${env.cosmosport}/?ssl=true`;

function connect(){
    return mongoose.connect(mongoUri,{useMongoClient: true});
}

module.exports ={
    connect
};