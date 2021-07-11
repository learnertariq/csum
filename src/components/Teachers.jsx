import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import teacherService from "../service/teacherService";
import userService from "../service/userService";
import yearService from "../service/yearService";
import Table from "./common/Table";

const Teachers = () => {
  const user = userService.getUser();
  const [teachers, setTeachers] = useState([]);
  const [educationYear, setEducationYear] = useState("2020-21");

  const columns = [
    { path: "name", label: "Name" },
    { path: "position", label: "Position" },
    { path: "phone", label: "Phone" },
  ];

  useMemo(() => {
    if (user && user.isAdmin) {
      columns.unshift({ path: "order", label: "Order" });
      columns.push(
        {
          key: "edit",
          content: (teacher) => (
            <Link to={`/teachers/${teacher._id}`}>Edit</Link>
          ),
        },
        {
          key: "delete",
          content: (teacher) => (
            <button onClick={() => handleDelete(teacher._id)}>Delete</button>
          ),
        }
      );
    }
  });

  useEffect(async () => {
    try {
      const { data: teachers } = await teacherService.getTeachers();
      const { data: years } = await yearService.getYears();
      populateYear(years.data);
      setTeachers(teachers.data);
    } catch (ex) {
      if (ex.response) console.log(ex.response.data);
    }
  }, []);

  const populateYear = (years) => {
    const year = years.find((year) => year.name === "teachers");
    setEducationYear(year.year);
  };

  const handleDelete = async (id) => {
    let newTeachers = [...teachers];
    newTeachers = newTeachers.filter((teacher) => teacher._id !== id);
    setTeachers(newTeachers);

    try {
      await teacherService.deleteTeacher(id);
    } catch (ex) {
      if (ex.response) console.log(ex.response.data);
    }
  };

  const sort = () => {
    return teachers.sort((a, b) => a.order - b.order);
  };

  return (
    <section className="teachers-info-section">
      <div className="teachers-info">
        <h2 className="teachers-info_heading">
          Jamiar Asatijaye Kiramer Naam, Podobi ebong phone number ({" "}
          {educationYear}{" "}
          {user && user.isAdmin && (
            <Link to="/editYear">
              <button>Edit</button>
            </Link>
          )}{" "}
          shikkha borsher )
        </h2>
        <Table columns={columns} data={sort(teachers)} />

        <Link to="/teachers/new">Add new Teacher</Link>
      </div>
    </section>
  );
};

export default Teachers;
