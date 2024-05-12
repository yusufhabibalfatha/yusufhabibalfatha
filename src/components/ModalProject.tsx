import { MutableRefObject } from "react";

interface modalProp {
  test: MutableRefObject<HTMLDialogElement | null>;
}

const ModalProject = ({ test }: modalProp) => {
  return (
    <dialog id="my_modal_1" className="modal modal-bottom" ref={test}>
      <div className="flex flex-col justify-between h-screen modal-box">
        <div className="h-full overflow-y-scroll ">
          <div className="h-screen ">asd</div>
        </div>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
            <button className="absolute top-2 btn btn-sm btn-circle btn-ghost right-2">
              ✕
            </button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ModalProject;
