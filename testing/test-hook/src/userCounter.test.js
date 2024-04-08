import {act, renderHook } from '@testing-library/react'
import { useCounter } from './useCounter'


describe ("Test increment", () => {
    it("Increments count by 1", () =>{
        const {result } = renderHook(useCounter)
    
        act(() => {
            result.current.increment()
        })
        expect(result.current.count).toBe(1)
    })
})

describe ("Test decrement", () => {
    it("Decrement count by 1", () =>{
        const {result } = renderHook(useCounter)
    
        act(() => {
            result.current.decrement()
        })
        expect(result.current.count).toBe(-1)
    })
})