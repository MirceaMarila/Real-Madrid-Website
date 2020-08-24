function getComments(){
	fetch("http://localhost:3000/comments")
	.then((data) => { return data.json() })
	.then((json) => displayComments(json))
}

function displayComments(data){
	let responseArea = document.getElementById('responseArea');
	for (let i = 0; i<data.length; i++){
		let comment = document.createElement('div');
		comment.innerHTML = `
			<div style="border: 1px solid black; background-color:#fafafa; margin-bottom: 10px; width: 60%; padding: 10px; font-family: Arial sans-serif;">
				<p style="font-size: 1.2rem; font-weight: bold;">${data[i]["author"]}</p>
				<p style="text-align: justify">${data[i]["comment"]}</p>
			</div>
		`;
		responseArea.appendChild(comment);
	}
	
}

function sendInformation(){
  let name = document.getElementById('name').value;
  let comment = document.getElementById('comment').value;

  fetch("http://localhost:3000", 
  {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify({name: name, comment: comment})
  }).then((data) => {
      return data.json()
  }).then((json)=>{
      if(json.Status === 'OK'){
          getComments();
      } else {
          document.getElementById('responseArea').innerText='Information was not received';
      }
      console.log(json);
  })
}