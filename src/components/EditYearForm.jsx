import React from "react";
import yearService from "../service/yearService";
import Form from "./common/Form";

export default class EditYearForm extends Form {
  state = {
    data: { year: "" },
    loading: false,
    error: {},
    apiError: { hasError: false, msg: "" },
    success: false,
    options: [],
  };

  componentDidMount = async () => {
    try {
      const { data } = await yearService.getYears();

      this.setState({ options: data.data });
    } catch (ex) {
      if (ex.response) console.log(ex.response.data);
    }
  };

  doSubmit = async () => {
    let loading = true;
    let apiError = { ...this.state.apiError, hasError: false };
    let success = false;
    this.setState({ loading, apiError, success });

    console.log(this.state.data);

    try {
      const stateData = { ...this.state.data };
      const { data } = await yearService.saveYear({
        year: stateData.year,
        _id: stateData.yearId,
      });

      console.log(data);

      loading = false;
      apiError = { ...this.state.apiError, hasError: false };
      success = true;
      this.setState({ loading, apiError, success });
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
          {this.renderSelect("yearId", "Subject", this.state.options)}
          {this.renderInput("year", "Year")}

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
