import React, {useState} from "react";
import 'react-toastify/dist/ReactToastify.min.css';

/* https://javascript.plainenglish.io/sending-email-in-react-application-with-nodemailer-afcef6906608
*/

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitRequest = async (e) => {
    e.preventDefault();
    console.log({ email, message });
    const response = await fetch("/access", { 
      method: 'POST', 
      headers: { 
          'Content-type': 'application/json'
      }, 
      body: JSON.stringify({email, message}) 
    }); 
      const resData = await response.json(); 
      if (resData.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(resData.status === 'fail'){
          alert("Message failed to send.")
      }
  }

  return (
    <div>
    <div className="flex flex-col items-center justify-center bg-gray-200"></div>
    <div className="w-full max-w-sm m-auto flex flex-col my-32">
      <form>
        <h2>Contact our team</h2>
        <div className="mb-4">
          <label htmlFor="Email">Your Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            value='email'
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message"> Message For Us</label>
          <textarea
            name="message"
            type="text"
            placeholder="Tell us your purpose"
            value='message'
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit"> Send A Request</button>
        </div>
      </form>
    </div>
  </div>

  );
};

export default Contact;