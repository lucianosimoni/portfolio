export default function AddressBookPopup({ setViewMoreData }) {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-palette-black bg-opacity-60 z-[55]">
      Address Book
      <button onClick={() => setViewMoreData({ visible: false, title: "" })}>
        Close
      </button>
    </div>
  );
}
