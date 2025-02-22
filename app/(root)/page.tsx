import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();

  console.log(session);
  return (
    <>
      <h1 className="font-space-grotesk">Roxi the dog</h1>
    </>
  );
};

export default Home;
