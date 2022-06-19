const LOADING = "LOADING"

export type loadingAT = ReturnType<typeof loadingAC>

type ActionsType = loadingAT

const initState = {
    isLoading: false
}
type initStateType = typeof initState

export const loadingReducer = (state: initStateType = initState, action: ActionsType): initStateType => { // fix any
    switch (action.type) {
        case LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => ({type: LOADING, isLoading} as const) // fix any