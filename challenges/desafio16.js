// use('commerce')

db.produtos.updateOne({ nome: { $eq: "Big Mac"}}, { $set: { ultimaModificacao: Date }})

db.produtos.find({ ultimaModificacao: { $exists: true } }, {_id: 0, nome: 1})