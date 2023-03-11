import { useEffect} from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import "./Profile_Details_Form.css"

export function ProfileDetailsForm(props) {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors } } = useForm();

    useEffect(() => {
        setValue('fullName', props.currentProfileInfo.fullName);
        setValue('lookingForAJob', props.currentProfileInfo.lookingForAJob);
        setValue('lookingForAJobDescription', props.currentProfileInfo.lookingForAJobDescription);
        setValue('aboutMe', props.currentProfileInfo.aboutMe);
    }, [props])

    const onSubmit = data => {

        props.changeProfileInfo(data);
        props.setEditMode(false);
    }

    return (
        <div>
            <form className="profile_details_form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Change profile</h1>
                <div className="fields_description">Full Name</div>
                <ErrorMessage errors={errors} name="fullName" />
                <input {...register("fullName", { required: "This is required." })} placeholder="Full name" />

                <div className="fields_description">Looking For A Job?</div>
                <select {...register("lookingForAJob", { required: "This is required." })}>
                    <option value="true">Looking</option>
                    <option value="false">Not Looking </option>
                </select>
                <div className="fields_description">Your Skills</div>
                <ErrorMessage errors={errors} name="lookingForAJobDescription" />
                <textarea {...register("lookingForAJobDescription", { required: "This is required." })} placeholder="About your skills" />

                <div className="fields_description">About You </div>
                <ErrorMessage errors={errors} name="aboutMe" />
                <textarea {...register("aboutMe", { required: "This is required." })} placeholder="About you" />
                <input type="submit" />
            </form>


        </div>
    );
}
