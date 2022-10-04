import {Parallax, ParallaxLayer} from '@react-spring/parallax';
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

			<Parallax pages={2} style={{top: '0', left: '0'}}>
				<ParallaxLayer
					offset={0}
					speed={2.5}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<h2>1. Choose a beat</h2>
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={2} style={{backgroundColor: '#232323'}} />

				<ParallaxLayer
					offset={1}
					speed={0.5}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'white',
					}}
				>
					<h2>2. Create your own lyrics</h2>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}
