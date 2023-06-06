import { Field, InjectedFormProps, reduxForm } from "redux-form"
import React from "react"
import { Input } from "../Common/FormControl/FormsControl"
import { required } from "../../utils/validators/validators"
import { connect } from "react-redux"
import { login } from "../../redux/authReducers"
import { Redirect } from "react-router-dom"
import { AppStateType } from "../../redux/redux-store"
import s from "../Common/FormControl/FormsControl.module.css"

type FormDataType = {
    email: string
    password: string
    remeberMe: boolean
}

type LoginComponentType = {
    login: (email: string, password: string, remeberMe: boolean) => void
    isAuth: boolean
}

const Login = (props: LoginComponentType) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.remeberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

let mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login })(Login)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input}
                    validate={required}
                />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} type={"password"}
                    validate={required}
                />
            </div>
            <div>
                <Field type="checkbox" name={"remeberMe"} component={Input} /> Remember me
            </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({ form: 'login' })(LoginForm)