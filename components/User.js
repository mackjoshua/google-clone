import { useSession, signIn, signOut } from "next-auth/react"


export default function User() {
    const { data: session } = useSession();

    if(session) {
        return (
            <>
                <img src={session.user.image
                }/>
            </>
        )
    } else {
        return (
            <>
                <button onClick={signIn}>Sign in</button>
            </>
        )
    }
}
