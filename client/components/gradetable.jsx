import React from 'react';

function Grade(props) {
  return (
    <>
      <td>{ props.name }</td>
      <td>{ props.course }</td>
      <td>{ props.grade }</td>
    </>
  );
}

class GradeTable extends React.Component {
  render() {
    const grades = this.props.grades;
    if (grades.length === 0) {
      return (
        <tr>
          <td>No Student Grades Recorded</td>
        </tr>

      );
    } else {
      return (
        <>
          {
            grades.map(individual => {
              return (
                <tr key={individual.id}>
                  <Grade
                    name={individual.name}
                    course={individual.course}
                    grade={individual.grade}
                  />
                </tr>
              );
            })
          }
        </>
      );
    }
  }
}

export default GradeTable;
