function _401k ({offer1, offer2}) {
    const hilight = (num1, num2) => {
        if(num1 > num2) {
            return {color: "green", fontWeight: "bold" }
        } else {return {}}
    }

    return (
        <div>
            <table>
                <thead>
                    <th>Provision</th>
                    <th>{ offer1.companyName }</th>
                    <th>{ offer2.companyName }</th>
                </thead>
                <tbody>
                <tr>
                    <td>Company Match</td>
                    <td style= {hilight(offer1.K401.companyMatch, offer2.K401.companyMatch)}>
                        { offer1.K401.companyMatch }
                    </td>
                    <td style= {hilight(offer2.K401.companyMatch, offer1.K401.companyMatch)}>
                        { offer2.K401.companyMatch }
                    </td>
                </tr>
                <tr>
                    <td>Non-elective Contribution</td>
                    <td style= {hilight(offer1.K401.nonElective, offer2.K401.nonElective)}>
                        { offer1.K401.nonElective }
                    </td>
                    <td style= {hilight(offer2.K401.nonElective, offer1.K401.nonElective)}>
                        { offer2.K401.nonElective }
                    </td>
                </tr>
                <tr>
                    <td>Vesting Period</td>
                    <td style={hilight(offer1.K401.vesting, offer2.K401.vesting)}> {offer1.K401.vesting} </td>
                    <td style={hilight(offer2.K401.vesting, offer1.K401.vesting)}> {offer2.K401.vesting} </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default _401k;