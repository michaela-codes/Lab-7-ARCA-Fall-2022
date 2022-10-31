const model = require('../model/toDo.model');
const { v4: uuidv4 } = require("uuid");

class ToDoCoordinator {

    static getSingleItem = async (id) => {
        console.log(`coordinator :: getSingleItem :: ${id}`);
        return model.getSingleItem(id);
    }
    static listItems = async () => {
        console.log('coordinator :: listItems');
        return model.listItems();
    };

    static addItem = async (item) => {
        item.id = uuidv4();
        item.date = new Date();

        console.log('coordinator :: addItem');
        return model.addItem(item);
    };

    static deleteItem = async (id) => {
        console.log(`coordinator :: deleteItem :: ${id}`);
        return model.deleteItem(id);
    };

    static editItem = async (id, updatedItem) => {
        updatedItem.id = id;
        updatedItem.date = new Date();

        console.log(`coordinator :: editItem :: ${id}`);
        return model.editItem(id, updatedItem);
    };

    static editItem2 = async (id, updatedItem2) => {
        updatedItem2.id = id;

        console.log(`coordinator :: editItem2 :: ${id}`);
        return model.editItem2(id, updatedItem2);
    }
};

module.exports = ToDoCoordinator;