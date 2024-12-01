let todoList = JSON.parse(localStorage.getItem('todoList'));
if(!todoList){
   todoList = [{name: "updateTodo", dueDate: "2021-03-20"}];
}
    //  [{name: "updateTodo", dueDate: "2021-03-20"}];

function render() {
  let todohtml = '';

todoList.forEach((element, index) =>{
  const{name, dueDate} = element
  const html = `
    <div class="name"> ${name} </div>
      <div class="dueDate"> ${dueDate} </div>
      <button class="delete-btn js-delete-btn">
        Delete
        </button>
    `
    todohtml +=html;
  
})

  
  document.querySelector('.todoBox').innerHTML = todohtml;

  document.querySelectorAll('.js-delete-btn').forEach((deleteButton,index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index,1);
      render();
      console.log(index);
    });
    
  })

  localStorage.setItem('todoList',JSON.stringify(todoList));
};

  render();


function updateTodo() {
  const todoEntry = document.querySelector('.inputElement');
  const name = todoEntry.value;
  const date = document.querySelector('.dueDate');
  const dueDate = date.value;
  
  todoList.push({name,dueDate});
  console.log(todoList);
  todoEntry.value =""; 
  render();
  

};

document.querySelector('.btn').addEventListener('click', () =>{
  updateTodo();
});


