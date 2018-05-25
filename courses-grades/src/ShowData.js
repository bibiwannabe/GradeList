import React, { Component } from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import students from './App.js'
import './index.css'
class GradeList extends Component {
    render() {
        let list = this.props.students.items.map( (item,index) =>
            <tr>
                <td>{item.name}</td><td>{item.chinese}</td><td>{item.math}</td><td>{item.english}</td><td>{item.sum}</td>
            </tr>
            )
        return (
            <table>
                <tr id={'firstLine'}>
                    <td>姓名</td><td>语文</td><td>数学</td><td>英语</td><td>总分</td>
                </tr>
                {list}
            </table>

        );
    }
}
export default GradeList;
