const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
	res.send('wlh mch n9oul l youssef chnouwa 9olt ki rit msg al instagram!! tansach rak 7left hahahaha');
})

app.listen(port, ()=>console.log(`Example listening on port ${port}`));
