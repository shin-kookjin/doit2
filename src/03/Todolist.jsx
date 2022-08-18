import React, { PureComponent } from 'react';

class Todolist extends PureComponent {
  render() {
    const todList = [
      { taskName: '빨래하기', finished: false },
      { taskName: '청소 하기', finished: true },
    ];
    return (
      <div>
        {todList.map((todo) => (
          <div key={todo.taskName}> {todo.taskName}</div>
        ))}
      </div>
    );
  }
}

export default Todolist;
