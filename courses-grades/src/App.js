import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

import GradeList from './ShowData.js';

class App extends React.PureComponent {
    constructor(props){
        super(props);
        this.state={items:[]};
        this.handler = this.handler.bind(this);
    };
    handler(){
        var name = document.getElementById("name").value;
        var chinese = document.getElementById("chinese").value;
        var math = document.getElementById("math").value;
        var english = document.getElementById("english").value;
        var sum = parseInt(chinese)+parseInt(math)+parseInt(english);
        let student = {name:name,chinese:chinese,math:math,english:english,sum:sum};
        this.state.items.push(student);
        this.forceUpdate();
        this.render();
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">学生成绩统计</h1>
        </header>
        <p className="App-intro">
            <table>
                <tr>
                    姓名&nbsp;&nbsp;&nbsp;语文&nbsp;&nbsp;&nbsp;数学&nbsp;&nbsp;&nbsp;英语
                </tr>
                <tr>
                    <form>
                    <input id={"name"} type={"text"} />
                        <input id={"chinese"} type={"text"}/>
                        <input id={"math"} type={"text"}/>
                        <input id={"english"} type={"text"}/>
                    </form>
                </tr>
            </table>
            <button onClick={this.handler}>提交</button>
            <GradeList students={this.state}/>
        </p>
      </div>
    );
  }

}

export default App;
