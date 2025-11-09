function _401k ({offer1, offer2}) {
    return (
        <div>
            <table>
                <thead>
                    <th>Provision</th>
                    <th>{/* offer1.companyName */}</th>
                    <th>{/* offer2.companyName */}</th>
                </thead>
                <tbody>
                <tr>
                    <td>Company Match</td>
                    <td>{/* offer1.k401.companyMatch */}</td>
                    <td>{/* offer2.k401.companyMatch */}</td>
                </tr>
                <tr>
                    <td>Non-elective Contribution</td>
                    <td>{/* offer1.k401.nonElective */}</td>
                    <td>{/* offer2.k401.nonElective */}</td>
                </tr>
                <tr>
                    <td>Vesting Period</td>
                    <td>{/* offer1.k401.vesting */}</td>
                    <td>{/* offer2.k401.vesting */}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default _401k;