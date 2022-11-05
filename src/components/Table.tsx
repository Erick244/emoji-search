interface TableProps {
	emojis: string[];
}

export default function Table(props: TableProps) {

	function generateTable() {
		const tdList = props.emojis.map((obj: any, i: number) => {
			return (
				<tr key={i} className={`border-b border-black`}>
					<td>{obj.title}</td>
					<td className={`
						text-center text-3xl
						border-l border-black
						p-2 
					`}>{obj.symbol}</td>
				</tr>
			)
		})

		return tdList;
	}

	return (
		<table className="w-2/4 my-10">
			<thead className="static top-0">
				<tr className={`
					border-b-2 border-gray-500
					text-left text-2xl
				`}>
					<th className="p-2">Title</th>
					<th className="p-2 text-center">Symbol</th>
				</tr>
			</thead>
			<tbody>
				{generateTable()}
			</tbody>
		</table>
	)
}