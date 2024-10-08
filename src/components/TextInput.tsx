import {
	ChangeEvent,
	Dispatch,
	InputHTMLAttributes,
	SetStateAction,
} from "react";
import HelperText from "./HelperText";

export type TextInputProps = {
	label?: string;
	name: string;
	value?: string;
	placeholder?: string;
	onChange?: Dispatch<SetStateAction<string>>;
	type?: "text" | "password" | "email";
	helperText?: string;
	rest?: InputHTMLAttributes<HTMLInputElement>;
};

const TextInput = ({
	label,
	name,
	value,
	placeholder,
	onChange,
	type = "text",
	helperText,
	...rest
}: TextInputProps) => {
	return (
		<fieldset className="flex flex-col">
			{label && (
				<label htmlFor={name} className="text-white font-body mb-1">
					{label}
				</label>
			)}
			<input
				{...rest}
				type={type}
				name={name}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					onChange?.(e.target.value)
				}
				placeholder={placeholder}
				className="rounded-lg bg-gray_dark p-3 appearance-none text-white placeholder:text-gray_medium font-body"
			/>
			{helperText && <HelperText>{helperText}</HelperText>}
		</fieldset>
	);
};

export default TextInput;
