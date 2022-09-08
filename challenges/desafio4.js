// use('commerce')

db.produtos.find(
  { vendidos: { $lt: 100, $gt: 50 } },
  { _id: 0, nome: 1, vendidos: 1 },
).sort({ vendidos: 1 });