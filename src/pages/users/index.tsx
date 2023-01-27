import User from "@/components/users";

const UserList = (props: { users: [{}] }) => {
    let users: [{}] = props.users;
    return (
        <>
            <User user={users} />
        </>
    )
}

export default UserList;



export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    return {
        props: {
            users: data,
        }
    }
}