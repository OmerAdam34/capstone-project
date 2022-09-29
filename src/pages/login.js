import {useSession, signIn, signOut} from 'next-auth/react';

export default function Login() {
	const {data: session} = useSession();
	console.log(session);

	if (session) {
		return (
			<>
				<p>Welcome, {session.user.name}</p>
				Signed in as {session.user.email} <br />
				<button onClick={() => signOut()}>Sign out</button>
			</>
		);
	}
	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn('github')}>Sign in</button>
		</>
	);
}
