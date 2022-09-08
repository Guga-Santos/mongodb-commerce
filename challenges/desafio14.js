// use('commerce')
db.produtos.find(
  { ingredientes: { $in: ["picles"] } },
  { _id: 0, nome: 1, ingredientes: 1, valoresNutricionais: { $slice: [0, 3] } },
);