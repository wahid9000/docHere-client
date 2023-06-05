import { useForm } from "react-hook-form";

const AddDoctor = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


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
                        <select {...register("service", { required: true })} className="select select-bordered w-full max-w-md mt-3">
                            <option disabled selected>Select Service</option>
                            <option>Teeth Orthodontics</option>
                            <option>Cosmetic Dentisty</option>
                            <option>Teeth Cleaning</option>
                            <option>Cavity Protection</option>
                            <option>Pediatric Dental</option>
                            <option>Oral Surgery</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    <input className="btn" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;