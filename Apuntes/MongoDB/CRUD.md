# CRUD Operations

Create, Read, Update and Delete.

## Read

To show all information in the document que use the `find()` method.

```mongodb
db.document.find()
```

To list an specific field of the document we pass an object as a parameter.

```mongodb
db.document.find({key: value})
```

To list an specific field of the document and certains keys we pass an object as a parameter and a projection. In order for it to return the values that we want, the value of the key must be 1, if we don't  want a value we can set it to 0.

```mongodb
db.document.find(
    {key: value} //condition,
    {key: value} //projection
    )
```

For example:

```nosql
db.products.find({_id: 1}, {name: 1, _id: 0})
``` 

That print us:

```sh
[ { name: "Pen" } ]
```

## Update

To update we have to use the `updateOne()` or `updateMany()`. As first parameter we pass the _filter_ and as the second parameter we pass the _update values_.

```mongodb
db.collection.updateOne({filter}, {$set: update});
```

For example:

```mongodb
db.products.updateOne({_id: 1}, {$set: {stocks: 12}})
```

## Delete

In order to delete a _document_ from a _collection_ we use the `deleteOne()` and `deleteMany()`methods.

```mongodb
db.collection.deleteOne({filter});
```
