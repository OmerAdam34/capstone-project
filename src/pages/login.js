import {useSession, signIn, signOut} from 'next-auth/react';

const isPreview = process.env.VERCEL_ENV === 'preview';

export default function Login() {
	const {data: session} = useSession();

	if (session) {
		return (
			<div>
				<p>WELCOME, {session.user.name}</p>
				SIGNED IN AS {session.user.email} <br />
				<button onClick={() => signOut()}>Sign out</button>
			</div>
		);
	}
	return (
		<div>
			<div>
				<h2>WELCOME</h2>
				<h4> </h4>
				<h6>LOGIN</h6>
			</div>
			<button
				onClick={() => {
					signIn(isPreview ? 'credentials' : 'github');
				}}
			>
				Sign in
			</button>
		</div>
	);
}
