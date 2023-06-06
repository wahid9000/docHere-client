
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddDoctor = () => {
    const [axiosSecure] = useAxiosSecure();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgUrl = imgResponse.data.display_url;
                    const { name, service, doctor_level } = data;
                    const doctorData = { name, service, doctor_level, image: imgUrl }
                    console.log(doctorData);
                    axiosSecure.post('/doctors', doctorData)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.insertedId) {
                                reset();
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'Doctor Has Been Inserted',
                                    icon: 'success',
                                    confirmButtonText: 'Continue'
                                })
                            }
                        })
                }
            })




        // axiosSecure.post('/doctors')
        //     .then(data => {
        //         console.log(data.data)
        // if (res.data.insertedId) {
        //     Swal.fire({
        //         title: 'Success!',
        //         text: 'Doctor Has Been Inserted',
        //         icon: 'success',
        //         confirmButtonText: 'Continue'
        //     })
        // }
        // })
    };


    return (
        <div>
            <h2 className="text-3xl font-bold">Add A New Doctor</h2>

            <div className="p-5 w-full md:w-2/3  bg-white mt-8">
                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control">
                        <label>Doctor Name:</label>
                        <input type="text" {...register("name", { required: true })} placeholder="Name*" className="mt-3 input input-bordered w-full max-w-md" />
                    </div>

                    <div className="form-control">
                        <label>Doctor Position:</label>
                        <input type="text" {...register("doctor_level", { required: true })} placeholder="Degree*" className="mt-3 input input-bordered w-full max-w-md" />
                    </div>

                    <div className="form-control">
                        <label>Service Name:</label>
                        <select defaultValue={'Select Service'} {...register("service", { required: true })} className="select select-bordered w-full max-w-md mt-3">
                            <option>Teeth Orthodontics</option>
                            <option>Cosmetic Dentisty</option>
                            <option>Teeth Cleaning</option>
                            <option>Cavity Protection</option>
                            <option>Pediatric Dental</option>
                            <option>Oral Surgery</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label>Upload Photo:</label>
                        <input type="file" {...register("image", { required: true })} className="mt-3 file-input file-input-bordered w-full max-w-md" />
                    </div>

                    <input className="btn" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;