import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ['pink', 'purple', 'slategrey', 'rosybrown', 'lightseagreen'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.value) // useSelector
    const dispatch = useDispatch()
    const onChangeHandler = (value: string) => {
        dispatch(changeThemeC(value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperRadio onChangeOption={onChangeHandler}
                        type={"radio"}
                        name={"THEME"}
                        options={themes}
                        value={themes}
            />
            <hr/>
        </div>
    );
}

export default HW12;
