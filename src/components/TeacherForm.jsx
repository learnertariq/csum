import React from "react";
import teacherService from "../service/teacherService";
import Form from "./common/Form";

export default class TeacherForm extends Form {
  state = {
    data: { name: "", position: "", phone: "", order: "" },
    loading: false,
    error: {},
    apiError: { hasError: false, msg: "" },
    success: false,
  };

  componentDidMount = async () => {
    const path = this.props.match.params.id;
    if (path === "new") return null;

    try {
      const { data } = await teacherService.getTeacher(path);
      this.setState({ data: this.mapToViewModel(data.data) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  };

  mapToViewModel = (teacher) => {
    return {
      _id: teacher._id,
      name: teacher.name,
      position: teacher.position,
      phone: teacher.phone,
      order: teacher.order,
    };
  };

  doSubmit = async () => {
    let loading = true;
    let apiError = { ...this.state.apiError, hasError: false };
    let success = false;
    this.setState({ loading, apiError, success });

    try {
      const { data } = await teacherService.saveTeacher(this.state.data);

      console.log(data);

      loading = false;
      apiError = { ...this.state.apiError, hasError: false };
      success = true;
      this.setState({ loading, apiError, success });

      this.props.history.push("/teachers");
    } catch (ex) {
      if (ex.response) {
        console.log(ex.response.data);
        apiError = {
          ...this.state.apiError,
          hasError: true,
          msg: ex.response.data.msg,
        };
      }
      loading = false;
      success = false;
      this.setState({ loading, apiError, success });
    }
  };

  render() {
    return (
      <section className="teacher-form-section">
        <form className="teacher-form" onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("position", "Position")}
          {this.renderInput("phone", "Phone")}
          {this.renderInput("order", "Order")}

          {this.state.loading && <p className="msg">loading.....</p>}
          {this.state.apiError.hasError && (
            <p className="error msg">{this.state.apiError.msg}</p>
          )}
          {this.state.success && (
            <p className="success msg">"Successfully Updated"</p>
          )}

          {this.renderButton("Submit")}
        </form>
      </section>
    );
  }
}
