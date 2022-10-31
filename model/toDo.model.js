const db = require("../lib/db");

const COLLECTION = "toDo";

class ToDoModel {
  static getSingleItem = async (id) => {
    const toDoItem = toDoMock.find((item) => {
      return id === item.id;
    });
    return toDoItem;
  };

  static listItems = async () => {
    console.log("\t\tmodel :: listItems");
    return db.getDb().collection(COLLECTION).find({}, { projection: { _id: 0 } }).toArray();
  };

  static addItem = async (item) => {
    console.log("\t\tmodel :: addItem");
    await db.getDb().collection(COLLECTION).insertOne(item);
    return item;
  };

  static deleteItem = async (id) => {
    console.log("\t\tmodel :: deleteItem");
    const result = await db.getDb().collection(COLLECTION).deleteOne({ id });
    if (result.deletedCount === 0) {
      return false;
    }

    return true;
  };

  static editItem = async (id, updatedItem) => {
    console.log("\t\tmodel :: editItem");

    const result = await db.getDb().collection(COLLECTION).replaceOne({ id }, updatedItem);
    if (result.matchedCount === 0) {
      return false;
    }

    return updatedItem;
  };

  static editItem2 = async (id, updatedItem2) => {
    console.log("\t\tmodel :: editItem2");

    const result = await db.getDb().collection(COLLECTION).updateOne({ id }, updatedItem2);
    if (result.modifiedCount === 0) {
      return false;
    }

    return updatedItem2;

    //const toDoIndex = toDoMock.findIndex((item) => {
    //  return item.id === id;
    //});

    //if (toDoIndex >= 0) {
     // const newItem = Object.assign({}, toDoMock[toDoIndex], updatedItem2);
      //toDoMock[toDoIndex] = newItem;
      //return newItem;
    };
  };


module.exports = ToDoModel;
