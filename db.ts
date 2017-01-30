const connectionString:string = 'mongodb://1234:1234@ds137729.mlab.com:37729/tester';

import * as mongodb from 'mongodb';

export default class Database {
  public static db:mongodb.Db;

  public static connect() {
    return mongodb.MongoClient.connect(connectionString).then((db) => {
        this.db = db;
      
    }).catch((err) => {
        console.error(err);
    });
  }
}
