import {SessionProvider} from 'next-auth/react';

// import {GlobalStyle} from '../styles';

export default function App({Component, pageProps, session}) {
	return (
		<>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</>
	);
}
