import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import Link from 'next/link';
import {IoIosArrowDown} from 'react-icons/io';

export default function start() {
	return (
		<div>
			<h1>Introduction</h1>

			<Parallax pages={5} style={{top: '0', left: '0'}}>
				<ParallaxLayer
					offset={0}
					speed={0}
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<h3>1. Choose a beat</h3>
					<IoIosArrowDown style={{width: '25px', height: '25px'}} />
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={2} style={{backgroundColor: '#232323'}} />

				<ParallaxLayer
					offset={1}
					speed={0}
					style={{
						position: 'absolute',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'white',
					}}
				>
					<h3>2. Create your lyrics</h3>
					<IoIosArrowDown />
				</ParallaxLayer>

				<ParallaxLayer
					offset={2}
					speed={0.5}
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'black',
					}}
				>
					<h3>3. Try to rap with a beat</h3>
					<IoIosArrowDown />
				</ParallaxLayer>

				<ParallaxLayer offset={3} speed={2} style={{backgroundColor: '#232323'}} />

				<ParallaxLayer
					offset={3}
					speed={0}
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'white',
					}}
				>
					<h3>4. Show your skills and record it</h3>
					<IoIosArrowDown />
				</ParallaxLayer>

				<ParallaxLayer
					offset={4}
					speed={0.5}
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<h3>5. Download and send your own mp3 to someone or collect it</h3>

					<div>
						<Link href="/">START </Link>
					</div>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}
