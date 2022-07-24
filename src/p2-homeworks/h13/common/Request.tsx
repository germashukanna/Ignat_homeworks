import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {ChangeEvent, useState} from "react";
import {RequestsAPI} from "./API";
import s from './request.module.css'

export const Request = () => {

    const [success, setSuccess] = useState<string>('')
    const [check, setCheck] = useState<boolean>(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setCheck (e.currentTarget.checked)

    const onclickHandler = () => {
        RequestsAPI.postRequest(check)
            .then((res) => {
                console.log({...res})
                console.log(res.data.info)
                setSuccess(res.data.errorText)
            })
            .catch(Error => {
                console.log({...Error})
                console.warn(Error.response.data.info)
                setSuccess(Error.response.data.errorText)
            })
    }
        return (
        <div>
            <SuperButton className={s.btn} onClick={onclickHandler}>+</SuperButton>
            <SuperCheckbox className={s.checkbox} checked={check} onChange={onChangeHandler}
            />
            <div>{success}</div>
        </div>
    )

}