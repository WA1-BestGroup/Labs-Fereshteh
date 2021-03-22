//Lab1 - Ex2
//Construction function
// import dayjs from 'dayjs';
const dayjs = require('dayjs');
const taskList = [
];

let var1 = {id:1, description:"test1", urgent:true,view:true,deadline:new Date('2019-06-28')};
let var2 = {id:2, description:"test2", urgent:false,view:true,deadline:new Date('2019-06-10')};
let var3 ={id:3, description:"test3", urgent:true,view:false,deadline:new Date('2019-06-22')};
let var4 ={id:3, description:"test3", urgent:true,view:false,deadline:new Date('')};


class Task {
    constructor(id,description,urgent,view,deadline) {
        this.id = id;
        this.description = description;
        this.urgent = urgent;
        this.view = view;
        this.deadline = dayjs(deadline);
    }
    

    sortAndPrint() {
        console.log("****** Tasks sorted by deadline (most recent first): ******")
          const result = taskList.sort((a, b) => b.deadline - a.deadline)
          console.log(result)
        }


      filterAndPrint(){
        console.log("****** Tasks filtered, only (urgent == true): ******")
        const result = taskList.filter(item => item.urgent === true);
        console.log(result);
    }
  }


taskList.push(var1);
taskList.push(var2);
taskList.push(var3);
taskList.push(var4);

const myTask = new Task();
myTask.sortAndPrint();
myTask.filterAndPrint();


console.log(taskList);