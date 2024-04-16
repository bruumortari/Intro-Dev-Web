import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { useState } from "react";
import { UserModal } from "./components/UserModal";

Modal.setAppElement('#root');

export function App() {

  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  function handleOpenUserModal() {
      setIsUserModalOpen(true);
  }

  function handleCloseUserModal() {
      setIsUserModalOpen(false);
  }

  return (
    <>
      <Header onOpenUserModal={handleOpenUserModal}/>
      <Dashboard />
      <UserModal 
        isOpen={isUserModalOpen}
        onRequestClose={handleCloseUserModal}
      />
      <GlobalStyle />
    </>
  );
}

export default App;