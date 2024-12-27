

'use client';

import React from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router'; // Import useRouter for navigation
import * as Yup from 'yup';

function SignUp() {
  const router = useRouter(); // Initialize useRouter for navigation

  const signUpSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters')
      .max(25, 'Name must be at most 25 characters'),
    email: Yup.string().required('Email is required').email('Email is not valid'),
    phone: Yup.string()
      .required('Phone is required')
      .matches(/^01[0125][0-9]{8}$/, 'Phone number is not valid'),
    password: Yup.string()
      .required('Password is required')
      .matches(/^[0-9a-zA-Z]{8,}$/, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password')], 'Passwords do not match'),
    individual: Yup.lazy((value) => {
      return formik.values.isIndividual
        ? Yup.string()
            .required('Individual name is required')
            .min(6, 'Must be at least 6 characters')
            .max(25, 'Must be at most 25 characters')
        : Yup.string().notRequired();
    }),
    company: Yup.lazy((value) => {
      return formik.values.isCompany
        ? Yup.string()
            .required('Company name is required')
            .min(6, 'Must be at least 6 characters')
            .max(25, 'Must be at most 25 characters')
        : Yup.string().notRequired();
    }),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      individual: '',
      company: '',
      isIndividual: true,
      isCompany: false,
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log('Form submitted', values);

      // Navigate to the verification page
      router.push('/verify');
    },
  });

  const handleCheckboxChange = (field) => {
    formik.setFieldValue('isIndividual', field === 'individual');
    formik.setFieldValue('isCompany', field === 'company');
    formik.setFieldValue('individual', field === 'individual' ? formik.values.individual : '');
    formik.setFieldValue('company', field === 'company' ? formik.values.company : '');
  };

  return (
    <div className="container w-full mt-24">
      <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto py-5 mb-3 border-1 shadow-lg rounded-lg">
        <div className="mb-6 flex justify-center">
          <img className="w-32" src="/images/logo.png" alt="logo" />
        </div>
        <form onSubmit={formik.handleSubmit} className="mx-6 sm:mx-12 md:mx-16">
          {/* Name Field */}
          <div className="mb-[20px]">
            <label htmlFor="name" className="block mb-2 font-medium text-secondColor text-[16px]">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-pColor text-[14px] rounded-lg block w-full p-2.5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="omar Mohamed"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-xs">{formik.errors.name}</div>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-[20px]">
            <label htmlFor="email" className="block mb-2 font-medium text-secondColor text-[16px]">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-pColor text-[14px] rounded-lg block w-full p-2.5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="omar@gmail.com"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-xs">{formik.errors.email}</div>
            )}
          </div>

          {/* Phone Field */}
          <div className="mb-[20px]">
            <label htmlFor="phone" className="block mb-2 font-medium text-secondColor text-[16px]">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-pColor text-[14px] rounded-lg block w-full p-2.5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              placeholder="012335889957"
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-500 text-xs">{formik.errors.phone}</div>
            )}
          </div>

          {/* Password Fields */}
          <div className="mb-[20px]">
            <label htmlFor="password" className="block mb-2 font-medium text-secondColor text-[16px]">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-pColor text-[14px] rounded-lg block w-full p-2.5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="**********"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-xs">{formik.errors.password}</div>
            )}
          </div>
          <div className="mb-[20px]">
            <label htmlFor="confirmPassword" className="block mb-2 font-medium text-secondColor text-[16px]">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="bg-gray-50 border border-gray-300 text-pColor text-[14px] rounded-lg block w-full p-2.5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              placeholder="**********"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="text-red-500 text-xs">{formik.errors.confirmPassword}</div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center md:flex-row flex-col mt-5">
            <button
              type="submit"
              className="bg-butColor w-full sm:w-3/4 md:w-1/2 lg:w-1/3 text-white py-3 px-6 rounded-lg"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;









// import React, { useState } from 'react';
// import '../../App.css';
// import logo from '../../images/logo.png';
// import { useFormik, validateYupSchema } from 'formik';
// import { useNavigate } from 'react-router-dom';
// import * as Yup from 'yup';


// function SignUp() {

