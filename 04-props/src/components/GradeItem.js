import React from 'react';

const GradeItem = (props) => {
    const { name, level, gender, kor, math, eng } = props
    console.log(name)
    return (
        <tr>
            <td>{name}</td>
            <td>{level}</td>
            <td>{gender}</td>
            <td>{kor + math + eng}</td>
        </tr>
    );
};

export default GradeItem;