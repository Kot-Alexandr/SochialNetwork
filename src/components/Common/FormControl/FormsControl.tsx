import s from './FormsControl.module.css'
import { WrappedFieldInputProps, WrappedFieldMetaProps } from "redux-form"
type FormControls = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
    children: React.ReactNode;
    placeholder: string

}

const FormControl = ({ input, meta, children, ...props }: FormControls) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: FormControls) => {
    const { input, meta, children, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props: FormControls) => {
    const { input, meta, children, ...restProps } = props;
    return <FormControl {...props}> <input {...input} {...restProps} /></FormControl>
}