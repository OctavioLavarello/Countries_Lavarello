export default function Register () {
    return(
        <div>
            <h2>Get started Now</h2>
            <h3>and see the world!</h3>
            <form>
                <div>
                    <label>NICKNAME</label>
                    <input 
                    name="nickname"
                    type="nickname" 
                    placeholder="insert nickname" 
                    />
                </div>
                <div>
                    <label>EMAIL</label>
                    <input 
                    name="email"
                    type="email" 
                    placeholder="insert email" 
                    />
                </div>
                <div>
                    <label>PASSWORD</label>
                    <input 
                    name="password"
                    type="text" 
                    placeholder="insert password" 
                    />
                </div>
                <button>Sing Up</button>
            </form>
        </div>
    )
}