// use('commerce')

db.produtos.find(
  { curtidas: { $lt: 100, $gt: 10 } },
  { _id: 0, nome: 1, curtidas: 1 },
);