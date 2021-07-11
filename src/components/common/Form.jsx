import React, { Component } from "react";
import Input from "./Input";
import Select from "./Select";

export default class Form extends Component {
  state = { data: {}, error: {} };

  handleChange = ({ target }) => {
    const data = { ...this.state.data };

    if (target.type === "file") {
      data[target.name] = target.files[0];
    } else {
      data[target.name] = target.value;
    }

    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.doSubmit();
  };

  renderInput = (name, label, type = "text") => {
    return (
      <Input
        error={this.state.error[name]}
        label={label}
        name={name}
        type={type}
        onChange={this.handleChange}
        value={this.state.data[name]}
      />
    );
  };

  renderSelect = (name, label, options) => {
    return (
      <Select
        error={this.state.error[name]}
        name={name}
        label={label}
        options={options}
        onChange={this.handleChange}
        value={this.state.data[name]}
      />
    );
  };

  renderButton = (label) => {
    return <button type="submit">{label}</button>;
  };
}
