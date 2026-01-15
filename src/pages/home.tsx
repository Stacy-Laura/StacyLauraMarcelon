import portrait from "../assets/img_0640.jpg";
function Home() {
    return (
        <div>
            <h1>Welcome to Stacy's website</h1>
            <img src={portrait} alt="Stacy Marcelon" style={{ maxWidth: '300px' }} />
        </div>
    );
}

export default Home;