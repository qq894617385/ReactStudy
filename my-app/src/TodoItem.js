import React, { Component } from 'react';

class TodoItem extends Component {

    constructor(props){
        super(props);
        this.del = this.del.bind(this)
    }

    render() {
        return <div onClick={this.del}>{this.props.contant}</div>
    }
    // 点击函数
    del(){
       this.props.delItem(this.props.index)
    }
}

export default TodoItem;