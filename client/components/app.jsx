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
    this.deleteGrade = this.deleteGrade.bind(this);
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

  deleteGrade(deleteId) {
    fetch(`/api/grades/${deleteId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        const gradesCopy = [...this.state.grades];
        const index = gradesCopy.findIndex(studentObj => studentObj.id === deleteId);
        gradesCopy.splice(index, 1);
        this.setState({
          grades: gradesCopy
        });
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
