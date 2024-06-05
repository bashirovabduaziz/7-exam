import React from 'react'
import { useForm} from 'react-hook-form'

const FormHook = () => {
  const { register, handleSubmit,formState: { errors }} = useForm();
  
  const onSubmit = data => {
    console.log(data);
  };
  return (
   
    <div className='p-6 orms'>
      <form onSubmit={handleSubmit(onSubmit)}>
   <div className='flex gap-3'>
   <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-normal mb-2">
           First name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={` border rounded  w-[300px] p-3 text-gray-700 `}
            placeholder="Enter your name"
           {...register("name",{required:true})} />
          {errors.name && <p className="text-red-500 text-xs mt-1">You enter your first name</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-normal mb-2">
            Last name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={` border rounded  w-[300px] p-3 text-gray-700  {errors.name ? 'border-red-500'  `}
            placeholder="Enter your phone name"
            {...register("name",{required:true})}
   />
          {errors.name && <p className="text-red-500 text-xs mt-1">You don't enter your last name</p>}
        </div>
   </div>
<div className='flex gap-3 '>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-normal mb-2">
            Countery/Region*
          </label>
          <input
            type="text"
            id="country"
            name="country/region"
            className={` border rounded  w-[300px] p-3 text-gray-700  ${errors.country ? 'border-red-500'  : ''}`}
            placeholder="Enter your country/region "
            {...register("country",{required:true})}
          />
          {errors.country && <p className="text-red-500 text-xs mt-1">You don't enter your country/region </p>}
        </div>
   <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-normal mb-2">
            Enter your town/city*
          </label>
          <input
            type="text"
            id="city"
            name="town"
            className={` border rounded  w-[300px] p-3 text-gray-700  ${errors.city ? 'border-red-500'  : ''}`}
            placeholder="Enter your  city/town"
            {...register("city",{required:true})}
          />
          {errors.city && <p className="text-red-500 text-xs mt-1">You don't enter your town/city</p>}
        </div>
   </div>
   <div className='flex gap-2 itmes-center '>

<div className="mb-4">
       <label htmlFor="email" className="block text-gray-700 text-sm font-normal mb-2">
        Street adress*
       </label>
       <input
         type="number"
         id="adress"
         name="street adres"
         className={` border rounded  w-[300px] p-3 text-gray-700  ${errors.adress ? 'border-red-500'  : ''}`}
         placeholder="Enter your phone emale"
         {...register("adress",{required:true})}
       />
       {errors.adress && <p className="text-red-500 text-xs mt-1">You don't enter your  street adress</p>}
     </div>

     <div className="h-[50px] mt-7">
       <input
         type="number"
         id="floor"
         name="floor"
         className={` border rounded  w-[300px] p-3 text-gray-700 `}
         placeholder="Appartment, suite, etc.(optional)"
         {...register("floor",{required:true})}
       />
      
     </div>

</div>
   <div className='flex gap-2 '>
          <div className=" ">
            <label htmlFor="state" className='block text-gray-700 text-sm font-normal '>State*</label>
          <input 
            type="text"
            id="state"
            name="state"
            className={`     border  rounded w-[300px] p-3 text-gray-7ine ${errors.state ? 'border-red-500' : ''}`}
            placeholder="Enter your state"
            {...register("state",{required:true})}
          />
          {errors.state && <p className="text-red-500 text-xs -mb-[10px]">You don't enter your state</p>}
        </div>
        <div className="">
          <label htmlFor="email" className="block text-gray-700 text-sm font-normal mb-2">
     Zip*
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            className={`   -mt-[10px]  border rounded w-[300px] p-3 text-gray-700  ${errors.zip ? 'border-red-500' : ''}`}
            placeholder="Enter  zip"
            {...register("zip",{required:true})}
          />
          {errors.zip && <p className="text-red-500 text-xs mt-1">You don't enter your  zip</p>}
        </div></div>

   


     <div className='flex gap-2'>
     <div className="mb-4 ">
     <label htmlFor="email" className="block text-gray-700 text-sm font-normal mb-2">
     Email*
          </label>
          <input 
            type="email"
            id="email"
            name="email"
            className={`     border  rounded w-[300px] p-3 text-gray-7ine ${errors.email ? 'border-red-500' : ''}`}
            placeholder="Enter your email"
            {...register("email",{required:true})}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">You don't enter your email</p>}
        </div>


        <div className="mb-4 ">
        <label htmlFor="email" className="block text-gray-700 text-sm font-normal mb-2">
     Phone number*
          </label>
          <input 
            type="number"
            id="number"
            name="number"
            className={`     border  rounded w-[300px] p-3   text-gray-7ine ${errors.number ? 'border-red-500' : ''}`}
            placeholder="Enter your number"
            {...register("number",{required:true})}
          />
          {errors.number && <p className="text-red-500 text-xs mt-1">You don't enter your number</p>}
        </div>
     </div>


        <div className="mb-4 ">
          <label htmlFor="note"  className="block text-gray-700 text-sm font-normal mb-2">Order notes (optional) </label>
          <input 
            type="text"
            id="comment"
            name="comment"
            className={`     border  rounded w-[500px] p-12 text-gray-7ine `}
            placeholder="Enter your comment"
            {...register("comment",{required:true})}
          />
        </div>
       

        <div className="flex items-center justify-center  ">
        
        </div> 
      </form>


    </div>
   
  )
}

export default FormHook