<head>
	<title>Slot Machine</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div class="slot-machine">
		<div class="reel">
			<img class="symbol" src="https://via.placeholder.com/100x100" alt="symbol">
			<img class="symbol" src="https://via.placeholder.com/100x100" alt="symbol">
			<img class="symbol" src="https://via.placeholder.com/100x100" alt="symbol">
		</div>
		<div class="reel">
			<img class="symbol" src="https://via.placeholder.com/100x100" alt="symbol">
			<img class="symbol" src="https://via.placeholder.com/100x100" alt="symbol">
			<img class="symbol" src="https://via.placeholder.com/100x100" alt="symbol">
		</div>
		<div class="reel">
			<img class="symbol" src="https://via.placeholder.com/100x100" alt="symbol">
			<img class="symbol" src="https://via.placeholder.com/100x100" alt="symbol">
			<img class="symbol" src="https://via.placeholder.com/100x100" alt="symbol">
		</div>
	</div>
	<button onclick="spin()">Spin</button>
	<p id="result"></p>
	<script src="script.js"></script>
</body>
<style>
    .slot-machine {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 300px;
}

.reel {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 50px;
}

.symbol {
	margin: 10px 0;
}

button {
	margin-top: 20px;
	font-size: 20px;
	padding: 10px 20px;
	background-color: #4CAF50;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

button:hover {
	background-color: #3E8E41;
}

</style>

<script>
    function spin() {
	const reels = document.querySelectorAll('.reel');
	const result = document.getElementById('result');
	const symbols = ['https://via.placeholder.com/100x100', 'https://via.placeholder.com/100x100', 'https://via.placeholder.com/100x100'];
	let spinResult = [];

	reels.forEach(reel => {
		const randomSymbolIndex = Math.floor(Math.random() * symbols.length);
		const symbol = symbols[randomSymbolIndex];
		spinResult.push(symbol);
		const symbolsList = reel.querySelectorAll('.symbol');
		symbolsList.forEach(s => s.src = symbol);
	});

	if (spinResult[0] === spinResult[1] && spinResult[1] === spinResult[2]) {
		result.innerHTML = 'You Win!';
	} else {
		result.innerHTML = 'Try Again!';
	}
}

</script>