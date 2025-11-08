function TodoItem1(){
  let todoName = 'Buy Milk';
  let todoDate = '8/10/2025';

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

export default TodoItem1;