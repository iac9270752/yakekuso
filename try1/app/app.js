var express = require('express');
var app = express();

// テンプレートエンジンをEJSに設定
app.set('views', './views');
app.set('view engine', 'ejs');

// public配下の静的ファイルは無条件に公開
app.use('/public', express.static('public'));

// URLと処理をマッピング
app.use('/', require('./routes/index.js'));

// ポート3000で起動
app.listen(3000);

// アプリケーション開始時のログ
console.log('Server running at http://localhost:3000');
