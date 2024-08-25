import { describe, expect, it } from 'vitest'
import { appReducer, setAppInitialized } from '@/app/appSlice'

describe('appSliceTests', () => {
  const initialState = {
    isInitialized: false,
  }

  it('should handle initial state', () => {
    const endState = appReducer(undefined, { type: 'unknown' })
    expect(endState).toEqual(initialState)
  })

  it('should handle setAppInitialized', () => {
    const endState = appReducer(initialState, setAppInitialized(true))
    expect(endState.isInitialized).toEqual(true)
  })
})
