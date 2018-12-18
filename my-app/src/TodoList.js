import React, { Component, Fragment } from 'react';

import TodoItem from './TodoItem';

//         继承.定义组件需要继承component的类
class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'test',
      list: ['列表1', '列表2']
    }
    this.handleInputValue = this.handleInputValue.bind(this);
    this.addList = this.addList.bind(this);
    this.del = this.del.bind(this)
  }

  // 输入监听
  handleInputValue(e) {
    // 存储输入的数值
    const value = e.target.value;
    console.log(e.target.value)
    this.setState(() => (
      {
        inputValue: value
      }
    )
    )
  }

  // 添加函数
  addList() {
    console.log('test');
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }
  // 删除
  del(index) {
    console.log(index)
    //备份数组
    const list = [...this.state.list];
    list.splice(index, 1);
    // 覆盖
    this.setState({
      list: list
    })
  }

  render() {
    return (
      <Fragment>
        {/* 注释编写 */}
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputValue}></input>
          <button onClick={this.addList}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <TodoItem key={index} index={index} contant={item} delItem={this.del}></TodoItem>
            })
          }
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
