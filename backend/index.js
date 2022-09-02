const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
// const access = {'access-control-allow-origin': '*'}

const memos = ['배열1', '배열2', '배열3']

app.get('/', (req, res) => {
    // res.set(access) // 허용해줄 host 설정
    res.send('서버확인완료') // 'node 서버에서 해당 문자열을 응답하겠다' 를 의미함.
})

app.get('/memos', (req, res) => {
    // res.set(access)
    res.send(memos)
})

app.get('/beauty', (req, res) => {
    res.send('뷰티용품 쇼핑 페이지')
})

/** 서버 실행시 $ node index.js */
app.listen(port)
/** cors() : 모든요청허용 */
app.use(cors())