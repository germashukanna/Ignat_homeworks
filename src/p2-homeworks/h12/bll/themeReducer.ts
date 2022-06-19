const THEME = "THEME"

export type themeAT = ReturnType<typeof changeThemeC>

type ActionsType = themeAT

const initState = {
value: "string"
};

type initStateType = typeof initState

export const themeReducer = (state: initStateType = initState, action: ActionsType): initStateType => { // fix any
    switch (action.type) {
        case THEME: {
            return {
                ...state,
                value: action.value
            }
        }
        default: return state;
    }
};

export const changeThemeC = (value: string) => ({type: THEME, value} as const); // fix any