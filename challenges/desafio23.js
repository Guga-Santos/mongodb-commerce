// use('commerce')

db.produtos.updateMany(
  {},
  { $push: { tags: { $each: ["combo", "tasty"], $sort: 1 } } },
);

db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });

  // https://app.betrybe.com/course/back-end/introducao-ao-mongodb/updates-complexos-arrays/e58a3ec0-3a24-4d96-97f1-bfeec6d1b253/conteudos/83a130c7-91e1-4d3d-a595-e5c3b02078f7/operador-push/15b92d26-6736-4fbc-81c2-f0116a2b9cd3?use_case=side_bar