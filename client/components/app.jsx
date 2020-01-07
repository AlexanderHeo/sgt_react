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

  render() {
    return (
      <>
        <Header />
        <table className="table">

          <thead>
            <tr>
              <th scope="col">Student Name</th>
              <th scope="col">Course</th>
              <th scope="col">Grade</th>
            </tr>
          </thead>
          <tbody>
            <GradeTable grades={this.state.grades} />
          </tbody>
        </table>
      </>
    );
  }
}

export default App;
