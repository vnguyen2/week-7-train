var trainData = new Firebase("https://train-887cf.firebaseio.com");

$("#addTrainBtn").on("click", function(){

	// Grabs user input
	var trainName = $("#trainNameInput").val().trim();
	var trainDest = $("#destInput").val().trim();
	var trainStart = moment($("#startInput").val().trim(), "DD/MM/YY").format("X");
	var trainRate = $("#freqInput").val().trim();

	// Creates local "temporary" object for holding employee data
	var newTrain = {
		name:  trainName,
		role: trainRole,
		start: trainStart,
		rate: trainRate
	}

	// Uploads employee data to the database
	employeeData.push(newTrain);

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