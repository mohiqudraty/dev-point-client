import toast from "react-hot-toast";
import useAxiosPublic from "../../../Hooks/useAxios/useAxiosPublic";
import useUsers from "../../../Api/useUsers";


const ManageUsersTable = ({user}) => {
    const axiosPublic = useAxiosPublic()
    const { refetch} = useUsers()
    // console.log(Object.keys(user).join(','));
    const {_id,name,email,role} = user || {}

const handleAdmin = () => {
    
    axiosPublic.put(`make-admin?id=${_id}`, {newRole: 'admin'})
    .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount > 0){
            toast.success("Make Admin Success!")
            refetch()
        }
    })
}

    return (
       <>
         {/* row 1 */}
      <tr>
        <th>{name}</th>
        <td>{email}</td>
        <td>{role === 'admin'? <button>Admin</button> : <button onClick={handleAdmin}>Make Admin</button>}</td>
        <td>{role}</td>
      </tr>
       </>
    );
};

export default ManageUsersTable;