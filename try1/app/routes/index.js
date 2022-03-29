var express = require('express');
var router = express.Router();

// デフォルトルーティング
router.get('/', function (request, response) {
    // パラメータに値を設定、設定したパラメータはejs内で参照可能となる
    response.render('index', { title: 'NodeSample01', message: 'Hello Node.js' });
});

module.exports = router;
