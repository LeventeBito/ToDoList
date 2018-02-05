Backendless.initApp("20FD0BE2-F44E-A32D-FFD1-273023F2B800","54B4E44B-7242-0056-FFEB-0138039E6400");



$(document).on("pageshow","#todopage", onPageShow);



function onPageShow() {
	console.log("page shown");
    var queryBuilder = Backendless.DataQueryBuilder.create();
    queryBuilder.setSortBy( ["created"] );
    Backendless.Data.of("TASKS").find(queryBuilder).then(processResults).catch(error);
} 





function processResults(tasks) {
   //display the first task in an array of tasks. 
alert(tasks[0].Task)

$("#taskList").empty();

for (var i=0; i<tasks.length; i++){
    $("#taskList").append("<li>"+tasks[i].Task+"</li>");
}

$("#taskList").listview("refresh");  
      
}



function saved(savedTask) {
    console.log( "new Contact instance has been saved" + savedTask);
}

function error(err) {
    alert(err);
}





$(document).on("click", "#addTaskButton", onAddTask);

function onAddTask() {
		console.log("add task button clicked");
    
    var tasktext = $("#addTaskText").val();

    var newTask = {};
    newTask.Task = tasktext;
        
    Backendless.Data.of("Tasks").save(newTask).then(saved).catch(error); 
	
}

   


