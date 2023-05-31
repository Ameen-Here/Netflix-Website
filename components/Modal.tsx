import MuiModal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, id sit
          earum eum nam possimus enim non vitae aperiam tempora, dolore rerum!
          Vero, dolor autem. Ipsa reprehenderit recusandae fugit atque? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit odio
          rem doloribus molestias iusto, velit alias incidunt corporis iste sint
          illo voluptatum exercitationem accusamus quaerat similique quod quam
          ut.
        </p>
      </>
    </MuiModal>
  );
};

export default Modal;
