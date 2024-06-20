import Link from "next/link";
import { useState } from "react";
import { searchIcon } from "./Icons";

interface HeaderProps {
	onClick: (textSeach: string) => void;
}

export default function Header(props: HeaderProps) {

	const [textSeach, setTextSeach] = useState<string>('');

	return (
		<header className={`
			flex justify-around items-center
			bg-gray-600 p-5 shadow-2xl
		`}>
			<div className={`
				font-bold text-3xl
				text-white
			`}>
				<Link href="/"
				onClick={e => props.onClick("")}>
					<span className="text-purple-500">EMOJI</span>PEDIA
				</Link>
			</div>
			<div className="flex">
				<input className={`
					rounded-l-lg outline-none
					bg-gray-100 p-1 focus:bg-white
					text-sm w-52
				`}
				type="text"
				placeholder="Search for emojis..."
				onChange={e => setTextSeach(e.target.value)}
				onKeyDown={e => e.key === "Enter" ? props.onClick(textSeach) : null}/>
				<button className={`
					bg-gray-500 rounded-r-md
					p-1 text-white hover:bg-gray-400
				`}
				onClick={e => props.onClick(textSeach)}>{searchIcon}</button>
			</div>
		</header>
	)
}