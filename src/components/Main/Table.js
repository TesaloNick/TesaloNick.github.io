import React from "react";

const Table = (props) => {
    return (
        <div>
            <table class='table'>
                <th>
                    <td>№</td>
                    <td>Команда</td>
                    <td>Игры</td>
                    <td>Очки</td>
                </th>
                {props.tableSpain.map(item => (
                    <tr>
                        <td>{item.ranking}</td>
                        <td>{item.team}</td>
                        <td>{item.games}</td>
                        <td>{item.points}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
export default Table