//   const navigate = useNavigate();

//   function handleClick() {
//     navigate('/verify');
//   }

  

//   const signUpSchema = Yup.object().shape(
//     {
//       name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters').max(25, 'Name must be at most 25 characters'),
//       email: Yup.string().required('Email is required').email('Email is not valid'),
//       phone: Yup.string().required('Phone is required').matches(/^01[0125][0-9]{8}$/, 'Phone nimber is not valid'),
//       password: Yup.string().required('Password is required').matches(/^[0-9a-zA-Z]{8,}$/, 'Password must be at least 8 characters'),
//       confirmPassword: Yup.string().required('confirm password is required').oneOf([Yup.ref('password')], 'Password not match'),
//       individual: Yup.string().when('isIndividual', {is: true,then: Yup.string().required('Individual is required').min(6, 'Individual must be at least 6 characters').max(25, 'Individual must be at most 25 characters'),}),
//       company: Yup.string().when('isCompany',{is: true,then: Yup.string().required('Company is required').min(6, 'Company must be at least 6 characters').max(25, 'Company must be at most 25 characters'),}),});
//      }
  

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       phone: '',
//       password: '',
//       confirmPassword: '',
    
//     },

//     validationSchema: signUpSchema,
//    onSubmit: values => { 
//     formRegister(values);
//     handleClick();
//     console.log('form submitted');
   
//    }

//   });
//   function formRegister() {
//     console.log(formik.values)
//   };
  
//   return (
//     <div className="container w-full mt-24 ">

//       <div className=' content-center w-75 items-center justify-center h-screen mx-auto border-1 shadow-lg my-16'>
//         <div className=' mb-6 ms-96  items-center justify-center'>
//           <img className="w-25 mr-2" src={logo} alt="logo" />
//         </div>
//         <form onSubmit={formik.handleSubmit} className='mx-16'>
//           <div className="mb-6">
//             <label htmlFor="name" className="block mb-2 text-sm font-medium text-secondColor">Full Name</label>
//             <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-pColor text-sm rounded-lg block w-full p-2.5"
//               onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} placeholder="Amira Mohamed" />

//             {formik.touched.name && formik.errors.name && <div className="text-red-500 text-xs">{formik.errors.name}</div>}

//           </div>
//           <div className="mb-6">
//             <label htmlFor="email" className="block mb-2 text-sm font-medium text-secondColor">Email Address</label>
//             <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-pColor text-sm rounded-lg block w-full p-2.5"
//               onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} placeholder="Amira@gmail.com" />
//             {formik.touched.email && formik.errors.email && <div className="text-red-500 text-xs">{formik.errors.email}</div>}

//           </div>
//           <div className="mb-6">
//             <label htmlFor="phone" className="block mb-2 text-sm font-medium text-secondColor">Phone Number</label>
//             <input type="tel" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-pColor text-sm rounded-lg block w-full p-2.5"
//               onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} placeholder="012335889957" />
//             {formik.touched.phone && formik.errors.phone && <div className="text-red-500 text-xs">{formik.errors.phone}</div>}

//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block mb-2 text-sm font-medium text-secondColor">Password</label>
//             <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-pColor text-sm rounded-lg block w-full p-2.5"
//               onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} placeholder="********" />
//             {formik.touched.password && formik.errors.password && <div className="text-red-500 text-xs">{formik.errors.password}</div>}
//           </div>
//           <div className="mb-6">
//             <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-secondColor">Confirm Password</label>
//             <input type="password" name="confirmPassword" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-pColor text-sm rounded-lg block w-full p-2.5"
//               onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} placeholder="********" />
//             {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="text-red-500 text-xs">{formik.errors.confirmPassword}</div>}
//           </div>
//           <div className='flex items-center '>
//             <div className=" mb-3 flex  ">
//               <input checked id="checkbox-1"
//                 name='individual'
//                 className='w-3 h-3 mt-2 mx-3 ' type="checkbox" aria-label="Checkbox for following text input" />
//               <label htmlFor='checkbox-1' className='text-secondColor  me-6'>individual</label>
//             </div>
//             <div className=" mb-3 flex">
//               <input id="checkbox-2" className='w-3 h-3 mt-2 mx-3'
//                 name='company'type="checkbox" aria-label="Checkbox for following text input" />
//               <label htmlFor='checkbox-2' className='text-secondColor'>company</label>
//             </div>
//           </div>
//           <div className="mb-6">
//             <label htmlFor="individual" className="block mb-2 text-sm font-medium text-secondColor">Individual Name</label>
//             <input type="text" name="individual" id="individual" className="bg-gray-50 border border-gray-300 text-pColor text-sm rounded-lg block w-full p-2.5"
//               onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.individual} placeholder="" />
//             { formik.touched.company && formik.errors.individual && <div className="text-red-500 text-xs">{formik.errors.individual}</div>}

