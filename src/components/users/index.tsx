import Link from "next/link";

const User = (props: { user: [{}] }) => {

    let users = props.user;

    console.log(users)
    return (
        <>
            {users.map((user: any) => {
                return (
                    <>
                        <Link href={`/users/${user.id}`} key={user.id}>
                            <div  >
                                <h1>
                                    {user.name} -------- {user.email}
                                </h1>


                            </div>
                        </Link>

                        <hr />
                    </>
                )
            })}
        </>
    )
}

export default User;
