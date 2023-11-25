const Banner = () => {
  return (
    <div
      className="hero min-h-[500px]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/xJQ70xR/depositphotos-76219963-stock-illustration-programming-concept-banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Dev Point</h1>
          <form>
            <div className="mb-3">
              <div className="relative mb-4 flex w-full flex-wrap items-center justify-center">
                {/* Search button */}
                <div className="join">
                  <input
                    className="input  text-black input-bordered join-item"
                    placeholder="Search by tag..."
                  />
                  <button className="btn join-item rounded-r-lg hover:text-black bg-slate-900 text-white">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
