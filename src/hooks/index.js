import React, { createContext, useContext, useReducer } from 'react'
import { THEME_STORAGE_TOKEN } from '@/utils'

const GlobalStateContext = createContext({})

const GlobalDispatchContext = createContext({})

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        currentTheme: action.payload,
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme: localStorage.getItem(THEME_STORAGE_TOKEN) || 'dark',
  })

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

export const useGlobalState = () => useContext(GlobalStateContext)

export const useGlobalDispatch = () => useContext(GlobalDispatchContext)
