// use('commerce');

db.produtos.countDocuments({ ingredientes: { $size: 4 } });