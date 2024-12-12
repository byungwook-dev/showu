// 커뮤니티 글쓰기 페이지

import React from 'react';
import S from './styleWrite';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';




const Write = () => {
  
  const navigate = useNavigate();
  
  const handleFile = () => {
      alert("파일 크기는 5MB 이하로 업로드해주세요.");
  };

  const handleBack = () => {
    const userCheck =window.confirm("커뮤니티 홈 화면으로 이동합니다. 이동하시겠습니까?");
    if (userCheck) {
      navigate('/community');
    }
  };
  
  const handleSubmit = () => {
    const complete =window.confirm("작성을 완료하시겠습니까?");
      if(complete){
        alert("작성이 완료되었습니다.")
        navigate('/community/writing/history');
      }
  };

  return (   
    <S.Wrapper>
      <S.TopTitle>커뮤니티</S.TopTitle>
      
      <S.IconWrapper>
        <FontAwesomeIcon icon={faChevronDown} className='icon' />
      </S.IconWrapper>

      <S.SubWrapper>  

      <S.Titles>
        <S.ButtonsAll>
        <button>내역 확인하기</button>
        <button>수정/삭제하기</button>
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
                    <select>
                        <option value="choose">카테고리를 선택하세요</option>
                        <option value="all">전체</option>
                        <option value="show">공연</option>
                        <option value="musical">뮤지컬</option>
                        <option value="movie">영화</option>
                        <option value="theater">연극</option>
                        <option value="band">밴드</option>
                      </select>
            </S.ReasonSelect>
          </div>
          <div>
            <label>내용</label>
            <textarea className='textArea' type="text" id="content" placeholder="내용을 입력하세요" />
          </div>

          <div>
          <label>첨부 파일</label>
            <S.FileInput  type='file' placeholder='찾아보기' onChange={handleFile}></S.FileInput>
            <p>첨부 파일은 최대 5M까지 등록할 수 있습니다.</p>
          </div>
        </S.Input>

        
        <S.buttonWrapper>
        {/* <NavLink to="/community/newsMain"> */}
          <button onClick={handleBack}>이전 화면으로</button>
        {/* </NavLink>  */}
          <button onClick={handleSubmit}>작성하기</button>
        </S.buttonWrapper>
        </S.border>
      </S.SubWrapper>
    </S.Wrapper>
  );
};


export default Write;