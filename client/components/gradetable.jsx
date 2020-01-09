import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td>{ props.name }</td>
      <td>{ props.course }</td>
      <td>{ props.grade }</td>
      <td>
        <input
          type="button"
          className="btn btn-danger"
          value="Delete"
          onClick={ () => props.delete(props.deleteId) }
        />
      </td>
    </tr>
  );
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
                      key={ individual.id }
                      name={ individual.name }
                      course={ individual.course }
                      grade={ individual.grade }
                      delete={ this.props.onSubmit }
                      deleteId={ individual.id }
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
