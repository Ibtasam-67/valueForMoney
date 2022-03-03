import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "../../store/Store"

 
 


// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value
 