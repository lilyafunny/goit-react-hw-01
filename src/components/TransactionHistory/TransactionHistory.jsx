import style from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {

    return (

        <table className={style.table}>

            <thead >
                <tr >
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id} className={style.table_body}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}
            </tbody>

        </table>


    );

}

export default TransactionHistory;