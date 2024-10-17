import { useState } from "react";
import { baseButtonClasses, buttonSizes } from "./Button";
import HelperText from "./HelperText";
import { twMerge } from "tailwind-merge";

export type FileUploadProps = {
  label: string;
  name: string;
  helperText: string;
  onChange: (file: File) => void;
};

const FileUpload = ({ label, name, helperText, onChange }: FileUploadProps) => {
  const [filename, setFilename] = useState("");
  const [error, setError] = useState("");

  interface HandleChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

  const handleChange = (e: HandleChangeEvent) => {
    const file = e.target.files?.[0];
    if (file && file.size > 10000000) {
      setError("File is too large. Max size is 10MB.");
      return;
    }
    if (file) {
      setError("");
      setFilename(file.name);
      onChange(file);
    }
  };

  return (
    <fieldset className="flex flex-col gap-1">
      <label htmlFor={name}>
        <p className="text-white font-body mb-2">{label}</p>
        <div className="flex items-center gap-2">
          <span
            className={twMerge(
              baseButtonClasses,
              buttonSizes.md,
              "bg-purple hover:bg-purple_hover border-purple hover:border-purple_hover inline-block whitespace-nowrap"
            )}
          >
            Choose File
          </span>
          <span className="text-gray_medium ml-2">
            {filename || "No file chosen"}
          </span>
        </div>
        <input
          type="file"
          id={name}
          name={name}
          accept=".mp4,.mov,.avi"
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2"
          hidden
        />
      </label>

      {error && (
        <p className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
      {helperText && <HelperText>{helperText}</HelperText>}
    </fieldset>
  );
};

export default FileUpload;
