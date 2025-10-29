import type { ReactNode } from "react";
import "../../styles/dialog.css";

interface UserInfoDialogProps {
  isOpen: boolean;
  children: ReactNode;
}

const UserInfoDialog = ({ isOpen, children }: UserInfoDialogProps) => {
  if (isOpen) {
    return (
      <div className="dialogBackground">
        <div className="dialogContent">{children}</div>
      </div>
    );
  }

  return null;
};

export default UserInfoDialog;
