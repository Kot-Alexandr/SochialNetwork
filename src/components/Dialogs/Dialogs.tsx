import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../Common/FormControl/FormsControl';
import s from './Dialogs.module.css';
import DialogItem from './DiologsItems/DialogsItems';
import Message from './Messages/Messages';


export type DialogsPropsType = {
    addMessage: (newMessageBody: string) => void
    dialogsData: Array<{ id: number, name: string }>
    messagesData: Array<{ id: number, message: string }>
}

const Dialogs = (props: DialogsPropsType) => {

    const DiaologElements = props.dialogsData.map(
        (el,index) => <DialogItem name={el.name} id={el.id} key={index}  />
    )
    const messagesElements = props.messagesData.map(
        (el,index) => <Message message={el.message} key={index}/>
    )

    const addNewMessage = (values: DialogFormType) => {
        props.addMessage((values.newMessageBody))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DiaologElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements}</div>
                <DialogReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

export default Dialogs

type DialogFormType = {
    newMessageBody: string,
}

const maxLenght100 = maxLengthCreator(100)

const DialogForm: React.FC<InjectedFormProps<DialogFormType>> = (props) => {



    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newMessageBody"} placeholder={"Your next message to your friend!"}
                    validate={[required, maxLenght100]}
                />
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const DialogReduxForm = reduxForm<DialogFormType>({ form: 'dialog' })(DialogForm)