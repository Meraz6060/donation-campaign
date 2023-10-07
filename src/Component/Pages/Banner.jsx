
const Banner = () => {
    return (
        <div className="h-[50vh] bg-green-200">
            <div className="min-h-screen" style={{ backgroundImage: '' }}>
                <div className="hero-content text-center">
                    <div className="py-8">
                            <h1 className="mb-5 text-3xl font-bold">I Grow By Helping People In Need</h1>
                        <div className="join py-9">
                            <input className="input input-bordered join-item w-[300px]" placeholder="Search Hear" />
                            <button className="btn btn-primary">Subscribe</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;