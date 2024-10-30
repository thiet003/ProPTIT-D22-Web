function ShowInfo(props){
    const {email, pass, name} = props;
    console.log(props);
    return(
        <>
            <h3>email: {email}</h3>
            <h3>pass: {pass}</h3>
            <h3>name: {name}</h3>
        </>
    )
}
export default ShowInfo
