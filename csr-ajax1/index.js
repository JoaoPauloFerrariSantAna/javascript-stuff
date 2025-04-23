function createDivToShow(father, title, content) {
	const postDiv = document.createElement("div");

	postDiv.setAttribute("class", "post-conteiner");

	// this might cause problems 
	postDiv.innerHTML = `
	<div class="post-header">
		<h2>${title}</h2>
	</div>
	<div class="post-content">
		<p>${content}</p>
	</div>
	`;

	father.appendChild(postDiv);
}

function sendRequest() {
	const mainConteiner = document.getElementById("banana");
	const xhr = new XMLHttpRequest();

	xhr.open("GET", `https://jsonplaceholder.typicode.com/posts/1`, true);

	xhr.onload = () => {
		// so, i will need to "parse" the JSON to transform to a object
		const data = JSON.parse(xhr.response);
		createDivToShow(mainConteiner, data["title"], data["body"]);
	};

	xhr.send();
}

sendRequest();
