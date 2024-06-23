const express = require('express')
const app = express()
const port = 3000
app.set('view engine','ejs')
app.use( express.static( "views" ) );
app.get('/', (req, res) => {
  const name="Kunal Gaurav"
  const roll_number="230002036"
  const dob="23-7-2006"
  const hostel="CVR"
  const mobileno=900678213
  const email="ee230002036"
  const branch="ee"
  const address="Kunal Gaurav"
  res.render("index",{name:name,branch:branch,hostel:hostel,mobileno:mobileno,dob:dob,roll_number:roll_number,email:email,address:address})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})