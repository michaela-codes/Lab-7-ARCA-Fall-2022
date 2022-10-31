const coordinator = require('../coordinator/toDo.coordinator');


const getSingleItem = async (req, res, next) => {
  console.log("controller :: getSingleItem");
  try {
  const singleItem = await coordinator.getSingleItem(req.params.id);
  if (singleItem) {
    res.status(200).send(singleItem);
  } else {
    res.sendStatus(404);
  };
} catch (ex) {
  return next(ex);
}};

const addItem = async (req, res, next) => {
    console.log('controller :: addItem');
try {
    const newItem = await coordinator.addItem(req.body);
    res.status(201).send(newItem);
} catch(ex) {
  return next(ex);
}};

const deleteItem = async (req, res, next) => {
    console.log('controller :: deleteItem');
try {
    const deletedItem = await coordinator.deleteItem(
      req.params.id,
    );

    if (deletedItem) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    };
} catch(ex) {
  return next(ex);
}};

const listItems = async (req, res, next) => {
    console.log(`controller :: listItems`);
try {
    const item = await coordinator.listItems();
    res.status(200).send(item);
} catch(ex) {
  return next(ex);
}};

const editItem = async (req, res, next) => {
    console.log('controller :: editItem');
try {
    const updatedItem = await coordinator.editItem(
      req.params.id,
      req.body
    );

    if (updatedItem) {
      res.status(200).send(updatedItem);
    } else {
      res.sendStatus(404);
    };
} catch(ex) {
  return next(ex);
}};

const editItem2 = async (req, res, next) => {
  console.log("controller :: editItem2");
  try {
    const updatedItem2 = await coordinator.editItem2(req.params.id, req.body);

    if (updatedItem2) {
      res.status(200).send(updatedItem2);
    } else {
      res.sendStatus(404);
    }
  } catch (ex) {
    return next(ex);
  }
};

module.exports = {
    getSingleItem,
    addItem,
    deleteItem,
    listItems,
    editItem,
    editItem2
}