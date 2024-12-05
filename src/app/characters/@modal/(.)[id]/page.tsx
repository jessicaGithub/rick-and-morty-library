import Modal from '@/app/_components/Modal';

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const charId = (await params).id;
  return <Modal id={charId} />;
}