import "./FormStyles.css";
import { db } from "../Firebase";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

// const Form = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [subject, setSubject] = useState("");

//   const [loader, setLoader] = useState(false);

//   const userCollectionRef = collection(db, "messagesData");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoader(true);
//     // if (!name) {
//     //   alert("Name is required!!");
//     // } else if (!email) {
//     //   alert("Email is required!!");
//     // } else if (!message) {
//     //   alert("Message is required!!");
//     // } else if (!subject) {
//     //   alert("Subject is required!!");
//     // } else {
//     addDoc(userCollectionRef, {
//       name: name,
//       email: email,
//       subject: subject,
//       message: message,
//     })
//       .then(() => {
//         alert("Your message has been submitted!");
//         setLoader(false);
//       })
//       .catch((error) => {
//         alert(error.message);
//         setLoader(false);
//       });
//     setName("");
//     setEmail("");
//     setSubject("");
//     setMessage("");
//     // }
//   };

//   return (
//     <div className="component-container">
//       <div className="form" id="Contact-Form">
//         <h2>Send a message</h2>
//         <form onSubmit={handleSubmit}>
//           {/* <form> */}
//           <label>Full Name</label>
//           <input
//             className=""
//             type="text"
//             required
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           ></input>

//           <label>Email</label>
//           <input
//             className=""
//             type="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           ></input>

//           <label>Subject</label>
//           <input
//             className=""
//             type="text"
//             required
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//           ></input>

//           <label>Message</label>
//           <textarea
//             rows="6"
//             placeholder="Type your message here.."
//             required
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           ></textarea>

//           <button
//             type="submit"
//             className={loader ? "spinner" : "btn btn-rounded"}
//             // className="btn btn-rounded"
//             // style={{ background: loader ? "#ccc" : "" }}
//             // onClick={handleSubmit}
//           >
//             {/* Submit */}
//             {loader ? "" : "Submit"}
//           </button>
//           {/* <div className="spinner"></div> */}
//         </form>
//       </div>
//     </div>
//   );
// };

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [loader, setLoader] = useState(false);

  const userCollectionRef = collection(db, "messagesData");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      await addDoc(userCollectionRef, {
        name,
        email,
        subject,
        message,
      });
      alert("Your message has been submitted!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="component-container">
      <div className="form" id="Contact-Form">
        <h2>Send a message</h2>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Subject</label>
          <input
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <label>Message</label>
          <textarea
            rows="6"
            placeholder="Type your message here.."
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            className={loader ? "spinner" : "btn btn-rounded"}
            disabled={loader}
          >
            {loader ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
