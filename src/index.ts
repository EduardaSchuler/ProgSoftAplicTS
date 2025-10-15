import { getUsers, getUserById, updateUserPut, updateUserPatch, deleteUser } from "./servicorest";

async function main() {
  try {
    const users = await getUsers();
    console.log("Lista de usuários:", users);

    const user = await getUserById(2);
    console.log("Usuário com ID 2:", user);

    const updatedPut = await updateUserPut(2, {
      name: "mary",
      job: "Developer",
    });
    console.log("Resultado PUT:", updatedPut);

    const updatedPatch = await updateUserPatch(2, {
      name: "mary Patch",
      job: "QA",
    });
    console.log("Resultado PATCH:", updatedPatch);

    const statusDelete = await deleteUser(2);
    console.log("Status DELETE:", statusDelete);
  } catch (error: any) {
    console.error("Erro:", error.response?.data || error.message);
  }
}

main();
