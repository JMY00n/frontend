import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddUser() {
  let navigate = useNavigate(); // 네비게이트 객체 생성
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // 구조 분해 할당
  const { name, username, email } = user;

  // 폼의 가입 버튼을 눌렀을 때 이벤트
  const onSubmit = async (e) => {
    e.preventDefault(); // 기본 전송 기능 중지

    // 백엔드 서버로 user 데이터 전송
    await axios.post("http://localhost:8080/user", user);

    // 바로 홈페이지로 이동(리스트에 새유저가 보임)
    navigate("/");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Sign Up</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                value={name}
                onChange={onInputChange}
                className="form-control"
                placeholder="이름 입력"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                UserName
              </label>
              <input
                required
                type="text"
                id="username"
                value={username}
                onChange={onInputChange}
                className="form-control"
                placeholder="이름 입력"
                name="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                required
                type="text"
                id="email"
                value={email}
                onChange={onInputChange}
                className="form-control"
                placeholder="이름 입력"
                name="email"
              />
            </div>
            <div className="mb-3 text-center">
              <button
                type="submit"
                className="btn btn-outline-primary px-3 mx-2"
              >
                Submit
              </button>
              <Link to="/" className="btn btn-outline-danger px-3 mx-2">
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
