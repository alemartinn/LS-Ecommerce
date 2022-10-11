import { useSelector } from "react-redux"
import Button from "../Button.js"
import InputForm from "../InputForm.js"

export default function EditProfile({user,Children}) {
    const basicModelForm = [
        {
            label: "Name",
            input: {
                name: 'name',
                key: 'name',
                type: 'text',
                required: 'required',
                defaultValue:user.name,
                autoComplete: 'off'
            }
        },
        {
            label: "Last Name",
            input: {
                name: 'lastname',
                key: 'lastname',
                type: 'text',
                required: 'required',
                defaultValue:user.lastname,
                autoComplete: 'off'
            }
        },
        {
            label: "Photo",
            input: {
                name: 'photo',
                key: 'photo',
                type: 'url',
                required: 'required',
                defaultValue:user.photo,
                autoComplete: 'off'
            }
        },
    ]
    const { fontColor, light } = useSelector(state => state.color)
    const saveUser=(e) => {
        e.preventDefault()
        console.log(Array.from(e.target))
    }
    return (
        <div className="edit-profile-continer">
            <Children/>
            <p>Edit Profile</p>
            <form onSubmit={saveUser} className="edit-profile-form">
                {basicModelForm.map((props) =>
                    <InputForm {...props}
                        style={{ color: fontColor }} />)}
                <Button>
                    Save
                </Button>
            </form>
        </div>
    )
}