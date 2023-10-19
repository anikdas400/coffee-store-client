import Swal from 'sweetalert2'



const AddCoffee = () => {

    const handleAddCoffee = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const newCoffee ={name,quantity,supplier,taste,category,details,photo}

        console.log(newCoffee)

        // send data to the server
        fetch("http://localhost:5000/coffee",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Coffee Add Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
           
        })
    }
    return (
        <div className="mb-4 bg-[#F4F3F0] p-8">
            <h2 className="text-3xl text-center font-bold mb-4">Add New Coffee</h2>
            <p className="mb-8">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleAddCoffee}>
                {/* form row--name,quantity */}
                <div className="flex gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
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
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
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
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
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
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block mt-4" />
            </form>
        </div>
    );
};

export default AddCoffee;