import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td>{ props.name }</td>
      <td>{ props.course }</td>
      <td>{ props.grade }</td>
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
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Student Name</th>
              <th scope="col">Course</th>
              <th scope="col">Grade</th>
            </tr>
          </thead>
          <tbody>
            {
              grades.map(individual => {
                return (
                  <Grade
                    key={individual.id}
                    name={individual.name}
                    course={individual.course}
                    grade={individual.grade}
                  />
                );
              })
            }
          </tbody>
        </table>
      );
    }
  }
}

export default GradeTable;
