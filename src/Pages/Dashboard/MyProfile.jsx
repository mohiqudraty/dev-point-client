const MyProfile = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mt-4">My Profile</h2>
      <div className="flex justify-center mt-10">
        <div className="card  bg-base-100 shadow-xl">
          <figure className="pt-3">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://lh3.googleusercontent.com/a/ACg8ocL57cQyNm1GOGzIPHNapbbFAtMgmM0sRYl5F-DvJo19LJI=s96-c" />
              </div>
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Mohammad Mohiuddin</h2>
            <p>qudrati1999@gmail.com</p>
            <div className="flex gap-2">
              {" "}
              <img
                className="w-10"
                src="https://i.ibb.co/X73G3hk/badge-3357968.png"
                alt=""
              />
              <img
                className="w-10"
                src="https://i.ibb.co/X73G3hk/badge-3357968.png"
                alt=""
              />
              <img
                className="w-10"
                src="https://i.ibb.co/X73G3hk/badge-3357968.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
