import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import Link from 'next/link';

export default function start() {
	return (
		<div>
			<h1>Introduction</h1>

			<Parallax pages={5} style={{top: '0', left: '0'}}>
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
					speed={2.5}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'white',
					}}
				>
					<h2>2. Create your own lyrics</h2>
				</ParallaxLayer>

				<ParallaxLayer offset={2} speed={2} style={{backgroundColor: '#232323'}} />

				<ParallaxLayer
					offset={2}
					speed={2.5}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'white',
					}}
				>
					<h2>3. Try to sing/rap your lyrics with the beat</h2>
				</ParallaxLayer>

				<ParallaxLayer offset={3} speed={2} style={{backgroundColor: '#232323'}} />

				<ParallaxLayer
					offset={3}
					speed={2.5}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'white',
					}}
				>
					<h2>4. All right, show your skills and record it</h2>
				</ParallaxLayer>

				<ParallaxLayer
					offset={4}
					speed={2.5}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<h2>5. Download and send your own mp3 to someone or collect it</h2>
					<div>
						<button>
							<Link href="/">START </Link>
						</button>
					</div>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}
