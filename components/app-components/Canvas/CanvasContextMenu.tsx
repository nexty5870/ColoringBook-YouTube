import { useContext } from "react";
import { CanvasContext } from "@/store/context/CanvasContext";
import { Menu as ContextMenu, Item, RightSlot } from "react-contexify";
import "react-contexify/ReactContexify.css";
import "@/app/custom-react-contexify.css";

const CanvasContextMenu = ({ menuId }: { menuId: string }) => {
  const { fabricCanvas } = useContext(CanvasContext);

  const handleRemoveClick = () => {
    fabricCanvas.current.getActiveObjects().forEach((obj) => {
      fabricCanvas.current.remove(obj);
    });

    fabricCanvas.current.discardActiveObject().requestRenderAll();
    fabricCanvas.current.fire("object:modified");
  };
  const handleForwardClick = () => {
    fabricCanvas.current.getActiveObjects().forEach((obj) => {
      fabricCanvas.current.bringForward(obj);
    });
    fabricCanvas.current.discardActiveObject().requestRenderAll();
    fabricCanvas.current.fire("object:modified");
  };
  const handleFrontClick = () => {
    fabricCanvas.current.getActiveObjects().forEach((obj) => {
      fabricCanvas.current.bringToFront(obj);
    });
    fabricCanvas.current.discardActiveObject().requestRenderAll();
    fabricCanvas.current.fire("object:modified");
  };
  const handleBackwardClick = () => {
    fabricCanvas.current.getActiveObjects().forEach((obj) => {
      fabricCanvas.current.sendBackwards(obj);
    });
    fabricCanvas.current.discardActiveObject().requestRenderAll();
    fabricCanvas.current.fire("object:modified");
  };
  const handleBackClick = () => {
    fabricCanvas.current.getActiveObjects().forEach((obj) => {
      fabricCanvas.current.sendToBack(obj);
    });
    fabricCanvas.current.discardActiveObject().requestRenderAll();
    fabricCanvas.current.fire("object:modified");
  };
  const handleDeselectClick = () => {
    fabricCanvas.current.discardActiveObject().requestRenderAll();
    fabricCanvas.current.fire("object:modified");
  };
  const handleGroupClick = () => {
    (
      fabricCanvas.current.getActiveObject() as any
    ).toGroup();
    fabricCanvas.current.requestRenderAll();
    fabricCanvas.current.fire("object:modified");
  };
  const handleUngroupClick = () => {
    (
      fabricCanvas.current.getActiveObject() as any
    ).toActiveSelection();
    fabricCanvas.current.requestRenderAll();
    fabricCanvas.current.fire("object:modified");
  };

  function isGroupButtonDisabled({ props }: { props: any }) {
    return props.activeObjectType !== "activeSelection";
  }

  function isUngroupButtonDisabled({ props }: { props: any }) {
    return props.activeObjectType !== "group";
  }

  return (
    <ContextMenu id={menuId}>
      <Item
        id="bring-to-front"
        className="text-[#00000080] hover:text-white hover:bg-red-600"
        onClick={handleFrontClick}
      >
        Bring to front
        <RightSlot className="bg-surface-brand-hover px-2.5 rounded leading-6">
          cmd/ctrl + ]
        </RightSlot>
      </Item>
      <Item
        id="bring-to-forward"
        className="text-[#00000080] hover:text-white"
        onClick={handleForwardClick}
      >
        Bring to forward
        <RightSlot className="bg-surface-brand-hover px-2.5 rounded leading-6">
          ]
        </RightSlot>
      </Item>
      <Item
        id="send-to-back"
        className="text-[#00000080] hover:text-white"
        onClick={handleBackClick}
      >
        Send to back
        <RightSlot className="bg-surface-brand-hover px-2.5 rounded leading-6">
          [
        </RightSlot>
      </Item>
      <Item
        id="send-to-backward"
        className="text-[#00000080] hover:text-white"
        onClick={handleBackwardClick}
      >
        Send to backward
        <RightSlot className="bg-surface-brand-hover px-2.5 rounded leading-6">
          cmd/ctrl + [
        </RightSlot>
      </Item>
      <Item
        id="object-deselect"
        className="text-[#00000080] hover:text-white"
        onClick={handleDeselectClick}
      >
        Deselect
        <RightSlot className="bg-surface-brand-hover px-2.5 rounded leading-6">
          ESC
        </RightSlot>
      </Item>
      <Item
        id="object-remove"
        className="text-[#00000080] hover:text-white group"
        onClick={handleRemoveClick}
      >
        Remove
        <RightSlot className="p-1 rounded bg-surface-brand-hover">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4999 2.5H4.28304C4.11043 2.5005 3.94087 2.54544 3.79068 2.6305C3.64049 2.71555 3.51473 2.83786 3.42554 2.98563L0.571161 7.7425C0.524439 7.82027 0.499756 7.90928 0.499756 8C0.499756 8.09072 0.524439 8.17973 0.571161 8.2575L3.42554 13.0144C3.51473 13.1621 3.64049 13.2844 3.79068 13.3695C3.94087 13.4546 4.11043 13.4995 4.28304 13.5H13.4999C13.7651 13.5 14.0195 13.3946 14.207 13.2071C14.3946 13.0196 14.4999 12.7652 14.4999 12.5V3.5C14.4999 3.23478 14.3946 2.98043 14.207 2.79289C14.0195 2.60536 13.7651 2.5 13.4999 2.5ZM13.4999 12.5H4.28304L1.58304 8L4.28304 3.5H13.4999V12.5ZM6.64616 9.14625L7.79304 8L6.64616 6.85375C6.55234 6.75993 6.49963 6.63268 6.49963 6.5C6.49963 6.36732 6.55234 6.24007 6.64616 6.14625C6.73998 6.05243 6.86723 5.99972 6.99991 5.99972C7.13259 5.99972 7.25984 6.05243 7.35366 6.14625L8.49991 7.29313L9.64616 6.14625C9.69262 6.09979 9.74777 6.06294 9.80846 6.0378C9.86916 6.01266 9.93421 5.99972 9.99991 5.99972C10.0656 5.99972 10.1307 6.01266 10.1914 6.0378C10.2521 6.06294 10.3072 6.09979 10.3537 6.14625C10.4001 6.1927 10.437 6.24786 10.4621 6.30855C10.4872 6.36925 10.5002 6.4343 10.5002 6.5C10.5002 6.5657 10.4872 6.63075 10.4621 6.69145C10.437 6.75214 10.4001 6.8073 10.3537 6.85375L9.20679 8L10.3537 9.14625C10.4001 9.1927 10.437 9.24786 10.4621 9.30855C10.4872 9.36925 10.5002 9.4343 10.5002 9.5C10.5002 9.5657 10.4872 9.63075 10.4621 9.69145C10.437 9.75214 10.4001 9.8073 10.3537 9.85375C10.3072 9.90021 10.2521 9.93706 10.1914 9.9622C10.1307 9.98734 10.0656 10.0003 9.99991 10.0003C9.93421 10.0003 9.86916 9.98734 9.80846 9.9622C9.74777 9.93706 9.69262 9.90021 9.64616 9.85375L8.49991 8.70687L7.35366 9.85375C7.30721 9.90021 7.25206 9.93706 7.19136 9.9622C7.13066 9.98734 7.06561 10.0003 6.99991 10.0003C6.93421 10.0003 6.86916 9.98734 6.80846 9.9622C6.74777 9.93706 6.69262 9.90021 6.64616 9.85375C6.59971 9.8073 6.56286 9.75214 6.53771 9.69145C6.51257 9.63075 6.49963 9.5657 6.49963 9.5C6.49963 9.4343 6.51257 9.36925 6.53771 9.30855C6.56286 9.24786 6.59971 9.1927 6.64616 9.14625Z"
              className="fill-[#00000080] group-hover:fill-white"
            />
          </svg>
        </RightSlot>
      </Item>
      <Item
        id="object-group"
        className="text-[#00000080] hover:text-white"
        onClick={handleGroupClick}
        hidden={isGroupButtonDisabled as any}
      >
        Group Items
      </Item>
      <Item
        id="object-ungroup"
        className="text-[#00000080] hover:text-white"
        onClick={handleUngroupClick}
        hidden={isUngroupButtonDisabled as any}
      >
        Ungroup Items
      </Item>
    </ContextMenu>
  );
};

export default CanvasContextMenu;
