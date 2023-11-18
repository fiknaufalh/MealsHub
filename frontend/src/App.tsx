import Confirm from "./confirm.css";

const App = () => {
  const [showConfirm, setShowConfirm] = React.useState(false);

  const handleConfirm = () => {
    // Do something when the user confirms
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <div>
      <button onClick={() => setShowConfirm(true)}>Confirm</button>

      {showConfirm && (
        <Confirm
          message="Are you sure you want to confirm?"
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
};

export default App;