interface MainProps {
	children: any;
}

export default function Main(props: MainProps) {
	return (
		<main className={`
			bg-white w-11/12 m-auto
			flex justify-center rounded-b-lg
			shadow-lg
		`}>
			{props.children}
		</main>
	)
}