import React, { useState, useEffect } from "react";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("allData")) || [];
    setAllData(data);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      website,
      imageLink,
      gender,
      skills,
    };

    const allDataCopy = [...allData, data];
    localStorage.setItem("allData", JSON.stringify(allDataCopy));
    setAllData(allDataCopy);
    window.location.reload();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Website:", website);
    console.log("Image Link:", imageLink);
    console.log("Gender:", gender);
    console.log("Skills:", skills);
  };
  const handleClear = () => {
    setName("");
    setEmail("");
    setWebsite("");
    setImageLink("");
    setGender("");
    setSkills([]);
    setAllData([]);
    const data = {
      name,
      email,
      website,
      imageLink,
      gender,
      skills,
    };

    const allDataCopy = [...allData, data];
    localStorage.removeItem("allData", JSON.stringify(allDataCopy));
    // setAllData("")
    // window.location.reload()
  };
  return (
    
    <div className="row justify-content-evenly">
      <div className="col-md-5">
        <div className="row">
          <div className="col-md-8">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="student-name" className="col-form-label">
                        Name
                      </label>
                      <input type="text" className="form-control f-bold" id="student-name"
                        name="name" value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"/>
                    </div>
                    <div>
                      <label htmlFor="student-email" className="col-form-label">
                        Email
                      </label>
                      <input type="text" className="form-control f-bold"
                        id="student-email" name="student-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"/>
                    </div>
                    <div>
                      <label htmlFor="student-website" className="col-form-label">
                        Website
                      </label>
                      <input type="text" className="form-control f-bold"
                        id="student-website" name="student-website"
                        value={website} onChange={(e) => setWebsite(e.target.value)}
                        placeholder="Enter your website"/>
                    </div>
                    <div>
                      <label htmlFor="student-image" className="col-form-label">
                        Image link
                      </label>
                      <input type="text" className="form-control f-bold" id="student-image"
                        name="imagelink" value={imageLink}
                        onChange={(e) => setImageLink(e.target.value)}
                        placeholder="Image Url" />
                    </div>
                    <div>
                      <label htmlFor="student-gender" className="col-form-label">
                        Gender
                      </label>
                      <select className="form-select" value={gender}
                        onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="student-skills"
                        className="col-form-label me-3">
                        Skills:
                      </label>
                      <input type="checkbox" value="reactjs" checked={skills.includes("reactjs")}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSkills([...skills, "reactjs"]);
                          } else {
                            setSkills(
                              skills.filter((skill) => skill !== "reactjs")
                            );
                          }
                        }} />{" "} ReactJs
                    <input type="checkbox" value="nodejs" checked={skills.includes("nodejs")}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSkills([...skills, "nodejs"]);
                          } else {
                            setSkills(
                              skills.filter((skill) => skill !== "nodejs")
                            );
                          }
                        }} />{" "} NodeJs

                    <input type="checkbox" value="java" checked={skills.includes("java")}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSkills([...skills, "java"]);
                          } else {
                            setSkills(
                              skills.filter((skill) => skill !== "java")
                            );
                          }
                        }} />{" "} JAVA
                      <input type="checkbox" value="python" checked={skills.includes("python")}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSkills([...skills, "python"]);
                          } else {
                            setSkills(
                              skills.filter((skill) => skill !== "python")
                            );
                          }
                        }} />{" "} Python
                    </div>

                    <div className="modal-footer">
                      <button type="submit" className="btn btn-primary mb-3">
                        Enroll student
                      </button>
                      <button
                        type="reset" onClick={handleClear}
                        className="btn btn-danger mb-3">
                        Clear{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
      <div className="col-md-5 ">
        <div className="Enroll"><h3><u>Enrolled Students</u></h3></div>
        {allData.map((student, i) => (
          <div className="row border mb-3 shadow-sm border-info rounded p-2 "key={i}>
            <div className="col-md-8 ">
              <div>
                <span className="desc-title h6">Description</span>
              </div>
              <h6>{student.name}</h6>
              <h6>{student.gender}</h6>
              <h6>{student.email}</h6>
              <h6>{student.website}</h6>
              <h6>{student.skills}</h6>
            </div>
            <div className="col-md-3 mb-2">
              <div>
                <span className="image-title mb-2">Image</span>
              </div>
              <img src={student.imageLink} alt="" width="120px" className="img-fluid"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentForm;
