var trainData = new Firebase("https://train-887cf.firebaseio.com");

$("#addTrainBtn").on("click", function(){
	// Grabs user input
	var trainName = $("#trainNameInput").val().trim();
	var trainDest = $("#destInput").val().trim();
	var trainStart = moment($("#startInput").val().trim(), "HHmm").format("X");
	var trainFreq = $("#freqInput").val().trim();

	var newTrain = {
		name:  trainName,
		role: trainRole,
		start: trainStart,
		rate: trainFreq
	}

	trainData.push(newTrain);

	console.log(newTrain.name);
	console.log(newTrain.role); 
	console.log(newTrain.start);
	console.log(newTrain.rate)

	// Alert
	alert("Train successfully added");

	// Clears all of the text-boxes
	$("#trainNameInput").val("");
	$("#destInput").val("");
	$("#startInput").val("");
	$("#freqInput").val("");

	return false;
});

