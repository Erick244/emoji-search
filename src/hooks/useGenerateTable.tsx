export default function useGenerateTable() {

	function generateTable(generateList: any[]): any[] {
		const tdList = generateList.map((obj: any, i: number) => {
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

	return {
		generateTable
	}
}