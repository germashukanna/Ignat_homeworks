import {Slider} from '@mui/material'
import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    minValue?: number
    maxValue?: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, maxValue,
        minValue

    }
) => {

    const handleChange = (event: Event, newValue: number | number[],) => {
        onChangeRange && onChangeRange(newValue as [number, number])
    }

    return (
        <>
            <Slider getAriaLabel={() => 'Minimum distance'}
                    value={value}
                    onChange={handleChange}
                    min={minValue ? minValue : 0}
                    max={maxValue ? maxValue : 100}

             />

        </>
    )
}

export default SuperDoubleRange
