import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        modalEditProduct: false,
        modalDeleteProduct: false,
        modalDeleteQuestion:false,
        modalDeleteAnswer:false
    },
    reducers: {
        setModalEditProduct: (state) => {
            state.modalEditProduct = !state.modalEditProduct
        },
        setModalDeleteProduct: (state) => {
            state.modalDeleteProduct = !state.modalDeleteProduct
        },
        setModalDeleteAnswer: (state) => {
            state.modalDeleteAnswer = !state.modalDeleteAnswer
        },
        setModalDeleteQuestion: (state) => {
            state.modalDeleteQuestion = !state.modalDeleteQuestion
        }
    },

})

export const { setModalEditProduct, setModalDeleteProduct, setModalDeleteAnswer, setModalDeleteQuestion } = modalSlice.actions

export default modalSlice.reducer