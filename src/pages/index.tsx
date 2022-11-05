import { useEffect, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Table from "../components/Table";

export default function Home() {
	const [textSearch, setTextSearch] = useState<string>("");
	const [emojis, setEmojis] = useState<any[]>([]);

	async function getEmojis() {
		const resp = await fetch('http://localhost:3000/api/emojiList');
		const data = await resp.json();
		setEmojis(data);
	}

	useEffect(() => {
		getEmojis();
	}, [])

	function getTextSearch(text: string): void {
		setTextSearch(text);
	}

	let filterEmojis = [];

	if (textSearch === "") {
		filterEmojis = emojis;
	} else {
		filterEmojis = emojis.filter((emoji: any) => {
			return emoji.keywords.includes(textSearch);
		});
	}

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
