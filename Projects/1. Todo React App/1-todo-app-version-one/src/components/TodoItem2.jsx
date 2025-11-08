function TodoItem2(){
  let todoName = 'Go to college';
  let todoDate = '4/10/2025';

  return <div class="container">
      <div class="row kg-row">
        <div class="col-5">
          {todoName}
        </div>
        <div class="col-4">
          {todoDate}
        </div>
        <div class="col-3">
          <button class="btn btn-danger kg-button">Remove</button>
        </div>
      </div>
      </div>
}

export default TodoItem2;