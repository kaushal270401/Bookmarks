export const fetchUsers = async () => {
  const response = await fetch("http://localhost:8001/data");
  return await response.json();
};

export const fetchUser=async(id:any)=>{
  const response = await fetch(`http://localhost:8001/data/${id}`);
  return response.json()
}

export async function updateUser(updatedUser:any) {
  const response = await fetch(`http://localhost:8001/data/${updatedUser.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  });
  return response.json();
}
