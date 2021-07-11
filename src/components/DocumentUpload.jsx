import React from "react";
import documentService from "../service/documentService";
import Form from "./common/Form";

export default class DocumentUpload extends Form {
  state = {
    data: {
      title: "",
      pdf: "",
    },
    loading: false,
    error: {},
    apiError: { hasError: false, msg: "" },
    success: false,
  };

  doSubmit = async () => {
    let loading = true;
    let apiError = { ...this.state.apiError, hasError: false };
    let success = false;
    this.setState({ loading, apiError, success });

    const { title, pdf } = this.state.data;
    const bodyFormData = new FormData();
    bodyFormData.append("title", title);
    bodyFormData.append("pdf", pdf);

    try {
      const { data } = await documentService.saveDocument(bodyFormData);

      console.log(data);
      loading = false;
      apiError = { ...this.state.apiError, hasError: false };
      success = true;
      this.setState({ loading, apiError, success });

      // this.props.history.push("/documents");
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
    const { loading, error, success } = this.state;

    return (
      <section className="teacher-form-section">
        <form className="teacher-form" onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("pdf", "PDF", "file")}

          {loading && <p className="msg">loading.....</p>}
          {error.hasError && <p className="error msg">{error.msg}</p>}
          {success && (
            <p className="success msg">"Document successfully upladed"</p>
          )}

          {this.renderButton("Submit")}
        </form>
      </section>
    );
  }
}
