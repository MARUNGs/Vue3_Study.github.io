const express = require('express')
const app = express()
const port = 5000

const memos = ['배열1', '배열2', '배열3']

app.get('/memos', (req, res) => {
    res.send(memos) // 'node 서버에서 해당 문자열을 응답하겠다' 를 의미함.
})

/** 서버 실행시 $ node index.js */
app.listen(port, () => {
    console.log('************************************************************************')
    console.log(`Example app listening at http://localhost:${port}`)
    console.log('************************************************************************')
})
