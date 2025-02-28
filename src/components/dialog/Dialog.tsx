import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

interface DialogComponentProps {
  children?: React.ReactNode;
  title?: string;
  btnText: string;
  description?: string;
  buttonText?: string;
  buttonOnClick?: () => void;
}
export function DialogComponent({
  children,
  title,
  description,
  buttonText,
  btnText,
  buttonOnClick,
}: DialogComponentProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{btnText}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        {buttonText && buttonOnClick && (
          <DialogFooter>
            <DialogTrigger asChild>
              <Button onClick={buttonOnClick}>{buttonText}</Button>
            </DialogTrigger>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
