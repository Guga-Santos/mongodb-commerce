// use('commerce');

db.produtos.countDocuments({ nome: { $regex: /Mc/i } })