/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const Select = ({values, onChange, name})=>{
    return(
        <div>
            <select key={name} name={name} onChange={onChange}>
                {
                    values.map(value=>(
                        <option value={value} key={value}> {value} </option>
                    ))
                }
            </select>
        </div>
    )
}

export default Select;