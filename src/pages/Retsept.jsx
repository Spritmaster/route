import { useFetch } from "../hooks/useFetch";
  const query = new URLSearchParams(location.search);
  const id = query.get("id");
  console.log(id);
  const { data, isPending, error } = useFetch(
    `http://localhost:3000/recipes/${id}`
  );
  console.log(data);
  return (
    <>
    </>
  );
}

export default Retsept;
