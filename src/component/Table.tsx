import { useQuery, useMutation } from "react-query";
import { fetchUsers, updateUser, fetchUser } from "../api";
import Bookmark from "./Bookmark";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";

const Table = () => {
  const queryClient = useQueryClient();
  let { data, error, isLoading, refetch, isError } = useQuery(
    "user",
    fetchUsers
  );

  const [userdata, setUserData] = useState([]);

  useEffect(() => {
    if (data) {
      setUserData(data);
    }
  }, [data]);

  const updateUserMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      console.log("success");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  async function fetchSingleUser(id: any) {
    const response = await fetch(`http://localhost:8001/data/${id}`);
    const user = await response.json();
    return user;
  }

  // const fetchdataById = useQuery();

  const HandleClick = (id: any, isSelected: boolean) => {
    const singleUser = data.find((ele: any) => ele.id === id);

    const newData = {
      ...singleUser,
      isSelected: !singleUser.isSelected,
    };

    updateUserMutation.mutate({ id, ...newData });
    console.log(data);
  };

  const tableData = userdata?.map((val: any) => {
    return (
      <tr key={val.id}>
        <td>{val.first_name}</td>
        <td>{val.last_name}</td>
        <td>{val.email}</td>
        <td>
          <Bookmark
            onButtonClick={HandleClick}
            id={val.id}
            isSelected={val.isSelected}
          />
        </td>
      </tr>
    );
  });

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
