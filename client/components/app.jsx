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
        <GradeTable grades={this.state.grades} />
      </>
    );
  }
}

export default App;
