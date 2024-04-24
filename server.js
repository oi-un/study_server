const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
}); 

// 이거 추가해놔야 ajax 잘 된다.
app.use(express.join()); // 유저가 보낸 array/object 데이터를 출력하기 위해
var cors = require('cors'); // npm install cors  | 다른 도메인 주소끼리 ajax 요청 주고받을 때 필요
app.use(cors());

// react02/build 파일을 연결
app.use(express.static(path.join(__dirname, 'react02/build')));

// main페이지 접속하면 index.html 띄워주세요.
app.get('/', function(요청, 응답){
  응답.sendFile(path.join(__dirname, 'react02/build/index.html'))
});

// react에서 상품데이터 필요하면
// /product 로 get요청하면 black shoes 보내줌
// DB데이터 보여주고 싶으면 데이터 뽑아서 보내주는 API 작성
// 리엑트는 여기로 get or post 요청하면 됨
app.get('/product', function(요청, 응답){
  응답.json({name: 'black shoes'})
});

//react router는 최하단에 추가
app.get('*', function(요청, 응답){
  응답.sendFile(path.join(__dirname, 'react02/build/index.html'))
});