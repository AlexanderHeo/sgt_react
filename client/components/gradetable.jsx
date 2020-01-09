import React from 'react';

class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteStudent: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log('event in handleSubmit gradeTable:', event);
    // const deleteStudent = {
    //   deleteStudent: event.target.id
    // };
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.course}</td>
        <td>{this.props.grade}</td>
        <td>
          <button
            type="submit"
            className="btn btn-danger"
            value="Delete"
            // onSubmit={ this.handleSubmit }
            onClick={ this.handleSubmit }
          />
        </td>
      </tr >
    );
  }

}

class GradeTable extends React.Component {
  render() {
    const grades = this.props.grades;
    if (grades.length === 0) {
      return (
        <table>
          <tbody>
            <tr>
              <td>No Student Grades Recorded</td>
            </tr>
          </tbody>
        </table>
      );
    } else {
      return (
        <div className="container col-9">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Student Name</th>
                <th scope="col">Course</th>
                <th scope="col">Grade</th>
                <th scope="col">Operations</th>
              </tr>
            </thead>
            <tbody>
              {
                grades.map(individual => {
                  return (
                    <Grade
                      key={(individual.id)}
                      name={individual.name}
                      course={individual.course}
                      grade={individual.grade}
                      delete={this.props.delete}
                    />
                  );
                })
              }
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default GradeTable;
