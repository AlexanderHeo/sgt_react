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
        newStudent.id = (this.state.grades).length + 1;
        const gradesDeepCopy = [...this.state.grades];
        const addedNewStudent = gradesDeepCopy.concat(newStudent);
        this.setState({
          grades: addedNewStudent
        });
      });
  }

  render() {
    return (
      <>
        <Header grades={ this.state.grades } />
        <div className="parent-container d-flex">
          <GradeTable grades={ this.state.grades } />
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
