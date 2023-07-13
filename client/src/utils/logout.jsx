export default function logout (userData, access) {
    if(access){
        setAccess(false)
        navigate("/")
    } 
};