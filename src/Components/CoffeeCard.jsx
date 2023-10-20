import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
    const { _id, name, supplier, taste, category, photo } = coffee

   

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            // remove cart after delete from ui
                            const remining = coffees.filter(cof=>cof._id !== _id)
                            setCoffees(remining)
                            
                        }
                    })


            }
        })
    }
    return (
        <div>
            <div className="card card-side bg-[#F4F3F0]">
                <figure><img className="h-60 w-auto" src={photo} alt="Movie" /></figure>
                <div className=" p-4 flex gap-3">
                    <div>
                        <h2 className="card-title">Name:{name}</h2>
                        <p>Supplier:{supplier}</p>
                        <p>category:{category}</p>
                        <p>taste:{taste}</p>
                    </div>

                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-4 ">
                            <button className="btn btn-secondary text-black">View</button>
                            <Link to={`updatecoffee/${_id}`}>
                            <button className="btn btn-secondary text-black">Update</button>
                            </Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn  bg-slate-300 text-teal-600">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;