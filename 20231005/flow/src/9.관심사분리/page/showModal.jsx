const ShowModal = ({ onClose }) => {
  return (
    <>
      <span style={{ fontSize: "40px" }}>짜잔!!</span>
      <button type="button" onClick={onClose}>
        x
      </button>
      <br />
    </>
  );
};
export default ShowModal;
