// use('commerce')
db.produtos.find(
  { valoresNutricionais: { $elemMatch: { tipo: "calorias", quantidade: { $lt: 500}}} },
  { _id: 0, nome: 1})