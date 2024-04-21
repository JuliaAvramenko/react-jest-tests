import React, { FC } from 'react'

import classes from './Search.module.css'
import cn from 'classnames'

type TSearchProps = {
    value: string
    placeholder?: string
    onChange: ((e: any) => void)
    children?: string

}
const Search: FC<TSearchProps> = ({ value, onChange, placeholder = 'search...', children = "search" }) => {

    const inputClass = cn({
        [classes.input]: true,
        [classes.filled]: value.length,
    }

    )
    return (
        <label className={classes.label}>
            {children}
            <input
                className={inputClass}
                type='text'
                value={value}
                onChange={onChange}
                placeholder={placeholder}

            />
        </label>
    )
}

export default Search