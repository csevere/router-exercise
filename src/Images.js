import React from 'react'
import atlImages from './App'



function Images(props){
	// Map through images
	console.log(props); 

	// return(
	// 	<h1>Test1</h1>
	// )
	var images = []; 


	props.images.map((atlimages, index)=>{
		images.push(
			<img key = {index} src = {atlimages}/>
		)
	
	})

	return(
	<div className = "container Images">
		<div className = "col-md-12">
			{images}
		</div> 
	</div>

	)
	


}

export default Images





  // {props.userBadge.map((badge,index)=>{
  //         return(<Badge key={index} userBadge={badge} />)
  //       })}


   // if(this.state.gists.length == 0){
        //     return (<h1>Loading...</h1>)
        // }
        // console.log(this.state.gists)
        // // LOCAL variable called gist. 
        // // NOT the same thign as this.state.gists
        // const localimages = [];
        // this.state.images.map((images, index)=>{
        //     localimages.push(
            	
        //     )








// export default Images


//  render(){
//         if(this.state.gists.length == 0){
//             return (<h1>Loading...</h1>)
//         }
//         console.log(this.state.gists)
//         // LOCAL variable called gist. 
//         // NOT the same thign as this.state.gists
//         const localGists = [];
//         this.state.gists.map((gist, index)=>{
//             localGists.push(
//                 <div key={index}>
//                     <Link key={index} to={`/g/${gist.id}`}>{gist.title}</Link>
//                 </div>
//             )
// });