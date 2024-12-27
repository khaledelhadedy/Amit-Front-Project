// import React from 'react';
// import logo from '../../images/logo.png';

// export default function FofgotPassword() {
//   return (
//     <div className="container w-full mt-0 ">
      
//     <div className='content-center w-50  h-screen mx-auto mt-0 my-16'>
//         <div className="text-start mx-auto w-[665px] h-[490px]  bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
//         <div className=' mb-6 ms-56 items-center justify-center'>
//         <img className="w-[177px] h-[75px]" src={logo} alt="logo" />
//       </div>
//     <header className="mb-10  mx-8">
//         <h1 className="text-2xl font-bold mb-1 ms text-secondColor">Forgot your password?</h1>
//         <p className="text-[14px] text-forgotPcolor">Don’t worry, happens to all of us. Enter your email below to recover <br/> your password</p>
//     </header>
//     <form id="forgot-form ">
//         <div className="items-center justify-center gap-3 mx-8">
            
//         <div className="mb-6">
//             <label htmlFor="phone" className="block mb-2 text-sm font-medium text-secondColor">Phone Number</label>
//             <input type="tel" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-pColor text-sm rounded-lg block w-full p-2.5"
//               placeholder="012335889957" required="" />
//           </div>
//         </div>
//         <button type='submit' className='bg-butColor w-75 ms-20 my-6 text-white py-3 px-4 rounded'>Send</button>

//     </form>
//       </div>
//     </div>
//   </div>
//   )
  
// }

import React from 'react';


export default function ForgotPassword() {
  return (
    <div className="container w-full mt-5 mb-32">
      <div className='content-center w-full sm:w-1/2 h-screen mx-auto mt-0 my-16'>
        <div className="text-start mx-auto bg-white px-4 sm:px-8 py-10 rounded-xl shadow w-full max-w-lg">
          
          {/* Logo */}
          <div className="mb-6 flex justify-center">
          <img className="w-32" src="/images/logo.png" alt="logo" />
        </div>

          {/* Header Section */}
          <header className="mb-7 mx-8 text-start">
            <h1 className="text-2xl font-bold text-[20px] mb-1 pt-3 text-secondColor">Forgot your password?</h1>
            <p className="text-[14px] text-forgotPcolor">Don’t worry, happens to all of us. Enter your email below to recover your password</p>
          </header>

          {/* Form Section */}
          <form id="forgot-form">
            <div className="items-center justify-center gap-3 mx-8">
              <div className="mb-3">
                <label htmlFor="phone" className="block mb-2 text-[14px] font-medium text-secondColor">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  className="bg-gray-50 border border-gray-300 text-pColor text-[14px] rounded-lg block w-full p-2.5"
                  placeholder="012335889957" 
                  required 
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className='text-center'>
            <button type="submit" className="bg-butColor w-full sm:w-3/4 my-6 text-white text-[18px] font-bold py-3 px-4 rounded">
              Send
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
