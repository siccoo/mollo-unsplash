import styled from "styled-components"

export const HeaderContainer = styled.div`
  background: #DDE2E8;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 250px;
  border-bottom: 1px solid #eee;
  position: fixed;
  width: 100%;
  z-index: 1;
`

export const HeaderLogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
`

export const HeaderSearchForm = styled.form`
  display: flex;
  flex-grow: 1;
`

export const HeaderSearchInput = styled.input`
  width: 70%;
  border: 1px solid #eee;
  border-radius: 4px;
  transition: 0.35s;
  height: 50px;
  justify-content: center;
  align-items: center;
  background: #FFF url("/assets/img/search.svg") left no-repeat;
  background-size: 15px;
  background-position-x: 12px;
  padding-left: 40px;
  margin: auto;
  :hover {
    border: 1px solid #ccc;
  }
  :focus {
    border: 1px solid #ccc;
    background-color: #fff;
  }
  ::placeholder {
    color: #999;
  }
`

export const HeaderNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  font-size: 1.1em;
`

export const HeaderUserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 120px;
`

export const HeaderAvatar = styled.img`
  border-radius: 16px;
  :hover {
    cursor: pointer;
  }
`
