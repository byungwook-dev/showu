import React, { useState } from "react";
import S from "./styleWrite";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Write = () => {
  const navigate = useNavigate();
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleInputChange = () => {
    const title = document.getElementById("name").value.trim();
    const category = document.querySelector("select").value;
    setIsButtonActive(title && category !== "choose");
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      alert("파일 크기는 5MB 이하로 업로드해주세요.");
      e.target.value = "";
    }
  };

  const handleBack = () => {
    const userCheck = window.confirm(
      "커뮤니티 홈 화면으로 이동합니다. 이동하시겠습니까?"
    );
    if (userCheck) {
      navigate("/community");
    }
  };


//  const handleSubmit = async () => {
//   const token = localStorage.getItem("jwtToken");

//   if (!token) {
//     alert("로그인이 필요합니다.");
//     navigate("/login");
//     return;
//   }

//   const complete = window.confirm("임시저장 하시겠습니까?");
//   if (complete) {
//     const title = document.getElementById("name").value.trim();
//     const category = document.querySelector("select").value;
//     const content = document.getElementById("content").value.trim();

//     if (!title || category === "choose" || !content) {
//       alert("모든 필드를 입력해주세요.");
//       return;
//     }

//     const postData = { title, category, content };

//     try {
//       const response = await fetch("http://localhost:8000/community/save", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(postData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         alert("임시 저장되었습니다.");
//         navigate(`/community/write/history/edit/${data.post._id}`); // 저장된 ID로 이동
//       } else {
//         const errorData = await response.json();
//         alert(errorData.message || "임시 저장 중 오류가 발생했습니다.");
//       }
//     } catch (error) {
//       console.error("서버 오류:", error);
//       alert("서버 오류");
//     }
//   }
// };

const handleSubmit = async () => {
  const token = localStorage.getItem("jwtToken");

  if (!token) {
    alert("로그인이 필요합니다.");
    navigate("/login");
    return;
  }

  const complete = window.confirm("작성을 완료하시겠습니까?");
  if (complete) {
    const title = document.getElementById("name").value.trim();
    const category = document.querySelector("select").value;
    const content = document.getElementById("content").value.trim();

    if (!title || category === "choose" || !content) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    const postData = { title, category, content };

    try {
      const response = await fetch("http://localhost:8000/community/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        alert("작성이 완료되었습니다.");
        navigate("/community"); // 커뮤니티 메인 페이지로 이동
      } else {
        const errorData = await response.json();
        alert(errorData.message || "글 작성 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("서버 오류:", error);
      alert("서버 오류");
    }
  }
};



  

  const handleEdit = () => {
    const complete = window.confirm("수정/삭제 페이지로 이동하시겠습니까?");
    if (complete) {
      navigate("/community/write/history/edit");
    }
  };

  return (
    <S.Wrapper>
      <S.TopTitle>커뮤니티</S.TopTitle>

      <S.IconWrapper>
        <FontAwesomeIcon icon={faChevronDown} className="icon" />
      </S.IconWrapper>

      <S.SubWrapper>
        <S.Titles>
          <S.ButtonsAll>
            <button onClick={handleEdit}>수정/삭제하기</button>
          </S.ButtonsAll>
        </S.Titles>

        <S.box>글쓰기</S.box>
        <S.border>
          <S.Input>
            <div>
              <label>제목</label>
              <input type="text" id="name" placeholder="제목을 입력하세요" />
            </div>
            <div>
              <label>카테고리</label>
              <S.ReasonSelect>
                <select onChange={handleInputChange}>
                  <option value="choose">카테고리를 선택하세요</option>
                  <option value="전체">전체</option>
                  <option value="공연">공연</option>
                  <option value="뮤지컬">뮤지컬</option>
                  <option value="영화">영화</option>
                  <option value="연극">연극</option>
                  <option value="밴드">밴드</option>
                </select>
              </S.ReasonSelect>
            </div>
            <div>
              <label>내용</label>
              <textarea
                className="textArea"
                type="text"
                id="content"
                placeholder="내용을 입력하세요"
              />
            </div>

            <div>
              <label>첨부 파일</label>
              <S.FileInput
                id="file"
                type="file"
                placeholder="찾아보기"
                onChange={handleFile}
                accept="image/*"
              />
              <p>첨부 파일은 최대 5MB까지 등록할 수 있습니다.</p>
            </div>
          </S.Input>

          <S.buttonWrapper>
            <button onClick={handleBack}>이전 화면으로</button>
            <button
              disabled={!isButtonActive}
              onClick={handleSubmit}
              className={isButtonActive ? "activeButton" : "inactiveButton"}
            >
              작성하기
            </button>
          </S.buttonWrapper>
        </S.border>
      </S.SubWrapper>
    </S.Wrapper>
  );
};

export default Write;
