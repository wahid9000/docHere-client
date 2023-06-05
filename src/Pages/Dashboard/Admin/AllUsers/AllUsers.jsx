import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            return res.json()
        }
    })

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: 'Success!',
                        text: 'User is Now An Admin',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    })
                }
            })
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This User will be deleted permanently",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'User Has Been Deleted Successfully.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            <h2 className="text-3xl font-bold mb-5"> All Users: {users.length}</h2>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user =>
                                    <tr key={user._id}>
                                        <td>1</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user._id)} className="btn">Make Admin</button>}</td>
                                        <td><button onClick={() => handleDelete(user._id)} className="btn">Delete User</button></td>
                                    </tr>)
                            }

                            <tr>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;