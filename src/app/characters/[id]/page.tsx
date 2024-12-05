import Modal from "@/app/_components/Modal";

function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return <Modal id={id} />;
}

export default Page;
