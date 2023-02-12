import { ReactNode } from "react";

export type FileUploadProps = {
  setFile: (file: File | null) => void;
  accept: string
  children?: ReactNode
}