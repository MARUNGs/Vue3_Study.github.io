const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
// const access = {'access-control-allow-origin': '*'}
app.set('view engine', 'ejs')


// ********** MongoDB **********
const MongoClient = require('mongodb').MongoClient
var db // db 설정 변수 필요
MongoClient.connect(
    /**            계정ID  계정비밀번호                      데이터베이스명 */
    'mongodb+srv://admin:admin@cluster0.qmr45hh.mongodb.net/todoapp?retryWrites=true&w=majority',
    function(error, client) {
        if(error) { return console.log(error) }
        db = client.db('todoapp') // todoapp라는 데이터베이스(폴더)에 연결할 것!

        // insertOne('저장할 데이터', 콜백함수)
        db.collection('post').insertOne({ // post 파일에다가 데이터(Object)를 추가할 것
            _id: 100,
            name: 'john',
            age: 20
        }, function() { 
            console.log('서버연결완료')
        }) 

        app.listen(port) // 접속여부 확인하기
})


// ********** Node.js **********
app.get('/', (req, res) => {
    // res.set(access) // 허용해줄 host 설정
    res.sendFile(__dirname + '/index.html')
})

app.get('/beauty', (req, res) => {
    res.send('뷰티용품 쇼핑 페이지')
})

app.get('/write', (req, res) => {
    res.sendFile(__dirname + '/write.html')
})

app.post('/add', (req, res) => { // post 요청
    db.collection('counter').findOne({name: '게시물갯수'}, function(error, result) {
        var totalCnt = result.totalPost

        db.collection('post').insertOne({
            _id: totalCnt + 1,
            title: req.body.title,
            date: req.body.date
        }, function() { 
            // 글 발행 후 게시물 갯수 1 증가 - update
            db.collection('counter').updateOne(
                {name: '게시물갯수'}, 
                { $inc : {totalPost: 1 }}, function(error, result) { // 수정할 데이터, 수정값(연산자 이용), 콜백
                    // { $set : {totalPost : 바꿀 값} }
                    // { $inc : {totalPost : 기존값에 더해줄 값} }
                    if(error) { return console.log(error) }
            })

            console.log('저장완료')
        })
    })

    res.send('전송완료')
})

app.get('/list', function(req, res) {
    db.collection('post').find().toArray(function(error, result) {  // 모든 데이터 조회
        res.render('list.ejs', { posts: result })
    })
})


// app.listen(port) // 이제 mongoDB에서 포트를 이용할 것이므로 여기는 주석처리.
/** cors() : 모든요청허용 */
app.use(cors())





