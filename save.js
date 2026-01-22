function saveData(name, data){
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'write_data.php');
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify({filename: name, filedata: data}));
	}