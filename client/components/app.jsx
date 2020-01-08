import React from 'react';
import GradeTable from './gradetable.jsx';
import Header from './header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      grades: []
    });
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

  // addGrade(newStudent) {
  //   // compile name, course, grade into
  //   // an object called newStudent
  //   // fetch with post method
  //   fetch('/api/grades', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newStudent)
  //   })
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(jsonData => {
  //       // create new student object
  //       // with name, course, grade
  //       // add id prop to new student object
  //       // deep copy state.grades
  //       // add new student object to copied state.grades
  //       // setState of grades to copied grades
  //     });
  // }

  render() {
    return (
      <>
        <Header grades={ this.state.grades } />
        <div className="parent-container d-flex">
          <GradeTable grades={ this.state.grades } />
          {/* <GradeForm
            onSubmit={ this.addGrade }
            grades={ this.state.grades }
            // name= { this.state.name }
            // course = { this.state.course }
            // grade = { this.state.grade }
          /> */}
        </div>
      </>
    );
  }
}

export default App;