//           </div> 
//         <div className="mb-6 hidden"> 
//             <label htmlFor="company" className="block mb-2 text-sm font-medium text-secondColor">Company Name</label>
//             <input type="text" name="company" id="company" className="bg-gray-50 border border-gray-300 text-pColor text-sm rounded-lg block w-full p-2.5"
//               onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.company} placeholder="" />
//             {formik.touched.company && formik.errors.company && <div className="text-red-500 text-xs">{formik.errors.company}</div>}

//           </div>
             
//           <button type='submit' className='bg-butColor w-75 ms-32 text-white py-2 px-4 rounded'>Sign Up</button>
//         </form>
//       </div>
//     </div>
    
//   );


// export default SignUp;


// import React from 'react';
// import '../../App.css';
// import logo from '../../images/logo.png';
// import { useFormik } from 'formik';
// import { useNavigate } from 'react-router-dom';
// import * as Yup from 'yup';

// function SignUp() {

  
//   const navigate = useNavigate();

//   const signUpSchema = Yup.object().shape(
//     {
//       name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters').max(25, 'Name must be at most 25 characters'),
//       email: Yup.string().required('Email is required').email('Email is not valid'),
//       phone: Yup.string().required('Phone is required').matches(/^01[0125][0-9]{8}$/, 'Phone number is not valid'),
//       password: Yup.string().required('Password is required').matches(/^[0-9a-zA-Z]{8,}$/, 'Password must be at least 8 characters'),
//       confirmPassword: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password')], 'Passwords do not match'),
//       individual: Yup.lazy(value => {
//         return formik.values.accountType === 'individual'
//           ? Yup.string().required('Individual name is required').min(6, 'Must be at least 6 characters').max(25, 'Must be at most 25 characters')
//           : Yup.string().notRequired();
//       }),
//       company: Yup.lazy(value => {
//         return formik.values.accountType === 'company'
//           ? Yup.string().required('Company name is required').min(6, 'Must be at least 6 characters').max(25, 'Must be at most 25 characters')
//           : Yup.string().notRequired();
//       }),
//     });

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       phone: '',
//       password: '',
//       confirmPassword: '',
//       individual: '',
//       company: '',
//       isIndividual: true,
//       isCompany: false,
//     },
//     validationSchema: signUpSchema,
//     onSubmit: values => {
//       console.log('Form submitted', values);
//       navigate('/verify');
//     },
//   });

//   const handleCheckboxChange = (field) => {
//     formik.setFieldValue('isIndividual', field === 'individual');
//     formik.setFieldValue('isCompany', field === 'company');
//     formik.setFieldValue('individual', field === 'individual' ? formik.values.individual : '');
//     formik.setFieldValue('company', field === 'company' ? formik.values.company : '');
//   };

//   return (
//     <div className="container w-full mt-24">
//       <div className="content-center w-75 items-center justify-center  mx-auto border-1 shadow-lg py-5">
//         <div className="mb-6 ms-96 items-center justify-center">
//           <img className="w-25 mr-2" src={logo} alt="logo" />
//         </div>
//         <form onSubmit={formik.handleSubmit} className="mx-16">
         
//           <div className="mb-6">
//             <label htmlFor="name" className="block mb-2 text-sm font-medium text-secondColor">  Full Name </label>
//             <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-pColor text-sm rounded-lg block w-full p-2.5" onChange={formik.handleChange}onBlur={formik.handleBlur} value={formik.values.name}  placeholder="Amira Mohamed"  />
//             {formik.touched.name && formik.errors.name && <div className="text-red-500 text-xs">{formik.errors.name}</div>}
//           </div>

