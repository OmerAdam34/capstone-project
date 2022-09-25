import Link from 'next/link';

export default function start() {
	return (
		<div>
			<h1>Introduction</h1>
			<p>1. Choose a beat </p>
			<p>2. Create your own lyrics</p>
			<p>3. Try to sing/rap your lyrics with the beat</p>
			<p>4. All right, show your skills and record it</p>
			<p>5. Download and send your own mp3 to someone or collect it</p>
			<button>
				<Link href="/">START </Link>
			</button>
		</div>
	);
}
