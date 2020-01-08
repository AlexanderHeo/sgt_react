import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const parsedIntGrade = parseInt(this.state.grade);
    const newStudent = {
      name: this.state.name,
      course: this.state.course,
      grade: parsedIntGrade
    };
    this.props.onSubmit(newStudent);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  handleReset() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <div className="container col-3">
        <form action="" onSubmit={ this.handleSubmit } onReset={ this.handleReset }>
          <div className="form-group d-flex align-items-center">
            <label>
              <i className="fas fa-user"></i>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={ this.state.name }
              onChange={ this.handleChange }
            />
          </div>
          <div className="form-group d-flex align-items-center">
            <i className="fas fa-book"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Course"
              name="course"
              value={ this.state.course }
              onChange={ this.handleChange }
            />
          </div>
          <div className="form-group d-flex align-items-center">
            <i className="fas fa-graduation-cap"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Grade"
              name="grade"
              value={ this.state.grade }
              onChange={ this.handleChange }
            />
          </div>
          <input type='submit' value='Add' />
          <input type='reset' value='Cancel' />
        </form>
      </div>
    );
  }
}

export default GradeForm;
