import { Navbar } from "../_components/Navbar";
 
export default function Layout({ children, modal }: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
  }>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {modal}
    </>
  )
}