import { useRouter } from "next/router";

const User = () => {
    let router = useRouter();

console.log(router.query)
    return (
        <>
            <h1>This is user {router.query.userId}</h1>
        </>
    )
}

export default User;
