// mongodb+srv://<username>:<password>@cluster0.melqn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

import {MongoClient} from 'mongodb'

const MONGO_URI = 'mongodb+srv://clone_tictokm_mkn:Mknmnz@123@cluster0.melqn.mongodb.net/tictokclone?retryWrites=true&w=majority'

export async function openDB(){
    const cliente = new MongoClient(
            useNewUrlParse: true,
            useUnifiedTopology: true,
    )

    if(!cliente.isConnected()) await cliente.connect();
    return cliente.db('tictokclone');
}