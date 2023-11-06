// export default function Resume() {
//     return (
//         <div className="container text-center">
//         <h2 className="my-4">Download</h2>
//         <a
//           href="/Assets/Resume"
//         download></a>
//       </div>
//     )}
import React from 'react';

export default function Resume() {
  return (
    <div className="container text-center my-4">
      <h2>Download Resume</h2>
      <a href= "/assets/Resume.pdf" download className="btn btn-primary">Download</a>
    </div>
  );
}
