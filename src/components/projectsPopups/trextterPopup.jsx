export default function TrextterPopup({ setViewMoreData }) {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-palette-black bg-opacity-60 z-[55]">
      Trextter
      <button onClick={() => setViewMoreData({ visible: false, title: "" })}>
        Close
      </button>
    </div>
  );
}
