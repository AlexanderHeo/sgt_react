import React from 'react';

function CalculateAverage(props) {
  const grades = props.grades;
  if (grades.length === 0) {
    return '0';
  }
  let totalGrades = 0;
  grades.map(individual => {
    totalGrades += individual.grade;
  });
  const averageGrade = totalGrades / grades.length;
  return (
    <span className="badge badge-secondary">{ Math.round(averageGrade) }</span>
  );
}

class Header extends React.Component {
  render() {
    return (
      <div className="container d-block">
        <div className="row align-items-center">
          <h1 className="col-8">Student Grade Table</h1>
          <h3 className="col-">Average Grade</h3>
          <h3 className="col-">
            <CalculateAverage grades={ this.props.grades }/>
          </h3>
        </div>
      </div>
    );
  }
}

export default Header;
