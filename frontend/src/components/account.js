import React from "react";
import ReactDOM from "react-dom";

export const Account = () => {

  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  var name = "name of user";
  var email = "email of the user";
  return (
    <>
    <title>YourHealthPal - profile</title>
      <div className="flex">
        <div className="profile-container">
          <div className="h-2 bg-blue-400 rounded-t-md"></div>
          <form className="px-8 py-6">
            <label className="block font-semibold">Email</label>
            <input
             className="sign-in-input"
              type="email"
              placeholder={email}
              name="email"
            />
            <label className="block mt-3 font-semibold">Name</label>
            <input
             className="sign-in-input"
              type="text"
              placeholder={name}
              name="username"
            />
            <label className="block mt-3 font-semibold">Upload a image to change your profile picture</label>

            <div className=" flex flex-col">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
                style={{
                  display: "none"
                }}
              />
              <div
                className=" h-28 w-28 border-0.5 border-dashed border-black rounded-full mt-4"
                onClick={() => imageUploader.current.click()}
              >
                <img
                  ref={uploadedImage}
                  className="h-28 w-28 rounded-full"
                />
              </div>
            </div>
            <div className="flex justify-between items-baseline mt-4">
              <button className="primary-btn w-90% mx-auto " type="submit">
                update personal info
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};


const rootElement = document.getElementById("root");
ReactDOM.render(<Account />, rootElement);
