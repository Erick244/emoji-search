import useGenerateTable from "../hooks/useGenerateTable";

interface TableProps {
	emojis: string[];
}

export default function Table(props: TableProps) {

	const { generateTable } = useGenerateTable();

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
				{generateTable(props.emojis)}
			</tbody>
		</table>
	)
}