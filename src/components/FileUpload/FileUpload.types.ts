import { ReactNode } from "react";

export type FileUploadProps = {
  setFile?: (file: File) => void;
  accept: string
  children?: ReactNode
}
