// Including the async module
const async = require('async');

// Creating an array for all elements execution
const tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Initializing the queue
const queue = async.queue((task, executed) => {
   console.log("Currently Busy Processing Task " + task);

   setTimeout(()=>{
      // Number of tasks remaining and to be processed
      const tasksRemaining = queue.length();
      executed(null, {task, tasksRemaining});
   }, 1000);

}, 1); // concurrency value = 1

// Queue is idle initially as no elements are there...
console.log(`Queue Started ? ${queue.started}`)

// Adding each task from the tasks list
tasks.forEach((task)=>{

   // Adding the task 5 to the head for priority execution
   if(task == 5){
      queue.unshift(task, (error, {task, tasksRemaining})=>{
         if(error){
            console.log(`An error occurred while processing task ${task}`);
         }else {
            console.log(`Finished processing task ${task}/ ${tasksRemaining} tasks remaining`);
         }
      })
      // Adding all the tasks at tail to be executed except task 5
   } else {
      queue.push(task, (error, {task, tasksRemaining})=>{
         if(error){
            console.log(`An error occurred while processing task ${task}`);
         }else {
            console.log(`Finished processing task ${task}// ${tasksRemaining}
            tasks remaining`);
         }
      })
   }
});

// Executes the callback when the queue is done processing all the tasks
queue.drain(() => {
   console.log('All items are succesfully processed !');
})

// Checking if the queue is started after adding tasks
console.log(`Checking if the queue is started ? ${queue.started}`)
