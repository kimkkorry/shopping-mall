import express from 'express';
import mysql from 'mysql2';

const app = express();
const PORT = 8000;

// 💡 1. 미들웨어는 라우터(app.get, app.post)보다 상단에 위치해야 합니다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'jsuser',
  password: 'pwjs',
  database: 'jsdb',
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error('DB 연결 실패:', err);
    return;
  }
  console.log('DB 연결 성공');
});

// 테스트용 DB 상태 확인
db.query("SELECT DATABASE() AS current_db", (err, res) => {
  console.log("1. 현재 접속된 DB:", res);
});

db.query("SHOW TABLES", (err, res) => {
  console.log("2. 현재 DB의 실제 테이블 목록:", res);
});

// 루트 경로
app.get('/', (req, res) => {
  res.send('<h1>서버와 DB 연동</h1>');
});

// 상품 목록 조회
app.get('/api/products', (req, res) => {
  const sql = 'SELECT * FROM product';
  db.query(sql, (err, results) => {
    if (err) {
      console.log('상품 조회 오류:', err);
      res.status(500).send('상품 조회 중 오류가 발생했습니다.');
      return;
    }
    res.json(results);
  });
});

// 상품 등록
app.post('/api/products', (req, res) => {
  console.log('전달받은 req.body:', req.body); // 디버깅용 콘솔 로그

  // 💡 2. 클라이언트가 보내는 JSON 키 값(product_name)에 맞추어 추출합니다.
  const { productName, price } = req.body;

  const sql = 'INSERT INTO product (product_name, price) VALUES (?, ?)';
  db.query(sql, [productName, price], (err, results) => {
    if (err) {
      console.log('상품 등록 오류:', err);
      res.status(500).send('상품 등록 중 오류가 발생했습니다.');
      return;
    }
    res.json({ productName, price, insertId: results.insertId });
  });
});

app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const sql = 'SELECT * FROM product WHERE id = ?';
  db.query(sql, [productId], (err, results) => {
    if (err) {
      console.log('상품 조회 오류:', err);
      res.send('상품 조회 중 오류가 발생했습니다.');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('해당 ID의 상품을 찾을 수 없습니다.');
      return;
    }
    res.json(results[0]);
  });
});

app.delete('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const sql = 'DELETE FROM product WHERE id = ?';

  db.query(sql, [productId], (err, results) => {
    if (err) {
      console.log('상품 삭제 오류:', err);
      res.status(500).send('상품 삭제 중 오류가 발생했습니다.');
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send('해당 ID의 상품을 찾을 수 없습니다.');
      return;
    }
    res.send('상품이 성공적으로 삭제되었습니다.' );
  });
});

app.put('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const { productName, price } = req.body;
  const sql = 'UPDATE product SET product_name = ?, price = ? WHERE id = ?';

  db.query(sql, [productName, price, productId], (err, results) => {
    if (err) {
      console.log('상품 수정 오류:', err);
      res.status(501).send('상품 수정 중 오류가 발생했습니다.');
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send('해당 ID의 상품을 찾을 수 없습니다.');
      return;
    }
    res.status(200).send('상품이 성공적으로 수정되었습니다.');

  });
});



app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}에서 서버 실행중...`);
});