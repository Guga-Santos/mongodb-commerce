// use('commerce')

db.createCollection("resumoProdutos");

db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: db.produtos.countDocuments({}),
});

db.resumoProdutos.find({}, { _id: 0, franquia: 1, totalProdutos: 1 });