import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, supplier, taste, category, details, photo, quantity } = coffee;

    const handleUpdateCoffee = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const updatedCoffee ={name,quantity,supplier,taste,category,details,photo}

        console.log(updatedCoffee)

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
           
        })
    }
    return (
        <div className="mb-4 bg-[#F4F3F0] p-8">
            <h2 className="text-3xl text-center font-bold mb-4">Update a Coffee</h2>
            
            <form onSubmit={handleUpdateCoffee}>
                {/* form row--name,quantity */}
                <div className="flex gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name" defaultValue={name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" defaultValue={quantity} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row--Supplier,Taste */}
                <div className="flex gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier Name" defaultValue={supplier} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" defaultValue={taste} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row--Category,Details */}
                <div className="flex gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" defaultValue={category} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" defaultValue={details} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row--Add Coffee */}
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo Url" defaultValue={photo} className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block mt-4" />
            </form>
        </div>
    );
};

export default UpdateCoffee;