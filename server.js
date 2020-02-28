const express = require('express');
const app = express();
app.get('/download',async function(req,res){
	return res.download('./outfile.json');
});
app.listen(80)