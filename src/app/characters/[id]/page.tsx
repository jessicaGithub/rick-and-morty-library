import Modal from "@/app/_components/Modal";

type Params = Promise<{ id: string }>;

async function Page({ params }: { params: Params }) {
  const { id } = await params;
  return <Modal id={id} />;
}

export default Page;
