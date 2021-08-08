const express= require('express');
const PORT= process.env.PORT || 8080;
const path= require('path');
const app= express;
const nameApp= 'FaceApp';

app.use(express.static('./dist/'+nameApp));

app.get('/*', function(req,res){
  res.sendFile(path.join(__dirname,'./dist/'+nameApp+'/index.html'));
});

app.listen(PORT);

