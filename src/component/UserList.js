import React from "react";
import CardComponent from"./Cardcomponent";
export default class FetchRandomUser extends React.Component {

state = {
loading: true,
person: []
};
async componentDidMount() {
const url = "https://jsonplaceholder.typicode.com/users";
const response = await fetch(url);
const data = await response.json();
console.log(data)
this.setState({ person: data, loading: false });
}

render() {
if (this.state.loading) {
return <div>loading...</div>;
}

if (!this.state.person) {
return <div>didn't get a person</div>;
}

return (
<div className="row " style={{display : "flex" , justifyContent : "space-between"}}>

{this.state.person.map((item)=>{
return(

<CardComponent valueItem={item} className="col-4 "/>

)
})}
</div>


)}
}
