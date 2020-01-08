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
    this.handleAdd = this.handleAdd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleAdd(event) {
    event.preventDefault();
    // const gradesArr = this.state.grades;
    // const newId = gradesArr.length + 1;
    // const newStudent = {
    //   id: newId,
    //   name: this.state.name,
    //   course: this.state.course,
    //   grade: this.state.grade
    // };
    // this.props.onSubmit(newStudent);
    // this.setState({
    //   name: this.state.name,
    //   course: this.state.course,
    //   grade: this.state.grade
    // });
  }

  handleCancel() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <div className="container col-3">
        <form action="">
          <div className="form-group d-flex align-items-center">
            <i className="fas fa-user"></i>
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
        </form>
        <button onClick={ this.handleAdd }>Add</button>
        <button onClick={ this.handleCancel }>Cancel</button>
      </div>
    );
  }
}

export default GradeForm;
