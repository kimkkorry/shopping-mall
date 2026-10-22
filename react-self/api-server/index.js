
import express from 'express'

// 앱 객체 생성
const app = express();
const PORT = 8000;

// 기본 라우트 설정
app.get('/', (req, res) => {
    res.send("<h1>Hello, Express!!</h1>");
})

app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "무선 마우스", price: 30000 },
    { id: 2, name: "유선 키보드", price: 20000 },
    { id: 3, name: "웹캠", price: 50000 },
  ];
  res.json(products);

});

app.use(express.json()); 

app.post("/api/products", (req, res) => {
  console.log(req.body);
  res.send("상품 등록 완료");

});

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버 실행중... http://localhost:${PORT}`);
})