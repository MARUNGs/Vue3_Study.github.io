const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
// const access = {'access-control-allow-origin': '*'}


// ********** Node.js + DB **********
app.get('/', (req, res) => {
    // res.set(access) // 허용해줄 host 설정
    res.sendFile(__dirname + '/index.html')
})

app.get('/beauty', (req, res) => {
    res.send('뷰티용품 쇼핑 페이지')
})


/** 서버 실행시 $ node index.js */
app.listen(port)
/** cors() : 모든요청허용 */
app.use(cors())