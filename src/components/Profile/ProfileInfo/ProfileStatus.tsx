import React, { ChangeEvent } from "react"

type ProfileStatusType = {
    status: string 
    updateUserStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    changeEditModeToTrue = () => {
        this.setState(
            { editMode: true }
        )
    }

    changeEditModeToFalse = () => {
        this.setState(
            { editMode: false }
        )
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>): void {
       if (prevProps.status !== this.props.status) {
        this.setState({status: this.props.status})
       } 
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.changeEditModeToTrue}>{this.props.status || "-------"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.changeEditModeToFalse} value={this.state.status} />
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus