import Header from "../components/Header";
import Main from "../components/Main";
import Table from "../components/Table";
import useFilterEmojis from "../hooks/useFilterEmojis";

export default function Home() {
	
	const { getTextSearch, filterEmojis } = useFilterEmojis();
	
	return (
		<div className={`
			bg-gray-100
			h-full
		`}>
			<Header onClick={getTextSearch}/>
			<Main>
				<Table emojis={filterEmojis}/>
			</Main>
		</div>
	)
}
