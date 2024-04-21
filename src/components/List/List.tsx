import React, { FC } from 'react'

type TProps = {
    items?: Array<string>
}
const List: FC<TProps> = ({ items }) => {
    // const { items = [] } = props
    // if (!items.length) {
    //     return null
    // }
    return (
        <ul className='list'>
            {items && items.map((el) => {
                return <li key={el}>{el}</li>
            })}
        </ul>
    )
}

export default List