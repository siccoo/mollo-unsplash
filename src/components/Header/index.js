import React, { useState } from "react"
import { setSearchUrlFriendly, onlyAlphanumericAndSpace } from "../../components/Utils"
import {
  HeaderContainer,
  HeaderSearchForm,
  HeaderSearchInput,
} from "./style"

const Header = () => {
  const INITIAL_STATE = {
    query: "",
  }

  const [state, setState] = useState(INITIAL_STATE)

  const onChangeInput = (e) => {
    const query = onlyAlphanumericAndSpace(e.target.value)
    setState({ query })
  }

  const onSubmitSearchForm = (e) => {
    e.preventDefault()
    const { query } = state
    window.location.href = `/search/photos/${setSearchUrlFriendly(query)}`
  }

  return (
    <HeaderContainer className="shadowed">
      <HeaderSearchForm 
      onSubmit={onSubmitSearchForm}
      >
        <HeaderSearchInput type="text" placeholder="Search photos..." 
        onChange={onChangeInput} 
        value={state.query} 
        />
      </HeaderSearchForm>
    </HeaderContainer>
  )
}

export default Header
