import React from 'react'

export const DetailRowView = ({person}) => {
    return (
        <div>
            <p>Выбранный пользователь {person.firstName + ' ' + person.lastName}</p>
            <p>
                Описание: <br />
                <textarea defaultValue={person.description} />
            </p>
            <p>Адрес проживания: <b>{person.address.streetAddress}</b></p>
            <p>Город: <b>{person.address.city}</b></p>
            <p>Провинция: <b>{person.address.state}</b></p>
            <p>Индекс: <b>{person.address.zip}</b></p>
        </div>
    )
}