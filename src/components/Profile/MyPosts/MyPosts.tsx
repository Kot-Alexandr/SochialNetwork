import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../Common/FormControl/FormsControl';


type MyPostsType = {
    addPostButton: (newPostText: string) => void
    postData: Array<{ id: number, message: string, likesCount: number }>
}



const MyPosts = React.memo((props: MyPostsType) => {
    const postDataElements = props.postData.map(
        (el,index) => <Post messeage={el.message} likeCount={el.likesCount} key={index} />
    )

    const Submit = (value: MyPostFormType) => {
        props.addPostButton(value.newPostText)
    }

    return <div className={s.postsBlock}>
        <h3>my posts</h3>
        <MyPostReduxForm onSubmit={Submit} />
        {postDataElements}
    </div>
})

export default MyPosts

type MyPostFormType = {
    newPostText: string
}
const maxLength30 = maxLengthCreator(30)

const MyPostForm: React.FC<InjectedFormProps<MyPostFormType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"} placeholder={"I'm missing you, tell something new!!!"}
                    validate={[required, maxLength30]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPostReduxForm = reduxForm<MyPostFormType>({ form: 'post' })(MyPostForm)
