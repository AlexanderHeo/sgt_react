import React from 'react';
import GradeForm from './gradeform.jsx';
import GradeTable from './gradetable.jsx';
import Header from './header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      grades: []
    });
    this.addGrade = this.addGrade.bind(this);
    this.getAllGrades = this.getAllGrades.bind(this);
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.setState({
          grades: jsonData
        });
      });
  }

  componentDidUpdate() {
    // console.log('this.state.grades:', this.state.grades);
  }

  addGrade(newStudent) {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newStudent)
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        const gradesCopy = [...this.state.grades];
        const addedNewStudent = gradesCopy.concat(jsonData);
        this.setState({
          grades: addedNewStudent
        });
      });
  }

  deleteGrade(deleteStudent) {
    fetch('/api/grades/:id', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deleteStudent)
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        // console.log('jsonData in deleteGrade:', jsonData);
        // make copy of this.state.grades
        // delete student from copy
        // *find index of object with id of deleteStudent
        // *iterate through array, and find array[i][attr] === value, return i
        // **splice the copied array at that index copiedArr.splice(index, 1)
        // then setState to copied array

      });
  }

  render() {
    return (
      <>
        <Header grades={ this.state.grades } />
        <div className="parent-container d-flex">
          <GradeTable
            onSubmit={ this.deleteGrade }
            grades={ this.state.grades }
          />
          <GradeForm
            onSubmit={ this.addGrade }
            grades={ this.state.grades }
          />
        </div>
      </>
    );
  }
}

export default App;
