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
	console.log(newTrain.freq);

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

		// First Time (pushed back 1 year to make sure it comes before current time)
		var firstTimeConverted = moment(trainStart,"HH:mm").subtract(1, "years");
		console.log(firstTimeConverted);

		// Current Time
		var currentTime = moment();
		console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

		// Difference between the times
		var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
		console.log("DIFFERENCE IN TIME: " + diffTime);

		// Time apart (remainder)
		var tRemainder = diffTime % trainFreq;
		console.log(tRemainder);

		// Minute Until Train
		var tMinutesTillTrain = trainFreq - tRemainder;
		console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

		// Next Train
		var nextTrain = moment().add(tMinutesTillTrain, "minutes");
		var nextArrival = moment(nextTrain).format("hh:mm");
		console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

	console.log(trainName);
	console.log(trainDest);
	console.log(trainStart);
	console.log(trainFreq);

	$("#time").html("Current Time: " + currentTime.format("hh:mm"));
	$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" + trainFreq + "</td><td>" + nextArrival + "</td><td>" + tMinutesTillTrain + "</td></tr>");

});
