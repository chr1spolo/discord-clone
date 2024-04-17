import { useRouter } from "next/navigation";

const ServerIdPage = ({ params }: { params: any }) => {
  const { serverId } = params;

  return <div>Server id: {serverId}</div>;
};

export default ServerIdPage;