//           <div className="mb-6">
//             <label htmlFor="email" className="block mb-2 text-sm font-medium text-secondColor"> Email </label>
//             <input type="email" name="email" id="email"  className="bg-gray-50 border border-gray-300 text-pColor text-sm rounded-lg block w-full p-2.5"
//               onChange={formik.handleChange } onBlur={formik.handleBlur} value={formik.values.email} placeholder="Amira@gmail.com" />
//             {formik.touched.email && formik.errors.email && <div className="text-red-500 text-xs">{formik.errors.email}</div>}
//           </div>

//           <div className="mb-6">
//             <label htmlFor="phone" className="block mb-2 text-sm font-medium text-secondColor"> Phone</label>
//             <input  type="tel" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-pColor text-sm rounded-lg block w-full p-2.5" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.phone}  placeholder="012335889957"  />
//             {formik.touched.phone && formik.errors.phone && <div className="text-red-500 text-xs">{formik.errors.phone}</div>}
//           </div>

//           <div className="mb-6">
//             <label htmlFor="password" className="block mb-2 text-sm font-medium text-secondColor"> Password</label>
//             <input  type="password"  name="password" id="password"  className="bg-gray-50 border border-gray-300 text-pColor text-sm rounded-lg block w-full p-2.5" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.password} placeholder="**********" />
//             {formik.touched.password && formik.errors.password && <div className="text-red-500 text-xs">{formik.errors.password}</div>}
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block mb-2 text-sm font-medium text-secondColor">Confirm Password</label>
//             <input type="password" name="confirmPassword" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-pColor text-sm rounded-lg block w-full p-2.5" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} placeholder="**********"  />
//             {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="text-red-500 text-xs">{formik.errors.confirmPassword}</div>}
//           </div>



//           <div className="flex items-center md:flex-row flex-col ">
//             <div className="mb-3 flex ">
//               <input id="checkbox-1" name="isIndividual" placeholder="Cyparta" type="checkbox" checked={formik.values.isIndividual} onChange={() => handleCheckboxChange('individual')} className="w-3 h-3 mt-2 mx-3 accent-mainColor" />
//               <label htmlFor="checkbox-1" className="text-secondColor me-6"> Individual </label>
//             </div>
//             <div className="mb-3 flex ">
//               <input id="checkbox-2" name="isCompany"  type="checkbox" checked={formik.values.isCompany} onChange={() => handleCheckboxChange('company')} className="w-3 h-3 mt-2 mx-3 accent-mainColor " />
//               <label htmlFor="checkbox-2" className="text-secondColor"> Company </label>
//             </div>
//           </div>

//           {formik.values.isIndividual && (
//             <div className="mb-6">
//               <label htmlFor="individual" className="block mb-2 text-sm font-medium text-secondColor"> Individual Name </label>
//               <input type="text" name="individual" id="individual"  className="bg-gray-50 border border-gray-300 text-pColor text-sm rounded-lg block w-full p-2.5" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.individual}  placeholder="Cyparta"/>
//               {formik.touched.individual && formik.errors.individual && <div className="text-red-500 text-xs">{formik.errors.individual}</div>}
//             </div>
//           )}

//           {formik.values.isCompany && (
//             <div className="mb-6">
//               <label htmlFor="company" className="block mb-2 text-sm font-medium text-secondColor">  Company Name </label>
//               <input type="text" name="company" id="company" className="bg-gray-50 border border-gray-300 text-pColor text-sm rounded-lg block w-full p-2.5" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.company} placeholder="Cyparta " />
//               {formik.touched.company && formik.errors.company && <div className="text-red-500 text-xs">{formik.errors.company}</div>}
//             </div>
//           )}

//          <div className=' flex justify-center md:flex-row flex-col'>
//          <button type="submit" className="bg-butColor w-75 text-white py-2 px-4 rounded ">
//             Sign Up
//           </button>
//          </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp;