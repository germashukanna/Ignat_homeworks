import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {

    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    let value = [value1, value2]

    const onChangeRange = (value: [number, number]) => {
        setValue1(value1)
        setValue2(value2)
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div  style={{width: '400px', marginLeft: '10px'}}>
                <span>{value1}</span>
                <SuperRange onChangeRange={setValue1}
                            value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div style={{width: '230px', marginLeft: '10px', display: 'flex', justifyContent: "space-between"}}>
                <span style={{marginRight: '17px'}}>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={onChangeRange}
                    value={[value1, value2]}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span style={{marginLeft: '17px'}}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
