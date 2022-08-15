import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Title() {
  return (
    <div
      className="bg-pink-600 w-screen h-50 p-5 text-white font-bold ml-5"
      style={{
        marginRight: "calc(50% - 50vw)",
        marginLeft: "calc(50% - 50vw)",
      }}
    >
      <div className="text-3xl mb-2">
        Shimabu IT University
      </div>
      <div className="">しまぶーのポートフォリオのためのページです</div>
      <div>{/* <FontAwesomeIcon icon="fab fa-twitter" /> */}</div>
    </div>
  );
}
