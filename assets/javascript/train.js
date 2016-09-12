var trainData = new Firebase("https://train-887cf.firebaseio.com");

$("#addTrainBtn").on("click", function(){
	// Grabs user input
	var trainName = $("#trainNameInput").val().trim();
	var trainDest = $("#destInput").val().trim();
	var trainStart = $("#startInput").val().trim();
	var trainFreq = $("#freqInput").val().trim();

	console.log($("#startInput").val().trim());

	var newTrain = {
		name:  trainName,
		dest: trainDest,
		start: trainStart,
		freq: trainFreq
	}

	console.log(newTrain);

	trainData.push(newTrain);

	console.log(newTrain.name);
	console.log(newTrain.dest); 
	console.log(newTrain.start);
	console.log(newTrain.freq)

	alert("Train successfully added");

	// Clears all of the text-boxes
	$("#trainNameInput").val("");
	$("#destInput").val("");
	$("#startInput").val("");
	$("#freqInput").val("");

	return false;
});

trainData.on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var trainName = childSnapshot.val().name;
	var trainDest = childSnapshot.val().dest;
	var trainStart = childSnapshot.val().start;
	var trainFreq = childSnapshot.val().freq;

	console.log(trainName);
	console.log(trainDest);
	console.log(trainStart);
	console.log(trainFreq);


	$("#trainloyeeTable > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" + trainFreq + "</td><td>" + "xxxxxxx" + "</td><td>" + "Xxxxxx" + "</td></tr>");

});

